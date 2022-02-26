const Card = ({ title, description, bgColor, }) => {
    return (
        <div className="card" style={{ backgroundColor: bgColor }}>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default Card;