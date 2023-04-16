import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <h1>My personal React header</h1>
            <ul>
                <li>
                    <Link to='react-pet-projects/'>Home</Link>
                </li>
                <li>
                    <Link to='react-pet-projects/todo'>Todo APP</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
