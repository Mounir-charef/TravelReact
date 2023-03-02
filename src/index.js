import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import './App.css';
// import App from './App';
// import {HashRouter} from "react-router-dom";
import {
    createBrowserRouter, Outlet,
    RouterProvider
} from "react-router-dom";
const Contact = lazy(() => import("./components/pages/Contact"))
const routes = [
        { path: '/', element: <Home />},
        { path: 'services', element: <Services /> },
        { path: 'sign-up', element: <SignUp /> },
        {
            path: 'contact', element: (
                <Suspense fallback={<p style={{textAlign: "center"}}> Loading ... </p>}>
                    <Contact />
                </Suspense>
            ),
        },
]

const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([{element: <App />, children: routes}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

