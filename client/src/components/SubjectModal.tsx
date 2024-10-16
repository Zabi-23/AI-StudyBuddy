
// client /src/components/SubjectModal.tsx

import React, { useEffect } from 'react';
import Modal from 'react-modal';

interface SubjectModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
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

const SubjectModal: React.FC<SubjectModalProps> = ({ isOpen, onRequestClose, onSelectSubject }) => {
    useEffect(() => {
        Modal.setAppElement('#root');
    }, []);

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose} 
            contentLabel="Välj Ämne"
            appElement={document.getElementById('root') || undefined}
        >
            <h2>Välj Ämne</h2>
            <ul>
                {subjects.map((subject) => (
                    <li key={subject}>
                        <button onClick={() => {
                            onSelectSubject(subject); 
                            onRequestClose(); 
                        }}>
                            {subject}
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={onRequestClose}>Stäng</button>
        </Modal>
    );
};

export default SubjectModal;




