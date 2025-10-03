
function Card(props){
    return(
        <div className="card">
            <img src={props.src} alt="Imagen de la persona" />
            <h2>{props.titulo}</h2>
            <h3>{props.profecion}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default Card