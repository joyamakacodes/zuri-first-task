import { useState } from "react";
import Footer from '../Components/Footer'
const Contact = ()=>{
    const [name, setName]= useState("");
    const inputs = [
        {
            id: "first_name",
            placeholder: "Enter Your first name",
            label: "First Name"
        },
        {
            id: "last_name",
            placeholder: "Enter Your first name",
            label: "Last Name"
        },
        {
            id: "email",
            placeholder: "yourname@email.com",
            label: "Email"
        }
    ]
    const handleSubmit =(event)=>{
        event.preventDefault();
       if(name === ""){
        alert("please fill form appropriately")
        }else{
            alert("Message Sent")
        }
        
    }
    
    return(
        <>
                <div className="contact">
        <div className="formContainer">
            <h1>Contact Me </h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>

            <form onSubmit={handleSubmit}>
            <div className="inputCon">
                {inputs.map((input)=>(
                <div>
                    <div>
                    <label>{input.label}</label>
                    </div>
                    <div>
                    <input type="text" id={input.id} placeholder={input.placeholder} onChange={(e)=> setName(e.target.value)} />
                    </div>
              
                </div>
                ))}
                </div>
                <label>Message</label>
                <textarea id="message" rows="6" placeholder="Send me a message and I'll reply you as soon as possible.."></textarea>
                <p><input type="checkbox"/>You agree to providing your data to Joy Onweani who may contact you.</p>
                <button id="btn__submit">Submit</button>
                </form>
        </div>
    </div>
    <Footer/>
        </>

    )
}
export default Contact