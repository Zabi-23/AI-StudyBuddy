// client/src/App.tsx

import React, { useState, useCallback } from 'react';
import HamburgerMenu from './components/HamburgerMenu';  

import QuestionForm from './components/QuestionForm';

import './App.css';

import biologyBook from './assets/books/Biologi.jpg';
import englishBook from './assets/books/English.jpg';
import fysikBook from './assets/books/Fysik.jpeg';
import geographyBook from './assets/books/Geografi.jpg';
import chemistryBook from './assets/books/kemi.jpg';
import mathematicsBook from './assets/books/Mattematik.jpg';
import modernlanguageBook from './assets/books/Modern-språk.jpg';
import religionBook from './assets/books/Religion.jpg';
import historyBook from './assets/books/Historia.jpg';
import swedishBook from './assets/books/Svenska.jpg';
import technologyBook from './assets/books/Teknik.jpg';
import otherBook from './assets/books/Övrigt.jpg';

const App: React.FC = () => {
    const [selectedSubject, setSelectedSubject] = useState('');

    const getBookImage = useCallback(() => {
        switch (selectedSubject) {
            case 'Engelska': return englishBook;
            case 'Matematik': return mathematicsBook;
            case 'Svenska': return swedishBook;
            case 'Biologi': return biologyBook;
            case 'Fysik': return fysikBook;
            case 'Kemi': return chemistryBook;
            case 'Geografi': return geographyBook;
            case 'Historia': return historyBook;
            case 'Religion': return religionBook;
            case 'Teknik': return technologyBook;
            case 'Modern-språk': return modernlanguageBook;
            case 'Övrigt': return otherBook;
            default: return '';
        }
    }, [selectedSubject]);

    const handleSelectSubject = (subject: string) => {
        setSelectedSubject(subject);
    };

    return (
        <div className="App">
            <h1>AI-StudyBuddy</h1>
            <HamburgerMenu onSelectSubject={handleSelectSubject} /> 
            <div className="book-container">
                <img className="book-image" src={getBookImage()} alt={selectedSubject} />
            </div>
            <QuestionForm selectedSubject={selectedSubject} /> 
        </div>
    );
};

export default App;
