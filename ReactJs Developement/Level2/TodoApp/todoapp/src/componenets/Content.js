import React, { useState } from "react";



const Content = () =>{
    const [text, setText]  = useState(null);

    const onClickHandler = (e) =>{
        console.log(e.text.lenght)
        
    }

    return (
        <form >
            <input type='text' placeholder="Enter the Tasks">
                     

            </input>

            <button className="btn1" onClick={onClickHandler} >ADD</button>

        </form>
    );







}

export default Content;