import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { answers, timeExpired } = location.state || { answers: {}, timeExpired: false };

    const goToHome = () => {
        navigate('/');
    };

    const answeredQuestions = Object.keys(answers).length;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 md:p-6">
            <h1 className="text-2xl md:text-4xl text-center font-bold mb-4">Результаты тестирования</h1>
            {timeExpired && <p className="text-red-500 mb-4">Ваше время вышло</p>}
            <div className="bg-white p-4 rounded shadow-md w-full max-w-xl">
                {answeredQuestions > 0 ? (
                    <>
                        <h2 className="text-2xl font-semibold mb-4">Ваши ответы:</h2>
                        <ul>
                            {Object.keys(answers).map((key, index) => (
                                <li key={index} className="mb-2">
                                    <strong>Вопрос {parseInt(key) + 1}:</strong> {answers[key]}
                                </li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <h2 className="text-2xl font-semibold mb-4">Вы не успели ответить ни на один вопрос</h2>
                )}
            </div>
            <button onClick={goToHome} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                Вернуться на главную
            </button>
        </div>
    );
};

export default ResultPage;