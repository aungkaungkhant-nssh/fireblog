import { ref } from "vue";
import {auth, db} from '../firebase/config'
let error=ref(null);
let createAccount=async(name,email,password)=>{
    try{
        let res=await auth.createUserWithEmailAndPassword(email,password);
        if(!res){
            throw new Error("Cannot create Account");
        }
        res.user.updateProfile({displayName:name});
        return res;
    }catch(err){
        error.value=err.message;
    }
}
let signUp=()=>{
    return{error,createAccount};
}
export default signUp;