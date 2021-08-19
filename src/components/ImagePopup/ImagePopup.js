function ImagePopup() {
    return (
        <div className="popup popup_type_image">
            <div className="popup__container-image">
                <button type="button" className="popup__close popup__close_image"></button>
                <img className="popup__image" src="#" alt="#" />
                <h2 className="popup__title-image"></h2>
            </div>
        </div>
    );
}

export default ImagePopup;