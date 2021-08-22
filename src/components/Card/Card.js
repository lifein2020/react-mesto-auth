function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
      } 

    return (
            <article className="element">
                <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleCardClick} />
                <button className="element__trash" type="button"></button>
                <div className="element__text">
                    <h2 className="element__title">{props.card.name}</h2>
                    <div className="element__group">
                        <button className="element__like" type="button"></button>
                        <div className="element__count"></div>
                    </div>
                </div>
            </article>
    );
}
    
export default Card;
