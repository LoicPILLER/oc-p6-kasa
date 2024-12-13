import { useState } from "react";
import { ChevronUp } from 'lucide-react';

import '../styles/Dropdown.scss';

function Dropdown({ name, list }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown ${isOpen ? "open" : ""}`}>
            <div className="dropdown-toggle" onClick={toggleDropdown}>
                <p>{name}</p>
                <button>
                    <ChevronUp className="icon" size={32} color="white" />
                </button>
            </div>
            <div className="dropdown-content" style={{ maxHeight: isOpen ? "300px" : "0" }}>
                <ul>
                    {list.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dropdown;