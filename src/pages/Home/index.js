import { Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cadastro">Cadastro de Agendamento</Link>
                </li>
                <li>
                    <Link to="/agendamentos">Agendamentos Realizados</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;