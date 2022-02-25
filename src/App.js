import logo from './logo.svg';
import './App.css';

const Card = ({ title, description }) => {
  return(
<     div className="card">
        <p>{title}</p>
        <p>{description}</p>
      </div>
  )
      
}

function App() {
  return (
    <div className="App">
      <h2>NotesApp</h2>

      <div>
        <form className='input-field'>
        <input placeholder='Note title' />
        <textarea placeholder='Enter the note here' />
        </form>
        <button>Add Note</button>
        <section className='note-card'>
        < Card title="Exam" description= "Exam aa gya h babu kuch pdhai krlo" />
        < Card />
        < Card />
        < Card />
        </section>
        
      

      </div>
    </div>
  );
}

export default App;
