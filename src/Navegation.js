import './Navigation.css';

const Navigation = ({typeFn}) => {
    return (
        <div className="navigation">
            <h1>Pokedex</h1>
            <nav>
                <ul>
                    <li><button onClick={() => typeFn("home")}>Home</button></li>
                    <li><button onClick={() => typeFn("fire")}>Fire</button></li>
                    <li><button onClick={() => typeFn("water")}>Water</button></li>
                    <li><button onClick={() => typeFn("rock")}>Rock</button></li>
                    <li><button onClick={() => typeFn("electric")}>Electric</button></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;