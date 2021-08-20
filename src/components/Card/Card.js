function Card(card) {

    /*const handleCardClick = () => {
        onCardClick(card);
      } */

    return (
            <article className="element">
                <img className="element__image" src={card.link} alt={card.name} /*onClick={handleCardClick}8*/ />
                <button className="element__trash" type="button"></button>
                <div className="element__text">
                    <h2 className="element__title">{card.name}</h2>
                    <div className="element__group">
                        <button className="element__like" type="button"></button>
                        <div className="element__count">{card.likes.length}</div>
                    </div>
                </div>
            </article>
    );
}
    
export default Card;
