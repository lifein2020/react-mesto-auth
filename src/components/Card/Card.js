function Card(props) {

    const handleCardClick = () => {
        props.onCardClick(props.card);
      } 

    return (
            <article className="element">
                <img className="element__image" src={props.src} alt={props.alt} onClick={handleCardClick} />
                <button className="element__trash" type="button"></button>
                <div className="element__text">
                    <h2 className="element__title">{props.title}</h2>
                    <div className="element__group">
                        <button className="element__like" type="button"></button>
                        <div className="element__count">{props.count}</div>
                    </div>
                </div>
            </article>
    );
}
    
export default Card;
