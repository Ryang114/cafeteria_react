import AvaliacaoCard from "../data/depoimentos";
import { Clientes } from "../componentes/AvaliacaoCard";

function Avalicoes() {
    return (
        <section className="avaliaçoes" id="reviews">
            <div className="container">
                <div className="text-align-center mb-5">
                    <h2 className="titulo_avaliados" fw-bold>
                        O dizem,{""} <span className="destaque_avliacoes fw-bold">
                            nossos clientes
                        </span>
                    </h2>
                </div>
                <div className="row g-4">
                    {Clientes.Map}
                </div>
            </div>
        </section>

    );
}

export default Avalicoes;