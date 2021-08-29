import {useState, useEffect} from 'react';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function EditProfilePopup(props) {

    // управляемые компоненты (input)
    const [userName, setUserName] = useState(''); 
    function handleChangeName(e) {
        setUserName(e.target.value);
    }
    const [userDescription, setUserDescription] = useState(''); 
    function handleChangeDescription(e) {
        setUserDescription(e.target.value);
    }

    //Чтобы подставить в форму текущие значения:
    //1. подписываемся на контекст
    const currentUser = React.useContext(CurrentUserContext); 

    //2. после загрузки текущего пользователя из API его данные будут использованы в управляемых компонентах.
    useEffect(() => {
        setUserName(currentUser.name);
        setUserDescription(currentUser.about);
    }, [currentUser]); 

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({ userName, userDescription });
    }

    return (
        <>
            <div className={props.isOpen ? `popup popup_type_edit popup_is-opened` : `popup popup_type_edit`}>
                <div className="popup__container popup__container_edit">
                    <button type="button" className="popup__close popup__close_edit"  onClick={props.onClose}></button>
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <form 
                        name="edit" 
                        id="formEdit" 
                        className="popup__form popup__form_edit" 
                        action="#" autoComplete="off" 
                        noValidate 
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            className="popup__input popup__input_user_name"
                            id="name-input"
                            name="name"
                            required
                            placeholder="Имя"
                            minLength="2"
                            maxLength="40"
                            value={userName}
                            onChange={handleChangeName}
                        />
                        <span
                            className="popup__error name-input-error"
                        >
                        </span>
                        <input
                            type="text"
                            className="popup__input popup__input_user_job"
                            id="job-input"
                            name="job"
                            required
                            placeholder="Род занятий"
                            minLength="2"
                            maxLength="200"
                            value={userDescription}
                            onChange={handleChangeDescription}
                        />
                        <span
                            className="popup__error job-input-error"
                        >
                        </span>
                        <button type="submit" className="popup__button popup__save">Сохранить</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditProfilePopup;