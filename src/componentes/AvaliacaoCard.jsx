function AvaliacaoCard({ item }) {
    const inteiras = Math.floor(item.nota);//aqui ele calcula a parte interia da nota 
    const TemMeia = item.nota - inteiras >= 0.5;//aqui ele cacula a parte que tem meio  
    const estrelas = "★".repeat(inteiras) + (TemMeia ? "½" : "");//aqui ele cria a estrela que e string que vai se repetir o numero de veses que estiver com a nota e se tiver meio tipo 0.5 ele vai colocar metadade mas se n ele n vai ter.
    const notaFormatada = item.nota.toLocaleString('pt-BR', { minimumFractionDigits: 1 });//Aqui ele vai pegar o item da nota e vai formatar para o padrão brasileir a string que e vai ter no minimo uma casa decimal depois da virgula.

    return (
        <div className="card card_avaliacao h-100 p-4">
            <div className=" avaliacao_estrelas fw-bold mb-3">
                    {estrelas} {notaFormatada}
            </div>
            <p className="texto_card mb-4">
                {item.depoimento}
            </p>
            <div className="d-flex align-items-center gap-3">
                <img src={item.imagem} alt={item.nome}  className="avaliacao_foto rounded-circle"/>
                <span className="alvaliacao_nome fw-bold">
                    {item.nome}
                </span>
            </div>
        </div>

    );
}

export default AvaliacaoCard;

