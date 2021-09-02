//import React from 'react';
import { useState, useRef } from 'react';

function EditAvatarPopup(props) {

    const urlInput = useRef(null);

    const[userAvatar, setUserAvatar] = useState('https://somewebsite.com/someimage.jpg');
    
    function handleChangeUrl() {
        setUserAvatar(urlInput.current.value); 
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        props.onUpdateAvatar({
          avatarUrl: urlInput.current.value /* Значение инпута, полученное с помощью рефа*/
        });
      } 

    return (
        <>
            <div className={props.isOpen ? `popup popup_type_avatar popup_is-opened` : `popup popup_type_avatar`}>
                <div className="popup__container popup__container_avatar">
                    <button type="button" className="popup__close popup__close_avatar" onClick={props.onClose}></button>
                    <h2 className="popup__title">Обновить аватар</h2>
                    <form 
                        name="avatar"
                        id="formAvatar" 
                        className={`popup__form popup__form_${props.name}`} 
                        action="#" 
                        autoComplete="off" 
                        //noValidate
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="url"
                            className="popup__input popup__input_avatar_link"
                            id="avatar-link-input"
                            name="avatar_link"
                            autoComplete="on"
                            required
                            placeholder="Ссылка на аватар"
                            value={userAvatar}
                            ref={urlInput}
                            onChange={handleChangeUrl}
                        />
                        <span
                            className="popup__error avatar-link-input-error"
                        >
                        </span>
                        <button type="submit" className="popup__button popup__save">Сохранить</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditAvatarPopup;