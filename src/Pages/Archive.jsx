import { Card } from "../Components/Card"

const Archieve = ({ archieveNotes }) => {
    return (
        <div>
            <h2>Archieve</h2>
            { archieveNotes.map(note => <Card note={note} key={note.id} />)}

        </div>
    )
}

export default Archieve