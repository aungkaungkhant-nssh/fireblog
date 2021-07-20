import { ref } from "vue";
import { storage } from "../firebase/config";

let fileStorage=()=>{
    let error=ref("");
    let fileUpload=(folderName,fileName,file)=>{
        try{
            let storageRef=storage.ref();
            const docRef=storageRef.child(`${folderName}/${fileName}`)
             docRef.put(file).on(
                 "state_changed",(snapshot)=>{
                     console.log(snapshot)
                 },
                 (err)=>{
                     console.log(err);
                 }
                //  ,async()=>{
                //      downloadURL.value=await docRef.getDownloadURL();
                //  }
             );
             return docRef;
        }catch(err){
            error.value=err.message;
            console.log(error.value);
        }
       
    }
    
  return {error,fileUpload}
}
export default fileStorage;