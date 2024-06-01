import React from 'react';

type HeaderProps = {
    remainingTime: string;
};

const Header: React.FC<HeaderProps> = ({ remainingTime }) => {
    return (
        <div className="w-full max-w-xl flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Тестирование</h1>
            <div className="flex items-center bg-gray-200 px-2 py-1 rounded">
                <span>{remainingTime}</span>
            </div>
        </div>
    );
};

export default Header;