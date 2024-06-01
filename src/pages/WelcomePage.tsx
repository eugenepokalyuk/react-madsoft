import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
    const navigate = useNavigate();

    const startTest = () => {
        localStorage.removeItem('answers');
        localStorage.removeItem('currentQuestion');
        localStorage.removeItem('remainingTime');
        navigate('/test');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 md:p-6">
            <h1 className="text-2xl md:text-4xl text-center font-bold mb-4">Добро пожаловать на тестирование</h1>
            <button onClick={startTest} className="bg-red-500 text-white px-4 py-2 rounded">
                Начать тест
            </button>
        </div>
    );
};

export default WelcomePage;