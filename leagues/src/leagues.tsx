import NavBar from "../../src/navbar";
import Footer from "../../src/footer";
import "./leagues.css";

import React from "react";
import ReactDOM from "react-dom/client";

export function Leagues() {
    return (
        <>
            <div className="league-table">
                <div className="leagues a">
                    <a href="http://localhost:5173/league/?l=a1">A1</a>
                    <a href="http://localhost:5173/league/?l=a2">A2</a>
                </div>
                <div className="leagues b">
                    <a href="http://localhost:5173/league/?l=b1">B1</a>
                    <a href="http://localhost:5173/league/?l=b2">B2</a>
                    <a href="http://localhost:5173/league/?l=b3">B3</a>
                </div>
                <div className="leagues c">
                    <a href="http://localhost:5173/league/?l=c1">C1</a>
                </div>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar />
    </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("content-root")!).render(
    <React.StrictMode>
        <Leagues />
    </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById("footer")!).render(
    <React.StrictMode>
        <Footer />
    </React.StrictMode>
)