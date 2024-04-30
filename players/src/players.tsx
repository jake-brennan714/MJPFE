import NavBar from "../../src/navbar";
import Footer from "../../src/footer";
import "./players.css";
import listPlayers from '../../shared-data/arml.players.json';


import React from "react";
import ReactDOM from "react-dom/client";

export function PlayerList() {

    const players = [];
    for (let i = 1; i < listPlayers.length; i++) {
        if (i !== 105) {
            players.push(listPlayers[i]);
        }
    }

    return (
        <>
            <div className="list-box">
                <ul className="list-group">
                    {players.map((player) => (
                        <li key={player.displayName} className={`player`}>
                            <a href={`http://localhost:5173/player/?p=${player._id}`}>{player.displayName}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar />
    </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("content-root")!).render(
    <React.StrictMode>
        <PlayerList />
    </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("footer")!).render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
);