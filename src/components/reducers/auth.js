import { USER_LOADED ,USER_LOADING, AUTH_ERROR} from "../action/types"

const initialState = {
    token: localStorage.getItem('token'),
    isLoading : false ,
    isAuthenticated : null,
    user: null
}


export default (state=initialState, action) => {
  switch (action.type){
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case USER_LOADED :
      return {
        ...state,
        isAuthenticated : true,
        isLoading : false,
        user: action.payload
      }
    case AUTH_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }
    default:
      return state;
  }
}