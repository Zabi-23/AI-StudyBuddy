

// client/src/components/MathInput.tsx

import React from 'react';
import { InlineMath } from 'react-katex';

import './MathInput.css';

interface MathInputProps {
    onTermClick: (term: string) => void; 
}

const MathInput: React.FC<MathInputProps> = ({ onTermClick }) => {
    const mathTerms = [
        { display: '√', value: '\\sqrt{}' },
        { display: 'x^n', value: 'x^n' },
        { display: '+', value: '+' },
        { display: '-', value: '-' },
        { display: '*', value: '*' },
        { display: '/', value: '/' },
        { display: '=', value: '=' },
        { display: 'π', value: '\\pi' },
        { display: '∞', value: '\\infty' },
        { display: 'sin', value: '\\sin' },
        { display: 'cos', value: '\\cos' },
        { display: 'tan', value: '\\tan' },
        { display: 'log', value: '\\log' },
        { display: '∑', value: '\\sum' },
        { display: '∫', value: '\\int' }, 
        { display: '!', value: '!' },
        { display: 'x!', value: 'x!' }
    ];

    const handleTermClick = (term: { display: string; value: string }) => {
        let newTerm = term.display;

        if (newTerm === 'x^n') {
            newTerm = `x^{}`; 
        }

        onTermClick(newTerm); 
    };

    return (
        <div className="math-input-container">
            <div className="term-grid">
                {mathTerms.map((term, index) => (
                    <button
                        key={index}
                        onClick={() => handleTermClick(term)}
                        className="term-button"
                    >
                        <InlineMath math = {term.value} />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MathInput;



