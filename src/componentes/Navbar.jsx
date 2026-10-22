function Navbar() {
    return (
        <nav className="menu">
            <div className="itens_menu">
                <a className="Item_menu" href="#">Cafena</a>
                <button className= "Navbar_togler" type="button" data-bs-toggle="colapse" data-bs-targget="#menuNavbar"><span></span></button>

            </div>
        </nav>
    );
}

export default Navbar 