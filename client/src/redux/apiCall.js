
import { publicrequest } from "../requestmethod";
import { loginFailure, loginStart, loginSuccess, logoutSuccess, signinFailure, signinStart, signinSuccess } from "./userRedux"


export const login=async(dispatch,user) =>{
    dispatch(loginStart());
    try{
        const res=await publicrequest.post('/auth/login',user); 
        dispatch(loginSuccess(res.data))

    }catch(err){

        dispatch(loginFailure())
  
    }

}

export const logout=async(dispatch)=>{
    try{
        dispatch(logoutSuccess());
    }catch{

    }
}

export const register=async(dispatch,user)=>{
    dispatch(signinStart())
    try{
        const res=await publicrequest.post('/auth/register',user)
        dispatch(signinSuccess(res.data))

    }catch{
        dispatch(signinFailure())
    }
}
