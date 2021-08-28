import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import ImagePopup from '../ImagePopup/ImagePopup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useState, useEffect } from 'react';
import api from '../../utils/Api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import kusto from '../../images/kusto.jpg';
//import { CardsContext } from '../../contexts/CardsContext';
//import { CardContext } from '../../contexts/CardContext';

function App() {

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const handleEditProfileClick = () => {
    setIsEditProfileOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
  const handleEditAvatarClick = () => {
    setIsEditAvatarOpen(true);
  }

  const [selectedCard, setIsSelectedCard] = useState({});
  const [isPreviewPopupOpened, setIsPreviewPopupOpened] = useState(false);
  function onCardClick(card) {
    setIsSelectedCard(card);
    setIsPreviewPopupOpened(true);
  }

  const handleAllPopupsClose = () => {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarOpen(false);
    setIsSelectedCard({});
    setIsPreviewPopupOpened(false);
  }

  const [currentUser, setCurrentUser] = useState({name: 'Жак-Ив Кусто', about: 'Исследователь океана', avatar: kusto});
  //const [cards, setCards] = useState([]);
  //const [card, setCard] = useState([]);
  useEffect(() => {
    /*Promise.all([api.getUserInfo(), api.getCardsInfo()])
    .then(([userData, cardsArray]) => {
      setCurrentUser({name: userData.name, about: userData.about, avatar: userData.avatar});
      setCards(cardsArray);
    })*/
    api.getUserInfo()
    .then((userData) => {
      setCurrentUser({name: userData.name, about: userData.about, avatar: userData.avatar});
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

//<CardsContext.Provider value={cards}> 

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
        
        <Header />
        <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={onCardClick}
        />
        <Footer />
      
        </CurrentUserContext.Provider>
      </div>

      <ImagePopup card={selectedCard}
        onClose={handleAllPopupsClose}
        active={isPreviewPopupOpened}
      />

      <PopupWithForm
        name="edit"
        id="formEdit"
        title="Редактировать профиль"
        button="save"
        titleButton="Сохранить"
        isOpen={isEditProfileOpen}
        onClose={handleAllPopupsClose}
      >
        <input
          type="text"
          className="popup__input popup__input_user_name"
          id="name-input"
          name="name"
          required
          placeholder="Имя"
          value=""
          minLength="2"
          maxLength="40"
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
          value=""
          minLength="2"
          maxLength="200"
        />
        <span
          className="popup__error job-input-error"
        >
        </span>
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        id="formAdd"
        title="Новое место"
        button="button_disabled"
        titleButton="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={handleAllPopupsClose}
      >
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
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        id="formConfirm"
        title="Вы уверены?"
        button="button_confirm popup__save"
        titleButton="Да"
        onClose={handleAllPopupsClose}
      />

      <PopupWithForm
        name="avatar"
        id="formAvatar"
        title="Обновить аватар"
        button="save"
        titleButton="Сохранить"
        isOpen={isEditAvatarOpen}
        onClose={handleAllPopupsClose}
      >
        <input
          type="url"
          className="popup__input popup__input_avatar_link"
          id="avatar-link-input"
          name="avatar_link"
          autoComplete="on"
          required
          placeholder="Ссылка на аватар"
          value="https://somewebsite.com/someimage.jpg"
        />
        <span
          className="popup__error avatar-link-input-error"
        >
        </span>
      </PopupWithForm>
      
    </>
  )
}

export default App;
