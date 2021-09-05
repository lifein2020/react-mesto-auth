import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import ImagePopup from '../ImagePopup/ImagePopup';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useState, useEffect } from 'react';
import api from '../../utils/Api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import kusto from '../../images/kusto.jpg';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup';

function App() {

  //Для компонента Main:
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

  //Для компонентов папапов
  const handleAllPopupsClose = () => {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarOpen(false);
    setIsSelectedCard({});
    setIsPreviewPopupOpened(false);
  }

  //Для компонента Main, чтобы потом перебросить в Card через props:
  //1.
  const [currentUser, setCurrentUser] = useState({name: 'Жак-Ив Кусто', about: 'Исследователь океана', avatar: kusto});
  const [cards, setCards] = useState([]);
  //2.
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardsList()])
    .then(([userData, cardsArray]) => {
      setCurrentUser({
        name: userData.name, 
        about: userData.about, 
        avatar: userData.avatar,
        _id: userData._id,
      });
      setCards(cardsArray);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  //3.
  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //4.
  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
    .then(() => {
        setCards((state) =>  state.filter((c) => c._id !== card._id));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //Для компонента EditProfilePopup
  const handleUpdateUser = ({userName, userDescription}) => {
    // отправляем значения инпутов(то, что ввели)
    api.patchUserInfo({userName, userDescription}) 
    .then((dataProfile) => {
      setCurrentUser({
        name: dataProfile.name, 
        about: dataProfile.about,
        avatar: dataProfile.avatar, // чтобы аватар тоже отображался 
        _id: dataProfile._id, //чтобы лайки проставлялись после обновления профиля
      });
      //handleAllPopupsClose();
    })
    .then(() => {
      handleAllPopupsClose();
    })
    .catch((err) => {
      console.log(err);
    }) 
  }

  //Для компонента EditAvatarPopup
  const handleUpdateAvatar = ({ avatarUrl }) => {
    //отправляем то, что ввели в инпут
    api.patchAvatarUser({ avatarUrl })
    .then((dataProfile) => {
      setCurrentUser({
        avatar: dataProfile.avatar,
        //чтобы данные профиля тоже отображались 
        name: dataProfile.name, 
        about: dataProfile.about,
        _id: dataProfile._id,
      });
      handleAllPopupsClose();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //Для компонента AddPlacePopup
  function handleAddPlaceSubmit({ card_name, card_image_link }) {
    api.postAddCard({ card_name, card_image_link })
    .then(newCard => {
      setCards([newCard, ...cards]);
      handleAllPopupsClose();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            cards={cards}
            onCardClick={onCardClick}
            onLikeClick={handleCardLike}
            onDeleteClick={handleCardDelete}
          />
          <Footer />
          
          <EditProfilePopup
          isOpen={isEditProfileOpen}
          onClose={handleAllPopupsClose}
          //currentUser={currentUser}
          onUpdateUser={handleUpdateUser}
          >
          </EditProfilePopup>

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={handleAllPopupsClose}
            onAddPlace={handleAddPlaceSubmit}
          >
          </AddPlacePopup>

          <PopupWithForm
            name="confirm"
            id="formConfirm"
            title="Вы уверены?"
            button="button_confirm popup__save"
            titleButton="Да"
            onClose={handleAllPopupsClose}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarOpen}
            onClose={handleAllPopupsClose}
            onUpdateAvatar={handleUpdateAvatar}
          >
          </EditAvatarPopup>

          <ImagePopup card={selectedCard}
            onClose={handleAllPopupsClose}
            active={isPreviewPopupOpened}
          />

        </CurrentUserContext.Provider>
      </div>
    </>
  )
}

export default App;
