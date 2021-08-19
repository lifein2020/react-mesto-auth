function Card() {
    return (
        <template id="element-template">
            <article className="element">
                <img className="element__image" src="#" alt="#" />
                <button className="element__trash" type="button"></button>
                <div className="element__text">
                    <h2 className="element__title"></h2>
                    <div className="element__group">
                        <button className="element__like" type="button"></button>
                        <div className="element__count"></div>
                    </div>
                </div>
            </article>
        </template>
    );
}
    
export default Card;
