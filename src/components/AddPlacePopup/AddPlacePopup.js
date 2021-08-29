

function AddPlacePopup(props) {
    return (
        <>
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
                        noValidate
                    >
                        {props.children}
                        <input
                            type="text"
                            className="popup__input popup__input_card_name"
                            id="card-name-input"
                            name="card_name"
                            autoComplete="off"
                            required
                            placeholder="Название"
                            value=""
                            minLength="2"
                            maxLength="30"
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
                            value=""
                        />
                        <span
                            className="popup__error card-image-link-input-error"
                        >
                        </span>
                        <button type="submit" disabled className="popup__button popup__button_disabled">Создать</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddPlacePopup;