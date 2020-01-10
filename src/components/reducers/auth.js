const initialState = {
    token: localStorage.getItem('token'),
    isLoading : false ,
    isAuthenticated : null,
    user: null
}


export default (state=initialState) => {
  return state 
  // return state

}