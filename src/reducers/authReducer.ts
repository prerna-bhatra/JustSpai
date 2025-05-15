// reducers/authReducer.ts
// import { SET_TOKEN } from "../actions/authActions";

interface AuthState {
    token: string | null;
    isLoggedIn:boolean
  }
  
  const initialState: AuthState = {
    token: null,
    isLoggedIn:false
  };
  
  const authReducer = (state = initialState, action: any) => {
    // console.log("AUTH REDUCER======>", {
    //   initialState,
    //   action,
    // });
  
    // action ={
    //   type:"",
    //   payload:""
    // }
  
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          token: action.payload,
        };
      default:
        return state;
    }
    
  };
  
  export default authReducer;
  