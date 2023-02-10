import './header.css';
import logo from '../logo.png';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">faq</a></li>
                    <li><a href="#"><img src={logo} className="App-logo" alt="logo do My Drugs" /></a></li>
                    <li><a href="#">safety</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </nav>
        </header>
    );
}