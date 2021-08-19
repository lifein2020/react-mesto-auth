//import { useEffect, useState } from 'react';
//import kusto from '../../images/kusto.jpg';
import pen from '../../images/pen.png';
//import api from '../../utils/Api';


function Main(props) {
   
    return(
        <main className="content">
            <nav className="profile">
                <div className="profile__container">
                    <img className="profile__avatar" src={props.avatar} alt={props.name} />
                    <div className="profile__overlay" onClick={props.onEditAvatar}>
                        <img className="profile__pen" src={pen} alt="Карандаш" />
                    </div>
                </div>
                <div className="profile-info">
                    <div className="profile-info__container">
                        <h1 className="profile-info__name">{props.name}</h1>
                        <button className="profile-info__edit-button" type="button" name="send" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile-info__activity">{props.description}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </nav>

            <section className="elements">

            </section>
        </main>

    );

}

export default Main;