import AvaliacaoCard from "./AvaliacaoCard";
import { clientes } from "../data/depoimentos";
import './Avaliacoes.css'
function Avalicoes() {
    return (
        <section className="avaliacoes" id="reviews">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="titulo_avaliacoes fw-bold">
                        O que dizem{""} <span className="destaque_avaliacoes fw-bold">
                            nossos clientes
                        </span>
                    </h2>
                </div>
                <div className="row g-4">
                    {clientes.map(function (item) {
                        return (
                            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                                <AvaliacaoCard item={item} />
                            </div>
                        );
                    })
                    }

                </div>
            </div>
        </section>

    );
}

export default Avalicoes;