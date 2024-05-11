import { useEffect, useState } from "react";




function Header() {
    const [valueInput, setValueInput] = useState('')
    const  HandleValueInputChange = (event)=>{
        setValueInput(event.target.value);
        
    }
    console.log(HandleValueInputChange.value)
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Assign</a></li>
                    <li><a href="#">Answers</a></li>
                    <li><a href="#">Apollo</a></li>
                </ul>
            </nav>
            <h1>LTAD - Patrimonios</h1>
            <div className="search-bar">
                <form action="">
                <input type="text" placeholder="Search..." onChange={HandleValueInputChange} />
                </form>
            </div>
        </header>
    );
}
export default Header