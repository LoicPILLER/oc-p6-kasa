import { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';


import '../styles/Dropdown.scss';

function Dropdown({ name, list }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <details className="dropdown">
            <summary className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                <p>{name}</p>
                <button>
                    {isOpen ? <ChevronUp size={32} color="white" /> : <ChevronDown size={32} color="white" />}
                </button>
            </summary>
            <div className="dropdown-content">
                <ul>
                    {list.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
        </details>
    );
}

export default Dropdown;