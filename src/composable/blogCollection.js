import { ref } from "vue";
import { db } from "../firebase/config"

let blogCollection=()=>{
    let blogdata=ref([]);
    let blogerror=ref(null);
    let blogload=async(doc)=>{
        try{
                await db.collection(doc).onSnapshot((snap)=>{
                    let dd=[];
                   snap.docs.map((doc)=>{
                        let document={...doc.data(),id:doc.id}
                        dd.push(document);
                       
                     })
                blogdata.value=dd;
               
            });
            
        }catch(err){
            error.value=err.message;
        }
    }
   
    return {blogerror,blogdata,blogload}
}

export default blogCollection;