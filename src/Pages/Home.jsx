// HOME PAGE COMPONENT
import { useState } from 'react';
import { Card } from "../Components/Card";


export const Home = ({notes, setNotes, setArchieveNotes}) => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [cardBgColor, setCardBgColor] = useState("");
    const [pinNotes, setPinNotes] = useState(false);
    const pinnedNotes = notes.filter((note) => note.pin);
    const unPinnedNotes = notes.filter((note) => !note.pin);
  
  
    const notesHandler = () => {
      setNotes((prev) => [...prev, {id: Math.random(), title: title, description: description, bgColor: cardBgColor, pin: pinNotes}]);
      setTitle("")
      setDescription("")
      setCardBgColor("")
      setPinNotes("")
    };
  
  
    return(
        <div>
        <form className='input-field' style={{backgroundColor: cardBgColor }}>
        <input type='text' placeholder='Note title' value={title} onChange={(event) => setTitle(event.target.value)} />
        <textarea 
        placeholder='Enter the note here' 
        value={description}
        onChange = {(event) => setDescription(event.target.value)} />
        </form>
  
        <div className="btn">
        <button onClick={() => setPinNotes((prev => !prev))}>{pinNotes ? "Unpin" : "Pin"}</button>
        <button onClick={notesHandler} disabled={title==="" && description===""}>Add Note</button>
        <button onClick={() => setCardBgColor("#fbbf33")} >Yellow</button>
        <button onClick={() => setCardBgColor("#c8f08f")}>Green</button>
        <button onClick={() => setCardBgColor("#a5f8ea")}>Blue</button>
        </div>
        
        {pinnedNotes && pinnedNotes.length>=1 && <h2> Pinned </h2>}
        <section className='note-card'>
          {pinnedNotes.map((note) => {
            return <Card note={note} key={note.id} setNotes={setNotes} setArchieveNotes={setArchieveNotes} />
          }
          )}
        </section>
  
        {unPinnedNotes && unPinnedNotes.length>=1 && <h2> Unpinned </h2>}
        <section className='note-card'>
          {unPinnedNotes.map((note) => {
            return <Card note={note} key={note.id} setNotes={setNotes} setArchieveNotes={setArchieveNotes}  />
          }
          )}
        </section>
      </div>
    )
  }