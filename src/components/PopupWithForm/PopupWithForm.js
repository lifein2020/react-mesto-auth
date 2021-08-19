function PopupWithForm(props) {
    return (
        <>
            <div className={props.isOpen ? `popup popup_type_${props.name} popup_is-opened` : `popup popup_type_${props.name}`}>
                <div className="popup__container">
                    <button type="button" className={`popup__close popup__close_${props.name}`}  onClick={props.onClose}></button>
                    <h2 className="popup__title">{props.title}</h2>
                    <form name={props.name} id="formEdit" className={`popup__form popup__form_${props.name}`} action="#" autocomplete="off" novalidate>
                        {props.children}
                        <button type="submit" disabled className={`popup__button popup__${props.button}`}>{props.titleButton}</button>
                    </form>
                </div>
            </div>
        </>
    );
  }
    
  export default PopupWithForm;