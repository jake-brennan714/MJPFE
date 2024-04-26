import './navbar.css'

function NavBar() {
    return (
        <>
            <div className="ext-box">
                <div className="navbar int-box">
                    <ul className="navbar-nav">
                        <li className="nav-icon">
                            <a href="http://localhost:5173/"><i className="fa-regular fa-circle"></i></a>
                        </li>

                        <li className="spacer"></li>

                        <li className="nav-home">
                            <a href="http://localhost:5173/">H<span className="small-cap testing-control">ome</span></a>
                        </li>

                        <li className="spacer"></li>

                        <li className="nav-players">
                            <a href="http://localhost:5173/players/">P<span className="small-cap testing-B">layers</span></a>
                        </li>

                        <li className="spacer"></li>

                        <li className="nav-leagues">
                            <a href="http://localhost:5173/leagues/">L<span className="small-cap testing-A">eagues</span></a>
                        </li>

                        <li className="nav-account flr">
                            <a href="http://localhost:5173/account"><i className="fa-solid fa-circle-user"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default NavBar;