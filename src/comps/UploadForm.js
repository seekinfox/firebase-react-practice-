import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const UploadForm = () => {
    //store the recived file from changeH function in state
    const [file, setFile] = useState(null)

    //error state when user selects wrong file type 
    const [error, setError] = useState(null) 

    //create array for allowed file types - when user selelcts file for upload make sure we select an image file
    const types = ['image/png', 'image/jpeg'];

    
    //after file is selected this function assigns the file to selected variable
    const  changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected)

        // store file in state if file selected
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null)
        } else {
            setFile(null); 
            setError("Please selects an valid image file ( png or jpeg )")
        }
    }


    return(
        <>
        <form action="">
            <label htmlFor="fileUpload">+</label>
            <input id="fileUpload" type="file" onChange={changeHandler}/>
            <div className="output">
                { error && <div className="error">{error}</div>}
                { file &&  <div>{file.name}</div>}
                { file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>

        </>
    );

}
export default UploadForm