import NavBar from "../../src/navbar";
import Footer from "../../src/footer";
// import "./player.css";
import listPlayers from '../../shared-data/arml.players.json';

import React from "react";
import ReactDOM from "react-dom/client";

export function PlayerData() {
    const params = new URLSearchParams(window.location.search);
    for (let i = 1; i < listPlayers.length; i++) {
        if (listPlayers[i]._id === parseInt(params.get("p") || "")) {
            return (
                <>

                </>
            )
        }
    }

    return (<></>)
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar />
    </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("content-root")!).render(
    <React.StrictMode>
        <PlayerData />
    </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("footer")!).render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
);