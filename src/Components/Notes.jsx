import "./CSS/Notes.css"
import { useState } from "react"

export default function Notes(props){
    const [note, setNote] = useState(
        {
            content:"",
            title:""
        }
    )

      function saveTextState(event){
        const {name, value}= event.target
        setNote((prevValue)=>{
            return {
                ...prevValue,
                [name]: value
            }
        })
    }   
    
    function submitNote(){
        props.addNotes(note)
        setNote( 
            {
                title:"",
                content:""
            }
        )
    }       

    return(
        <div className="notes">
            <input  name="title" placeholder="Title" className="title" onChange={saveTextState} value={note.title}/>
            <hr />
            <textarea name="content" placeholder="Take a note." className="content" onChange={saveTextState} value={note.content}></textarea>
            <button onClick={submitNote}><i className="fa-solid fa-plus"></i></button>
        </div>
        
    )
}