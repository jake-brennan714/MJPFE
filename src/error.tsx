import {useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>I'm sorry</h1>
            <p>An unexpected error has occurred.</p>
            <p>
                {/*eslint-disable-next-line*/}
                {/*@ts-ignore*/}
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}