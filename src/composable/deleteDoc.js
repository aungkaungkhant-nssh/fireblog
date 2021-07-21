import { db } from "../firebase/config";

let trashDoc=async(col,id)=>{
    try{
        await db.collection(col).doc(id).delete();
    }catch(err){
        console.log(err.message);
    }
}
let deleteDoc=()=>{
    return {trashDoc}
}
export default deleteDoc