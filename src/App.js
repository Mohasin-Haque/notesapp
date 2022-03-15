import './App.css';
import { useState, useEffect } from 'react';
import { Home } from "./Pages/Home";
import Archieve from './Pages/Archive';

function App() {
  const [notes, setNotes] = useState([]);
  const [route, setRoute] = useState("notes"); 
  const [archieveNotes, setArchieveNotes] = useState([]);

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem("notes")) || []);
  }, []);

 useEffect(() => {
   localStorage.setItem("notes", JSON.stringify(notes));
 }, [notes]);

  // useEffect(()=>{
  //   localStorage.setItem("notes", JSON.stringify(notes));
  //   console.log(localStorage.getItem("notes"))
  // })

  return (
    <div className="App">
      <h2>NotesApp</h2>
      <div>
        <button onClick={() => setRoute("notes")}> Home </button>
        <button onClick={() => setRoute("archive")}> Archive </button>
      </div>
      {route === "archive" && <Archieve archieveNotes={archieveNotes} />}
      {route === "notes" &&  <Home notes={notes} setNotes={setNotes} setArchieveNotes={setArchieveNotes} />}
    </div>
  );
}
export default App;
