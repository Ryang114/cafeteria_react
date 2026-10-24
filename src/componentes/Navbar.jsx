
function Navbar() {
    return (
        <header className="sticky-top bg-body">
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container">
                    <a className="navbar-brand fw-bold cafena_logo nav_personalisada" href="#home">Cafena</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavbar" aria-controls="menuNavbar" aria-expanded="false" aria-label="Abrir menu"><span className="navbar-toggler-icon"></span></button>

                    <div className="collapse navbar-collapse" id="menuNavbar">

                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about" >Sobre</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#menu" >Menu</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#reviews" >Avaliações</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#address">Endereço</a>
                            </li>
                        </ul>

                        <div className="d-flex align-items-center gap-3">
                            <button type="button" className=" btn btn-link p-0" aria-label="buscar">🔍</button>

                            <button type="button" className="btn btn-link p-0 position-relative" aria-label="Carrinho">🛒<span className="position-absolute top-0 start-100 translate-middle badge bg-danger">2</span></button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar 