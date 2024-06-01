import React from 'react';

type FooterProps = {
    onNext: () => void;
};

const Footer: React.FC<FooterProps> = ({ onNext }) => {
    return (
        <div className="w-full max-w-xl flex justify-end mt-4">
            <button onClick={onNext} className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-4 py-2 rounded">
                Ответить
            </button>
        </div>
    );
};

export default Footer;