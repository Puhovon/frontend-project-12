import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div id='error-page'>
            <h1>Ooops!</h1>
            <p>Sorry, unexepted error...</p>
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    )
}

export default ErrorPage;