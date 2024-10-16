

import React, { useState } from 'react';
import axios from 'axios';
import SubjectModal from './SubjectModal';
import MathInput from './MathInput';
import { InlineMath } from 'react-katex'; 
import 'katex/dist/katex.min.css'; 

interface QuestionFormProps {
    selectedSubject: string;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ selectedSubject }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:5001/api/questions', {
                question,
                subject: selectedSubject,
                userId: 'user_id_here' 
            });
            setAnswer(response.data.answer);
        } catch (error) {
            console.error("Error posting question:", error);
            setError('Det gick inte att skicka frågan. Försök igen.');
        }
    };

    const closeModal = () => setIsModalOpen(false);

    const handleTermClick = (term: string) => {
        if (!question.includes(term)) {
            setQuestion((prev) => prev.trim() + ' ' + term + ' ');
        }
    };

    const formatAnswer = (text: string) => {
        const parts = text.split(/(\$.*?\$)/g); 

        return parts.map((part, index) => {
            if (part.startsWith('$') && part.endsWith('$')) {
                const mathContent = part.slice(1, -1); 
                return <InlineMath key={index} math={mathContent} />;
            }
            return <span key={index}>{part}</span>; 
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)} 
                    placeholder="Ställ din fråga" 
                    required
                />
                <button type="submit">Skicka</button>
            </form>
            {answer && (
                <div className="answer-box">
                    <h3>Svar:</h3>
                    <p>{formatAnswer(answer)}</p> 
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <SubjectModal 
                isOpen={isModalOpen} 
                onRequestClose={closeModal}
                onSelectSubject={()=> {}}
            />
            {selectedSubject === 'Matematik' && (
                <MathInput onTermClick={handleTermClick} />
            )}
        </div>
    );
};

export default QuestionForm;


