import { useEffect, useState } from 'react';
import kusto from '../../images/kusto.jpg';
import pen from '../../images/pen.png';
import api from '../../utils/Api';

function Main(props) {
    const [userName, setUserName] = useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = useState({kusto});
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([/*api.getAboutCardsInfo(), */api.getAboutUserInfo()])
        .then(([cardsArray, result]) => {   // приходящие данные перечислять в том же порядке, что и в массиве с запросами
        userData = result;                // сначала получить userData потом ее использовать методах ниже
        //cardsList.initialCards(cardsArray);
        profileInfo.setUserInfo(result);
        profileInfo.setUserAvatar(result);
        })
        .catch((err) => {
        console.log(err);//(`${err}`);
        });
    }, [])


    return(
        <main className="content">
            <nav className="profile">
                <div className="profile__container">
                    <img className="profile__avatar" src={kusto} alt="Жак-Ив Кусто" />
                    <div className="profile__overlay" onClick={props.onEditAvatar}>
                        <img className="profile__pen" src={pen} alt="Карандаш" />
                    </div>
                </div>
                <div className="profile-info">
                    <div className="profile-info__container">
                        <h1 className="profile-info__name">Жак-Ив Кусто</h1>
                        <button className="profile-info__edit-button" type="button" name="send" onClick={props.onEditProfile}></button>
                    </div>
                    <p clasNames="profile-info__activity">Исследователь океана</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </nav>

            <section className="elements">

            </section>
        </main>

    );

}

export default Main;

//const popupEdit = document.querySelector('.popup_type_edit');
    //const buttonOpenPopupEdit = document.querySelector('.profile-info__edit-button');
    //const buttonOpenPopupEdit = document.querySelector('.profile-info__container');
    
    //let isClicked = false;
    //const formEditElement = popupEdit.querySelector('.popup__form_edit'); 
    /*const formEditInputName = document.formEditElement.querySelector('.popup__input_user_name');
    const formEditInputJob = document.querySelector('.popup__input_user_job');
    const profileName = document.querySelector('.profile-info__name');
    const profileJob = document.querySelector('.profile-info__activity');*/
    

    /*function closePopup(popup) {
        popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', handleKeydownPopup);
      }



    function handleKeydownPopup(event) {
        const key = event.key;
        if(key === 'Escape') {
          const popupOpened = document.querySelector('.popup_is-opened');
          closePopup(popupOpened);
          }
        }

    function openPopup(popup) {
        popup.classList.add('popup_is-opened');
        document.addEventListener('keydown', handleKeydownPopup);
      }*/

    /*function handleEditProfileClick() {
        isClicked = true;
        popupEdit.classList.add('popup_is-opened');
        //formEditInputName.value = profileName.textContent;
        //formEditInputJob.value = profileJob.textContent;
        //openPopup(popupEdit);
    }*/
    
    //buttonOpenPopupEdit.addEventListener('click', () => handleEditProfileClick());
    //<button className={isClicked ? "profile-info__edit-button popup_is-opened" : "profile-info__edit-button"} type="button" name="send"></button>
