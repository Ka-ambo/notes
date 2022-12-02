
import './App.css';
import Header from "./Components/Header"
import Notes from "./Components/Notes"
import { useState } from "react"
import DisplayNotes from './Components/DisplayNotes';

function App() {
  const [notes, setNotes] = useState([])

  function addNotes(newNote){
    setNotes((prevValue)=>{
      return [ ...prevValue,newNote]
    })
  }
  function deleteNote(id){
    setNotes((prevValue)=>{
      return prevValue.filter((item, index)=>{
          return index !== id
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <div className="contents">
            <Notes addNotes={addNotes}/>
      </div>
      <div className="list">
       {notes.map((note, index)=> <DisplayNotes title={note.title} content={note.content}
       onDelete={deleteNote}
       key={index} id={index}/>)}
      </div>
    </div>
  );
}

export default App;
