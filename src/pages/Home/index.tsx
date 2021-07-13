import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container-fluid mt-4">
            <h1>Desafio Github API</h1>
            <p className="text-secondary"><strong>Bootcamp Spring React - DevSuperior</strong></p>

            <Link to="/form" className="btn btn-primary">Começar</Link>
        </div>
    )   
}

export default Home;