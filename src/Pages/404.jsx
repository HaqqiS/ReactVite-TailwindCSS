import { useRouteError } from "react-router-dom";
import React from 'react'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p className="text-xl my-2 text-gray-600">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg">
                {error.statusText || error.message}
            </p>
        </div>
    )
}

export default ErrorPage;