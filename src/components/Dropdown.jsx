import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';


import '../styles/Dropdown.scss';

function Dropdown({ name, list }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown-toggle">
                <p>{name}</p>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <ChevronUp size={32} color="white" /> : <ChevronDown size={32} color="white" />}
                </button>
            </div>
            {isOpen ?
            <div className="dropdown-content">
                <ul>
                    {list.map((element) => (
                        <li>{element}</li>
                    ))}
                </ul>
            </div>
            : null}
        </div>
    );
}

export default Dropdown;