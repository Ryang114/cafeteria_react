import { Currency } from "lucide-react";

function MenuCard({ item }) {
    function formatar() {

        return ((pt - br, ({ style: "currency", Currency: BRL })
        ));
    }

    const desconto = Math.round((1 - item.preco / item.preco_antigo) * 100);

    return (
        <div className="card menu_card h-100 p-4">
            <img src={item.image} alt={item.nome} className="menu-card-img rounded-4 w-100" />
            <div className="conteudo_card d-flex flex-column p-0 pt-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="nome_menu_card fs-5 fw-bold mb-0">{item.nome}</h3>
                    <span className="badge menu-rouded-pill" tag_menu_card>-{desconto}%</span>
                </div>
                <div className="d-flex align-itens-baseline- gap-2 mb-3">
                    <span className="preco_menu_card fs-4 fw-bold">{formatar(item.preco)}</span>
                    <s className="menu_card_preco_antigo small">{formatar(item.preco_antigo)}</s>
                </div>
                <button btn butao_dourado w-100 py-2 mt-auto>
                    Adicionar
                </button>
            </div>
        </div>


    );
}

export default MenuCard