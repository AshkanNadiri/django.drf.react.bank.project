import axios from 'axios';
import { returnErrors } from './messages'
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL,
    LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS,RESET_PASSWORD,RESET_FAIL
 } from './types'


// Reset password
export const resetPassword = (username, password) => (dispatch, getState) => {
    //Header 
    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    }
    //Request body
    const body = JSON.stringify({username, password})

    axios
        .put('http://127.0.0.1:8000/password',body ,tokenConfig(getState))
        .then(res => {
            dispatch({
                type: RESET_PASSWORD,
                payload: res.data
            });
            alert('Password successfully changed. Please login with the new password')
        }).catch(err => {
            dispatch ({
                type: RESET_FAIL
            })
            alert('Username not found')
            console.log('error')
        });
}
// Check the token and load user
export const loadUser = () => (dispatch, getState) => {
 
    axios.get('http://127.0.0.1:8000/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch ({
                type: USER_LOADED,
                payload : res.data
            })
        }).catch (err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}

// LOGIN USER
export const login = (username, password) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    //Request body
    const body = JSON.stringify({username,password})

    axios.post('http://127.0.0.1:8000/api/auth/login', body, config)
        .then(res => {

            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: LOGIN_FAIL
            })
            alert(err.response.data.non_field_errors);
        })

}
//REGISTER USER
export const register = ({username, password, email,groups }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    //Request body
    const body = JSON.stringify({username,password, email,groups})

    axios.post('http://127.0.0.1:8000/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: REGISTER_FAIL
            })
            alert(err.response.data.non_field_errors);
        })

}
// LOGOUT USER
export const logout = () => (dispatch, getState) => {

    axios.post('http://127.0.0.1:8000/api/auth/logout/',null, tokenConfig(getState))
        .then(res => {
            dispatch ({
                type: LOGOUT_SUCCESS,
                payload : res.data
            })
        }).catch (err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            
        })
}

// setup config with token -helper function 
export const tokenConfig = getState =>{
      //get token from state
      const token = getState().auth.token
      //headers
      const config = {
          headers: {
              'Content-Type':'application/json'
          }
      }
      // If token, add to headers config
      if(token) {
          config.headers['Authorization'] = `Token ${token}` ;
      }
      return config
}

// export const tokenConfig = getState => {
//     const token = getState().auth.token

//     const config ={
//         headers: {
//             'Content-Type': 
//         }
//     }

// }

//branch view

// export const getUser =(getState) => {
//     const loggedUser = getState().user.username

//     console.log(loggedUser)
// }





