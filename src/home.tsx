import React from "react";
import ReactDOM from "react-dom/client";

import NavBar from "./navbar.tsx";
import './home.css';
import Footer from "./footer.tsx";

export function WhatIs() {
    return (
        <>
            <div id="what-is-arml">
                <h1>WHAT IS ARML</h1>
                <p>
                    The American Riichi Mahjong League is a league for Japanese (Riichi) Mahjong.<br/>
                    The intent of this league is to generate an interest similar to what is seen in<br/>
                    the Japanese professional play environment.
                </p>
                <h2>MISSION</h2>
                <p>The American Riichi Mahjong League’s mission is to create a space where players from all over <br/> the country can compete against each other in a long-term structured format. </p>
            </div>
        </>
    )
    // return null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar />
    </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("content-root")!).render(
    <React.StrictMode>
        <WhatIs />
    </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("footer")!).render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
)