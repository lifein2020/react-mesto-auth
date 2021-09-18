import { Route } from 'react-router-dom';

function Footer() {
    return (
        <Route path="/">
            <footer className="footer">
                <h3 className="footer__title">&copy; 2020 Mesto Russia</h3>
            </footer>
        </Route>
        
    );
}
    
export default Footer;