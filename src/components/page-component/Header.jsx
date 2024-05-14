import { useEffect, useState } from "react";
function Header() {
    return (
        <header>
            <nav>
                <img src="./assets/images/1.png" alt="" />
                <ul>
                    <li><a href="#">Pesquisar</a></li>
                    <li><a href="#">Adicionar</a></li>
                    <li><a href="#">Informações</a></li>
                    <li><a href="#">Instruções de uso</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </nav>
            <div>
            <img src="./assets/images/1.png" alt="" />
            </div>
        </header>
    );
}
export default Header