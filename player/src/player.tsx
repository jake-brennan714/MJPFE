import NavBar from "../../src/navbar";
import Footer from "../../src/footer";
import "./player.css";
import listPlayers from '../../shared-data/arml.players.json';

// Discord won't authorize my API requests from here, even though it will from Postman
// import secrets from './secret.json';
// import { useState, useEffect } from "react";

import React from "react";
import ReactDOM from "react-dom/client";

// function Authorize() {
//     return secrets.BOT_TOKEN;
// }

// function AvatarStateTracker(userId: number) {
//     const [avatarHash, setAvatarHash] = useState("");
//
//     useEffect(() => {
//         getHash()
//     })
//
//     const getHash = async () => {
//         const response = await fetch(new Request(
//             "https://discord.com/api/v10/users/" + userId,
//             {
//                 method: "GET",
//                 mode: "no-cors",
//                 headers: {
//                     Authorization: secrets.BOT_TOKEN,
//                     Host: "discord.com"
//                 }
//             }))
//
//         setAvatarHash(await (response.json().then(data => data["avatar"])));
//     }
// }

// async function FetchData(info: Request) {
//     return await fetch(info).then((res) => res.json()).then(data => {
//         return data["avatar"]
//     });
// }

export function PlayerData() {
    const params = new URLSearchParams(window.location.search);

    const player = listPlayers[parseInt(params.get("p") || "")];
    const fname = player.displayName.split(" ")[0];
    const linit = player.displayName.split(" ")[1].substring(0, 1);
    // const pid = "275";
    // const did = listPlayers[parseInt(pid)].disc_id || "";
    // if (did === -1) {
    //     return (<></>)
    // }

    // const url = "https://discord.com/api/v10/users/" + did;
    // const [data, setData] = useState(0);
    //
    // const fetchData = () => {
    //     fetch(url, {
    //         method: "GET",
    //         mode: "no-cors",
    //         headers: {
    //             Authorization: secrets.BOT_TOKEN,
    //
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setData(data));
    //
    // }
    //
    // useEffect(() => {
    //     fetchData();
    // })

    // for (let i = 1; i < listPlayers.length; i++) {
    //     if (listPlayers[i]._id === parseInt(params.get("p") || "")) {
    //         // AvatarStateTracker(listPlayers[i].disc_id || 0);
    //         const url = "https://discord.com/api/v10/users/" + listPlayers[i].disc_id;
    //         const [data, setData] = useState(0)
    //
    //         const fetchData = () => {
    //             return fetch(url, {
    //                 method: "GET",
    //                 mode: "no-cors",
    //                 headers: {
    //                     Authorization: secrets.BOT_TOKEN
    //                 }
    //             })
    //             .then(res => res.json())
    //             .then(data => setData(data))
    //         }
    //
    //         useEffect(() => {
    //             fetchData();
    //         }, [])
    //
    //         return (
    //             <>
    //                 <img src={`https://cdn.discordapp.com/avatars/${listPlayers[i].disc_id}/${data}`}
    //                      alt=""/>
    //             </>
    //         )
    //     }
    // }

    return (<>
        {/*<img src={`https://cdn.discordapp.com/avatars/${did}/${data}`} alt="profile picture" />*/}
        <div className="playerCard">
            <h1>{fname}</h1>
            <h2>{linit}.</h2>
        </div>
        <div className="playerStats">
            <h1>stats go here</h1>
        </div>
    </>)
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