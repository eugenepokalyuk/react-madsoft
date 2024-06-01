import React from 'react';

type ProgressBarProps = {
    progress: number;
    total: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total }) => {
    return (
        <div className="flex justify-between w-full max-w-xl mb-4">
            {Array.from({ length: total }).map((_, index) => (
                <div
                    key={index}
                    className={`h-2 flex-1 mx-1 rounded ${index < progress - 1 ? 'bg-black' : index === progress - 1 ? 'bg-red-500' : 'bg-gray-300'}`}
                ></div>
            ))}
        </div>
    );
};

export default ProgressBar;