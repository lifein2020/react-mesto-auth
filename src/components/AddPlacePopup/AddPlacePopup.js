import {useState} from 'react';
import React from 'react';

function AddPlacePopup(props) {

    // управляемые компоненты (input)
    const [cardName, setCardName] = useState('');
    function handleChangeCardName(e) {
        setCardName(e.target.value);
    }

    const [cardImage, setCardImage] = useState('');
    function handleChangeCardImage(e) {
        setCardImage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onAddPlace({
            card_name: cardName, 
            card_image_link : cardImage,
        })
    }

    return (
        <div className={props.isOpen ? `popup popup_type_add-card popup_is-opened` : `popup popup_type_add-card`}>
            <div className="popup__container popup__container_add-card">
                <button type="button" className="popup__close popup__close_add-card"  onClick={props.onClose}></button>
                <h2 className="popup__title">Новое место</h2>
                <form 
                    name="add-card"
                    id="formAdd"
                    className="popup__form popup__form_add-card" 
                    action="#" 
                    autoComplete="off" 
                    //noValidate
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        className="popup__input popup__input_card_name"
                        id="card-name-input"
                        name="card_name"
                        autoComplete="off"
                        required
                        placeholder="Название"
                        minLength="2"
                        maxLength="30"
                        value={cardName}
                        onChange={handleChangeCardName}
                    />
                    <span
                        className="popup__error card-name-input-error"
                    >
                    </span>
                    <input
                        type="url"
                        className="popup__input popup__input_card_image-link"
                        id="card-image-link-input"
                        name="card_image_link"
                        autoComplete="on"
                        required
                        placeholder="Ссылка на картинку"
                        value={cardImage}
                        onChange={handleChangeCardImage}
                    />
                    <span
                        className="popup__error card-image-link-input-error"
                    >
                    </span>
                    <button type="submit" className="popup__button popup__button_disabled">Создать</button>
                </form>
            </div>
        </div>
    )
}

export default AddPlacePopup;