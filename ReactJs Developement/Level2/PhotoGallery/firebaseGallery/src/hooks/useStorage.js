//Firebase storage mein kya kya krna hai wo likh rhe h yaha pe custom hook  use storage mein 
import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { projectStorage } from "../firebase/config";


const useStorage = (file) =>{


    const [progress, setProgress] = useState;
    const [error, setError] = useState;
    const [url, setUrl] = useState;

     useEffect(() =>{
         //refrences

         const storageRef = projectStorage.ref(file.name)

         storageRef.put(file).on('state_changed',(snap) => {

            let percentage = (snap.bytesTransferred / snap.totalbytes) * 100;
            setProgress(percentage);
         }, (err) =>{
            setError(err);
         }, async() =>{
            const url = await storageRef.getDownloadURL();
            setUrl(url);
         })
     }, [file])


     return{progress, error , url}


}


export default useStorage;