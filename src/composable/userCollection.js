import { ref } from "vue";
import { db } from "../firebase/config"

let userCollection=()=>{
    let data=ref([]);
    let error=ref(null);
    let load=async(doc)=>{
        try{
            let res=await db.collection(doc).get();
            data.value=res.docs.map((doc)=>{
                return {id:doc.id,...doc.data()}
            })
        }catch(err){
            error.value=err.message;
        }
    }
   
    return {error,data,load}
}

export default userCollection;