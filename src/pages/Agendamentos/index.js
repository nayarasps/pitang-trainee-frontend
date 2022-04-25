import {useCallback, useEffect, useState} from "react";
import {Check, X} from "tabler-icons-react";
import './style.css'

import axios from '../../services/api.js'


const Agendamentos = (columns,
                      endpoint,
                      title,
                      refetchTimestamp) => {
    const [agendamentos, setAgendamentos] = useState([]);

    const fetchData = useCallback(() => {
        axios.get("/agendamentos").then((response) => setAgendamentos(response.data.agendamentos));
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData, endpoint, refetchTimestamp]);


    const mudarStatus = (status, id) => {

        let novoStatus = {status: !status}

        axios.patch(/agendamentos/ + id, novoStatus).then(r => alert(r.data.mensagem));
    }

        return (
            <>
                {Object.keys(agendamentos).map((key) =>
                    <div className="table">
                        <p>{key}:</p>
                            <div>
                                <table>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Data de Nascimento</th>
                                        <th>Data Agendada</th>
                                        <th>Hora Agendada</th>
                                        <th>Status</th>
                                    </tr>
                                    {agendamentos[key].map((valor) =>
                                        <tr>
                                            <th>{valor.nome}</th>
                                            <th>{valor.dataNascimento}</th>
                                            <th>{valor.dataAgendada}</th>
                                            <th>{valor.horaAgendada}</th>
                                            <th>{valor.status? <Check/>: <X/>}</th>
                                            <button onClick={() => mudarStatus(valor.status, valor.id)}>Mudar Status</button>
                                        </tr>
                                    )}
                                </table>
                            </div>
                    </div>
                )}
            </>
        )

}

export default Agendamentos;