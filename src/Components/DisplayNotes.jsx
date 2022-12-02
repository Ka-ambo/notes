import "./CSS/DisplayNotes.css"


export default function DisplayNotes(props){

function handleClick(){
    props.onDelete(props.id)
    }

return(
    <div className="note-bg">
        <p   className="note-title">{props.title}</p>
        <hr />
        <p className="note-content"  >{props.content}</p>
        <i className="fa-solid fa-trash delete-note" onClick={handleClick}></i>
    </div>
)}