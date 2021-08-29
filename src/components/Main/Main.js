import React from 'react';
import { useEffect, useState } from 'react';
//import kusto from '../../images/kusto.jpg';
import pen from '../../images/pen.png';
import api from '../../utils/Api';
import Card from '../Card/Card';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
//import { CardsContext } from '../../contexts/CardsContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    //const cards = React.useContext(CardsContext);

    /*const [userName, setUserName] = useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = useState(kusto);*/
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getCardsInfo()
        .then((cardsArray) => {
            setCards(cardsArray);
        })
        .catch((err) => {
            console.log(err);
        })

    }, [])

    const handleCardLike = (card) => {
         // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    const handleCardDelete = (card) => {
        api.deleteCard(card._id)
        .then(() => {
            setCards((state) =>  state.filter((c) => c._id !== card._id));
        });
    }

    return(
        <main className="content">
            <nav className="profile">
                <div className="profile__container">
                    <img className="profile__avatar" src={currentUser.avatar} alt={currentUser.name} />
                    <div className="profile__overlay" onClick={props.onEditAvatar}>
                        <img className="profile__pen" src={pen} alt="Карандаш" />
                    </div>
                </div>
                <div className="profile-info">
                    <div className="profile-info__container">
                        <h1 className="profile-info__name">{currentUser.name}</h1>
                        <button className="profile-info__edit-button" type="button" name="send" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile-info__activity">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </nav>

            <section className="elements">
                {cards.map(card => {
                        return <Card 
                                    key={card._id} 
                                    card={card} 
                                    onCardClick={props.onCardClick} 
                                    onCardLike={handleCardLike} 
                                    onCardDelete={handleCardDelete}
                                />
                    })}
            </section>
        </main>
    );
}

export default Main;



