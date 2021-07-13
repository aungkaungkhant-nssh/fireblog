import { ref } from "vue";
import { db } from "../firebase/config"

let userCollection=()=>{
    let usersData=ref([]);
    let error=ref(null);
    let load=async()=>{
        try{
            let res=await db.collection("users").get();
            usersData.value=res.docs.map((doc)=>{
                return {id:doc.id,...doc.data()}
            })
        }catch(err){
            error.value=err.message;
        }
    }
   
    return {error,usersData,load}
}

export default userCollection;