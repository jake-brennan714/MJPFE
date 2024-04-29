import NavBar from "../../src/navbar";
import Footer from "../../src/footer";
import "./players.css";
import listPlayers from '../../shared-data/arml.players.json';


import React from "react";
import ReactDOM from "react-dom/client";

class QueryInfo {
    query: string | undefined;

    updateQuery(newQuery: string) {
        this.query = newQuery;
    }

    getQuery() {
        return this.query;
    }

    matchesStr(test: string) {
        if (this.query === undefined || this.query === "") {
            return true;
        } else {
            return test.includes(this.query);
        }
    }

    matches(testObject: { displayName: string; }) {
        return this.matchesStr(testObject.displayName);
    }
}

const qi = new QueryInfo();

export function SearchTools() {

    return (
        <>
            <div className="search-container">
                <form name="search-input">
                    <input className="search-input" type="text" placeholder="Search..." form="search-input" onChange={(e) => {
                        qi.updateQuery(e.target.value);
                    }}/>
                </form>
            </div>
            <hr />
        </>
    )
}

export function PlayerList(queryinfo: QueryInfo) {

    if (queryinfo !== undefined && typeof queryinfo.getQuery() !== "undefined") {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (queryinfo.getQuery().length > 0) {
            const players = [];
            for (let i = 1; i < listPlayers.length; i++) {
                if (queryinfo.matches(listPlayers[i])) {
                    players.push(listPlayers[i]);
                }
            }

            return (
                <>
                    <div className="list-box">
                        <ul className="list-group">
                            {players.map((player) => (
                                <li key={player.displayName} className="player">
                                    <a href={`http://localhost:5173/player?p=${player._id}`}>{player.displayName}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )
        }
    }

    const players = [];
    for (let i = 1; i < listPlayers.length; i++) {
        players.push(listPlayers[i]);
    }

    return (
        <>
            <div className="list-box">
                <ul className="list-group">
                    {players.map((player) => (
                        <li key={player.displayName} className="player">
                            <a href={`http://localhost:5173/player?p=${player._id}`}>{player.displayName}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export function FilteredList() {
    return PlayerList(qi);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar />
    </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("content-root")!).render(
    <React.StrictMode>
        <SearchTools />
        <FilteredList />
    </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("footer")!).render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
);