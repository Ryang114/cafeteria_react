import { useState } from "react";
import MenuCard from "./MenuCard";
import {Categorias, ItensDomenu } from "../data/MenuItens";
function Menu() {
    const [CategoriaAtiva, SetCategoriaAtiva] = useState("todos");

    const ItensVisiveis = CategoriaAtiva === "todos"

        ? ItensDomenu =
     : ItensDomenu.filter(function (item) {
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

        </div>

       </section>

    );
}
 
export default Menu;