import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Question from '../components/Question/Question';

type QuestionType = 'single' | 'multiple';

interface QuestionData {
    question: string;
    options: string[];
    type: QuestionType;
}

const questions: QuestionData[] = [
    { question: 'Что должен знать фронтенд-разработчик? Назовите три ключевых технологии.', options: ['HTML, CSS, JavaScript', 'Kotlin, PHP, JavaScript', 'PHP, HTML, CSS'], type: 'single' },
    { question: 'Какой метод используется для отправки данных формы с использованием JavaScript?', options: ['form.submit()', 'form.send()', 'form.post()'], type: 'single' },
    { question: 'Какой метод в JavaScript используется для добавления элемента в конец массива?', options: ['push()', 'pop()', 'shift()'], type: 'single' },
    { question: 'Какие из следующих фреймворков являются фреймворками для фронтенд разработки?', options: ['React, Angular, Vue', 'Django, Flask, Spring', 'TensorFlow, Keras, PyTorch'], type: 'multiple' },
    { question: 'Что такое CSS?', options: ['Cascading Style Sheets', 'Cascading Sheet Styles', 'Cascading Simple Sheets'], type: 'single' },
    { question: 'Какой из следующих селекторов является селектором класса в CSS?', options: ['.classname', '#classname', 'classname'], type: 'single' },
    { question: 'Что такое DOM в контексте веб-разработки?', options: ['Document Object Model', 'Data Object Model', 'Document Object Management'], type: 'single' },
    { question: 'Какой из следующих методов используется для асинхронного запроса в JavaScript?', options: ['fetch()', 'request()', 'getData()'], type: 'single' },
    { question: 'Какие из следующих технологий являются языками программирования?', options: ['JavaScript, Python, Java', 'HTML, CSS, JSON', 'React, Angular, Vue'], type: 'multiple' },
    { question: 'Что такое JSX в React?', options: ['JavaScript XML', 'JavaScript Extension', 'JavaScript Extra'], type: 'single' },
    { question: 'Какие из следующих утверждений о useState в React являются верными?', options: ['useState возвращает массив из двух элементов: текущего состояния и функции для его обновления', 'useState может быть использован только в функциональных компонентах', 'useState является хуком, который позволяет использовать состояние в классовых компонентах'], type: 'multiple' },
    { question: 'Какие из следующих хуков являются встроенными в React?', options: ['useState, useEffect, useContext', 'useFetch, useQuery, useReducer', 'useRouter, useLink, useParams'], type: 'multiple' },
    { question: 'Что делает метод map() в JavaScript?', options: ['Создает новый массив с результатами вызова указанной функции для каждого элемента в массиве', 'Фильтрует элементы массива в соответствии с заданным условием', 'Изменяет элементы массива по месту'], type: 'single' },
    { question: 'Какой из следующих методов используется для создания нового массива, содержащего только те элементы, которые проходят тест, заданный в функции-предикате?', options: ['filter()', 'reduce()', 'map()'], type: 'single' },
    { question: 'Какие из следующих методов являются методами массива в JavaScript?', options: ['push(), pop(), splice()', 'append(), remove(), replace()'], type: 'multiple' },
    { question: 'Какой из следующих методов изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые элементы?', options: ['splice()', 'slice()', 'split()'], type: 'single' }
];

const TestPage: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<any>({});
    const [remainingTime, setRemainingTime] = useState(20 * 60);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const totalQuestions = questions.length;

    useEffect(() => {
        const savedAnswers = JSON.parse(localStorage.getItem('answers') || '{}');
        const savedQuestion = JSON.parse(localStorage.getItem('currentQuestion') || '0');
        const savedTime = JSON.parse(localStorage.getItem('remainingTime') || `${20 * 60}`);
        setAnswers(savedAnswers);
        setCurrentQuestion(savedQuestion);
        setRemainingTime(savedTime);
    }, []);

    useEffect(() => {
        localStorage.setItem('answers', JSON.stringify(answers));
        localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
        localStorage.setItem('remainingTime', JSON.stringify(remainingTime));
    }, [answers, currentQuestion, remainingTime]);

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate('/result', { state: { answers, timeExpired: true } });
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate, answers]);

    const handleAnswer = (answer: string | string[]) => {
        setError('');
        const updatedAnswers = { ...answers, [currentQuestion]: answer };
        setAnswers(updatedAnswers);
    };

    const handleNext = () => {
        if (!answers[currentQuestion]) {
            setError('Пожалуйста, выберите как минимум один ответ.');
            return;
        }

        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            navigate('/result', { state: { answers, timeExpired: false } });
        }
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="flex flex-col items-center p-4 md:p-6">
            <Header remainingTime={formatTime(remainingTime)} />
            <ProgressBar progress={currentQuestion + 1} total={totalQuestions} />
            <div className="w-full max-w-xl">
                <Question
                    question={questions[currentQuestion].question}
                    options={questions[currentQuestion].options}
                    type={questions[currentQuestion].type}
                    onSelect={handleAnswer}
                />
                {error && (
                    <div className="p-2 rounded bg-red-100">
                        <p className="text-red-500">{error}</p>
                    </div>
                )}
            </div>
            <Footer onNext={handleNext} />
        </div>
    );
};

export default TestPage;