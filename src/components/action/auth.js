import axios from 'axios';
import { returnErrors } from './messages'
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL,
    LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from './types'

// Check the token and load user
export const loadUser = () => (dispatch, getState) => {
    // user loading
    dispatch({ type: USER_LOADING });
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

    axios.get('https://bank-django-drf-local.herokuapp.com/user/api/auth/user', config)
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


export const login = (username, password) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    //Request body
    const body = JSON.stringify({username,password})

    axios.post('https://bank-django-drf-local.herokuapp.com/api/auth/login', body, config)
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
        })

}


// export const register = ({username, email, password}) => dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }
//     const body = JSON.stringify({username, email, password});
//     axios.post('https://bank-django-drf-local.herokuapp.com/api/auth/register', body, config)
//     .then(res => {
//         dispatch({
//             type: REGISTER_SUCCESS,
//             payload: res.data,
//         })})
//     .catch(err => {
//         dispatch({type: REGISTER_FAIL});
//     })
// }

// export const logout = () => (dispatch, getState) => {
//     axios.post('https://bank-django-drf-local.herokuapp.com/api/auth/logout', null, tokenConfig(getState))
//     .then(res => {
//         dispatch({
//             type: LOGOUT_SUCCESS,
//         })
//     })   
//     .catch(err => console.log(err));
// }

// export const tokenConfig = getState => {
//     const token = getState().auth.token;
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     }
//     if(token) {
//         config.headers['Authorization'] = `Token ${token}`
//     }

//     return config;
// }
