import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage () {

    const error = useRouteError();

    return (
        <div className="inner-container">
            <h1>I am sorry, something wrong or page in dev process</h1>
            <p>Please take a look to other pages</p>
            <Link className="btn back-btn" to="/">
                Back
            </Link>
        </div>

    )
}