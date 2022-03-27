export const Card = ( {note, setArchieveNotes, setNotes}) => {

    const archieveClickHandler = () => {
        setArchieveNotes((prev) => [...prev, note]);
        setNotes((prev) => prev.filter(archivedNote => {
        return archivedNote.id !== note.id
        }))
        }
    const {title, description, bgColor} = note;
    return (
        <div className="card" style={{ backgroundColor: bgColor }}>
            <p>{title}</p>
            <p>{description}</p>
            <button onClick={archieveClickHandler}>Archive</button>
        </div>
    )
}

export default Card;