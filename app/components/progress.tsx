import React from 'react';

interface ProgressProps {
    value: string;
    title: string;
    tcolor: string;
    bcolor: string;
}

const Progress: React.FC<ProgressProps> = ({ value, title, tcolor, bcolor }) => {
    return (
        <div className='mb-1'>
            <div className={`flex justify-between mb-1 ml-1 ${tcolor}`}>
                    <span className={`text-base font-medium ${tcolor}`}>{title}</span>
                    <span className={`text-sm font-medium ${tcolor}`}>{value}</span>
            </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 ml-1">
                    <div className={`${bcolor} h-2.5 rounded-full`} style={{ width: value }}></div>
            </div>
        </div>    
    );
};

export default Progress;