//estilização
import "./style.css";

//componentes
import CardBolo from "../../components/CardBolo";

//api
import api from "../../utils/api";

//hooks

import { useEffect, useState } from "react";




function ListaBolo() {
    
    //js
    //const listaBolo = [];

    //react

    //bolos =>ver o valor que esta armazenado
    //setBolos => atribuir um valor
    //useState<any[] => o tipo do valor que receber
    //([]) => e um valor react
    //setBolos ([1,2,3,4]);

    //visulizar valor em js e react
    //bolos

    const [bolos, setBolos] = useState<any[]>([]);

    function listarBolos() {
        //http://localhost:3000/bolos
        api.get("bolos")
        .then((response) => {
            /*the e quando api da retorno positivo */
            setBolos(response.data);

            console.log(response.data);
            //atualiza o valor bolos 
            //pelo retorno do pai

            setBolos(response.data);

            console.log(response.data);
        })
        .catch((error) => {
            /* cath e quando api da retorno negativo */
            console.log(error);

        })
        
    }

    //que useEffect e acionado quando o componente e inicializado e modificacao

    useEffect(() => {
        //listabolos e acionado 
        listarBolos();

    }, [
        /*monitoria */
    ]);


    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}

            </section>
        </main>
    );
};

export default ListaBolo;