import { useEffect, useState } from 'react';
import kusto from '../../images/kusto.jpg';
import pen from '../../images/pen.png';
import api from '../../utils/Api';
import Card from '../Card/Card';

function Main(props) {
    const [userName, setUserName] = useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = useState(kusto);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getAboutUserInfo()
        .then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        });
        api.getAboutCardsInfo()
        .then((dataCards) => {
            setCards(dataCards);
            console.log(dataCards)
        });
    }, [])
   
    /* Подъем состояния ?
    function onCardClick(card) {
        setSelectedCard(card);
    }*/

    return(
        <main className="content">
            <nav className="profile">
                <div className="profile__container">
                    <img className="profile__avatar" src={userAvatar} alt={userName} />
                    <div className="profile__overlay" onClick={props.onEditAvatar}>
                        <img className="profile__pen" src={pen} alt="Карандаш" />
                    </div>
                </div>
                <div className="profile-info">
                    <div className="profile-info__container">
                        <h1 className="profile-info__name">{userName}</h1>
                        <button className="profile-info__edit-button" type="button" name="send" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile-info__activity">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </nav>

            <section className="elements">
                {cards.map(card => {
                    return <Card key={card._id} card={card} onCardClick={props.onCardClick} onPreviewPopupOpened={props.onPreviewPopupOpened} />
                })}
            </section>
        </main>
    );
}

export default Main;

