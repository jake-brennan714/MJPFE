import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";

import { WhatIs } from "./home.tsx";
import ErrorPage from "./error.tsx";
import { PlayerList } from "../players/src/players.tsx";
import Layout from "./layout.tsx";
import { PlayerData } from "../player/src/player.tsx";
import { Leagues } from "../leagues/src/leagues.tsx";
// import { ProtectedRoute } from "./routing/protectedroute.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WhatIs />,
        errorElement: <ErrorPage />
    },
    {
        path: "/players",
        element: <PlayerList />,
        errorElement: <ErrorPage />
    },
    {
        path: "/player/"
    }
]);

export default function MainRouter() {
    // let user = true;
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<WhatIs />} />
                    <Route path="players" element={<PlayerList />} />
                    <Route path="player/:playerId" element={<PlayerData />} />
                    <Route path="leagues" element={<Leagues />} />
                    {/*<Route path="league/:leagueName" element={<LeagueData />} />*/}
                    {/*<Route path="account" element={<ProtectedRoute user={user}>*/}
                    {/*    <AccountInfo />*/}
                    {/*</ProtectedRoute>} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById("content-root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)