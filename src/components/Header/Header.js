import logo from '../../images/logo.png'

function Header() {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="Лототип проекта Место" />
        </header>
    );
}
    
export default Header;

