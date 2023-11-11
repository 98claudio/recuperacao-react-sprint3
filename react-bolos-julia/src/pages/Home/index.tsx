//estilização
import "./style.css";

//rotas

//hooks

//api


function Home() {

    return (

        <main className="home_main">

            <section className="banner"></section>

            <section className="mais_vendidos container">
                <h2>Mais Vendidos</h2>
                <div>

                    {/* CARD */}

                    {   /*<Link to="#" className="card" key={}>
                            <img src={""} alt={"Foto de um"} />
                            <h3>{}</h3>
                            <span>R$ {}</span>
                        </Link> 
                    */}



                </div>
                {/* <Link to={"lista/bolo"}>Ver mais bolos...</Link> */}
            </section>

            <section className="aproveite container">
                <h2>Aproveite</h2>
                <div>
                    <div className="card">
                        <h3>Cube Assintura</h3>
                        <p>Se torne cliente fidelizado e receba divresas vantagens</p>
                        {/* <Link to="#">Saiba mais</Link> */}
                    </div>
                    <div className="card">
                        <h3>Monte seu bolo</h3>
                        <p>Escolha os ingredientes e receba um bolo feito para você!</p>
                        {/* <Link to="#">Saiba mais</Link> */}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;