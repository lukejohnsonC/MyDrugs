import './header.css';
import logo from '../logo.png';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href=".shop">shop</a></li>
                    <li><a href=".faq">faq</a></li>
                    <li><a href=".carousel"><img src={logo} className="App-logo" alt="logo do My Drugs" /></a></li>
                    <li><a href=".safety">safety</a></li>
                    <li><a href=".contact">contact</a></li>
                </ul>
            </nav>
        </header>
    );
}