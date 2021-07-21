import { ref } from "vue";
import { db } from "../firebase/config";

let error=ref("");
let update=async(col,id,detail)=>{
    try{
       await db.collection(col).doc(id).update(detail);
    }catch(err){
        error.value=err.message;
    }   

}
let updateDoc=()=>{
    return {error,update}
}
export default updateDoc;