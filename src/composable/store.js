import { ref } from "vue";
import {auth, db} from '../firebase/config'
let store=()=>{
 let storeError=ref("");
 let storeData=async(docs,data)=>{
     try{
        let doc=await db.collection(docs).add(data);
        if(!doc){
            throw new Error("Cannot Store");
        }
     }catch(err){
        storeError.value=err.message;
     }
  
 } 
 return {storeError,storeData}
}
export default store;