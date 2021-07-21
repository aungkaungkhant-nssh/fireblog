import { storage } from "../firebase/config"
let imageFileDelete=async(imagename)=>{
    let storageRef=storage.ref();
    let deleteImg=storageRef.child("blogs/"+imagename);
    try{
         await deleteImg.delete();
    }catch(err){
       console.log(err.message);
    }
}
let filedelete=()=>{
    return {imageFileDelete}
}
export default filedelete