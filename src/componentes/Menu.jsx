import { useState } from "react";
import MenuCard from "./MenuCard";
import { Categorias, ItensDoMenu } from "../data/MenuItens";
import "./Menu.css";
function Menu() {
    const [CategoriaAtiva, SetCategoriaAtiva] = useState("Todos");

    const ItensVisiveis = CategoriaAtiva === "Todos" // Se categoria ativa for igual a todos  

        ? ItensDoMenu //  se sim retorna todos os intens do menu   
        : ItensDoMenu.filter(function (item) { //se n ele filtra por categoria 
            return item.categoria === CategoriaAtiva
        })
    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="titulo_menu fw-bold">
                        Nosso {" "}
                        <span className="texto_dourado fw-bold">
                            Menu
                        </span>
                    </h2>
                    <p className="subtitulo_menu mb-0">
                        Escolha, adicione ao carrinho e retire no balcão.
                    </p>
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                    {Categorias.map(function (cat) {
                        return (
                            <button 
                            key={cat}
                            type="button"
                            aria-pressed={cat===CategoriaAtiva} 
                            className={`btn rounded-pill menu-filter ${cat-CategoriaAtiva ? "Active" : ""}`}>

                            </button>
                        );
                    })};

                </div>

            </div>

        </section>

    );
}

export default Menu;