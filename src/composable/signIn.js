import { ref } from 'vue';
import { auth } from '../firebase/config';
let error=ref(null);
let checkEmailandPassword=async(email,password)=>{
    try{
        let res=await auth.signInWithEmailAndPassword(email,password);
        if(!res){
          throw new Error("No Login");
        }
        return res;
     }catch(err){
       error.value=err.message;
     }
}
let signIn=()=>{
    return{error,checkEmailandPassword};
}
export default signIn