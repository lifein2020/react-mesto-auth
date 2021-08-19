import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Card from '../Card/Card';
import ImagePopup from '../ImagePopup/ImagePopup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import {useState, useEffect} from 'react';

function App() {

  const[isEditProfileOpen, setEditProfileOpen] = useState(false);
  const handleEditProfileClick = () => {
    setEditProfileOpen(true);
  }

  const[isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  const[isEditAvatarOpen, setEditAvatarOpen] = useState(false);
  const handleEditAvatarClick = () => {
    setEditAvatarOpen(true);
  }

  const handleAllPopupsClose = () => {
    setEditProfileOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarOpen(false);
  }


  return (
    <>
    <div className="page">
      <Header />
      <Main onEditProfile = {handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />
    </div>
    <Card />
    <ImagePopup />

    <PopupWithForm name="edit" title="Редактировать профиль" button="save" titleButton="Сохранить" isOpen={isEditProfileOpen} onClose={handleAllPopupsClose}>
      <input type="text" className="popup__input popup__input_user_name" id="name-input" name="name" required placeholder="Имя" value="" minlength="2" maxlength="40" />
      <span className="popup__error name-input-error"></span>
      <input type="text" className="popup__input popup__input_user_job" id="job-input" name="job" required placeholder="Род занятий" value="" minlength="2" maxlength="200" />
      <span className="popup__error job-input-error"></span>
    </PopupWithForm>

    <PopupWithForm name="add-card" title="Новое место" button="button_disabled" titleButton="Создать" isOpen={isAddPlacePopupOpen} onClose={handleAllPopupsClose}>
      <input type="text" className="popup__input popup__input_card_name"  id="card-name-input" name="card_name" autocomplete="off" required placeholder="Название" value="" minlength="2" maxlength="30" />
      <span className="popup__error card-name-input-error"></span>
      <input type="url" className="popup__input popup__input_card_image-link" id="card-image-link-input" name="card_image_link" autocomplete="on" required placeholder="Ссылка на картинку" value="" /> 
      <span className="popup__error card-image-link-input-error"></span>
    </PopupWithForm>

    <PopupWithForm name="confirm" title="Вы уверены?" button="button_confirm popup__save" titleButton="Да" onClose={handleAllPopupsClose}/>

    <PopupWithForm name="avatar" title="Обновить аватар" button="save" titleButton="Сохранить" isOpen={isEditAvatarOpen} onClose={handleAllPopupsClose}>
      <input type="url" className="popup__input popup__input_avatar_link" id="avatar-link-input" name="avatar_link" autocomplete="on" required placeholder="Ссылка на аватар" value="https://somewebsite.com/someimage.jpg" />
      <span className="popup__error avatar-link-input-error"></span>
    </PopupWithForm>
    </>
  )
}

export default App;
