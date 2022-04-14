import react from "react";
import './Header.css';

export default ({black}) => {
        return (
            <header className={black ? 'black' : ''}>
                <div className="header--logo">
                    <a href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Pirate_Flag_of_Blackbeard_%28Edward_Teach%29.svg" alt="Bandeira pirata" />
                    </a>
                </div>
                <div className="header--user">
                    <a href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Barbe_Noire.webp" alt="Usuário" />
                    </a>
                </div>
            </header>
        );
}