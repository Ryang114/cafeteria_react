function Navbar() {
    return (
        <header className="sticky-top bg-body">
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container">
                    <a className="navbar-brand-fw-bold" href="#home">Cafena</a>

                    <button className="Navbar_toggler" type="button" data-bs-toggle="colapse" data-bs-targget="#menuNavbar" Aria-controls="#menuNavbar" Aria-expanded="false" aria-label= "Abrir-menu"><span className="navbar-togller-icon"></span></button>

                    <div className="colapse navbar-collapse" id="menuNavbar">

                        <ul className="navbar-nav">
                            <li className="Nav-item">
                                <a className="nav-link" href="home">Inicio</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar 