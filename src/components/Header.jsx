import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <h1>My personal React header</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='todo'>Todo APP</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
