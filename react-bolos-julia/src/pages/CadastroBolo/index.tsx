//estilização
import "./style.css";

//hooks


//api



function CadastroBolo() {


    return (
        <main>
            <section className="cadastro">
                <div className="glass">
                    <h1>Cadastro de Bolos</h1>
                    <form method="POST">
                        <div>
                            <label htmlFor="nome">Nome do Bolo:</label>
                            <input
                                className="input_estilo"
                                name="nome"
                                type="text"
                            />
                        </div>

                        <div>
                            <label htmlFor="valor">Valor do bolo:</label>
                            <input
                                className="input_estilo"
                                name="valor"
                                type="text"
                                id="valor"
                            />
                        </div>

                        <div>
                            <label htmlFor="imagem">Imagem:</label>
                            <input
                                className="input_estilo"
                                name="imagem"
                                type="file"
                                id="imagem"
                            />
                        </div>

                        <div>
                            <label htmlFor="ingredientes">Ingredientes:</label>
                            <textarea
                                className="input_estilo"
                                name="ingredientes"
                                id="ingredientes"
                            >
                            </textarea>
                        </div>
                        <div>
                            <label htmlFor="cobertura">Cobertura:</label>
                            <textarea
                                className="input_estilo"
                                name="cobertura"
                                id="cobertura"
                            >
                            </textarea>
                        </div>

                        <input className="btn" type="submit" value="Cadastrar" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default CadastroBolo;