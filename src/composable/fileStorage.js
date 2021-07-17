import { ref } from "vue";
import { storage } from "../firebase/config";

let fileStorage=()=>{
    let error=ref("");
    let fileUpload=(folderName,fileName,file)=>{
        try{
            let storageRef=storage.ref(`${folderName}/${fileName}`);
            storageRef.put(file);
        }catch(err){
            error.value=err.message;
            console.log(error.value);
        }
       
    }
    
  return {error,fileUpload}
}
export default fileStorage;