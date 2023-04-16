import { Link } from "react-router-dom";
import Social from "./Social";

function Header() {

    return (
        <header className="header">
            <h1>Kobzar Maks</h1>
            <ul className="nav">
                <li>
                    <Link to='home'>Home</Link>
                </li>
                <li>
                    <Link to='todo'>Todo APP</Link>
                </li>
            </ul>
            <div className="social-links">
                <Social />
            </div>
        </header>
    )
}

export default Header
