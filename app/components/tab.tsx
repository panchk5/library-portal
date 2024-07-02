import React from 'react';

interface TabProps {
    title: string;
}

const Tab: React.FC<TabProps> = ({ title }) => {
    return (
        <div className="bg-gray-500 rounded-full text-white font-sans px-2">
           {title}
        </div>
    );
};

export default Tab;