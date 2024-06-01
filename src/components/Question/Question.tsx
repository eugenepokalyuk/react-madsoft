import React from 'react';

type QuestionProps = {
    question: string;
    options: string[];
    type: 'single' | 'multiple';
    onSelect: (answer: string | string[]) => void;
};

const Question: React.FC<QuestionProps> = ({ question, options, type, onSelect }) => {
    const [selected, setSelected] = React.useState<string | string[]>(type === 'single' ? '' : []);

    const handleChange = (option: string) => {
        if (type === 'single') {
            setSelected(option);
            onSelect(option);
        } else {
            setSelected(prev => {
                const newSelection = (prev as string[]).includes(option)
                    ? (prev as string[]).filter(item => item !== option)
                    : [...(prev as string[]), option];
                onSelect(newSelection);
                return newSelection;
            });
        }
    };

    return (
        <div className="mb-4">
            <p className="mb-2">{question}</p>
            {options.map((option, index) => (
                <div key={option} className="flex items-center group">
                    <input
                        id={`option-${index}`}
                        type={type === 'single' ? 'radio' : 'checkbox'}
                        checked={type === 'single' ? selected === option : (selected as string[]).includes(option)}
                        onChange={() => handleChange(option)}
                        className="mr-2 accent-red-500 text-red-500 cursor-pointer group-hover:bg-red-100" // добавление кастомного класса
                    />
                    <label className='cursor-pointer group-hover:bg-red-100 p-2 rounded' htmlFor={`option-${index}`}>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default Question;