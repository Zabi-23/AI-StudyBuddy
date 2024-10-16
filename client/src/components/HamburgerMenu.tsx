

// client/src/components/HamburgerMenu.tsx

import React, { useState } from 'react';

interface HamburgerMenuProps {
    onSelectSubject: (subject: string) => void;
}

const subjects = [
    'Matematik',
    'Engelska',
    'Svenska',
    'Historia',
    'Biologi',
    'Fysik',
    'Kemi',
    'Geografi',
    'Religion',
    'Modern-språk',
    'Teknik',
    'Övrigt'
];

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onSelectSubject }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div>
            <button onClick={toggleMenu} className="hamburger-button">
                {isOpen ? 'Stäng' : 'Välj ämne'}
            </button>
            {isOpen && (
                <ul className="hamburger-menu">
                    {subjects.map((subject) => (
                        <li key={subject}>
                            <button onClick={() => {
                                onSelectSubject(subject);
                                setIsOpen(false); 
                            }}>
                                {subject}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HamburgerMenu;


