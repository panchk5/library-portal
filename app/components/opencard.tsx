import React from 'react';
import Tab from './tab';

interface OpenCardProps {
    title: string;
    description: string;
    hours: string;
}
const OpenCard: React.FC<OpenCardProps> = () => {
    return (
        <div className='rounded-lg bg-white text-black p-2'>
            <h2 className='text-xl font-bold tracking-tighter pl-1'>H.G. Thode Library of Science & Engineering</h2>
            <p className='pl-1'>Main engineering library</p>
            <div className='flex flex-row gap-1'>
                {/* <div className='flex gap-1'>
                    <img src='/printer.jpg' alt='Icon 1' className='w-6 h-6' />
                    <img src='/3d-printer.jpg' alt='Printer' className='w-6 h-6' />
                    <img src='study-room.png' alt='Study Room' className='w-6 h-6' />
                    <img src='icon4.png' alt='Icon 4' className='w-6 h-6' />
                    <img src='icon5.png' alt='Icon 5' className='w-6 h-6' />
                </div> */}
                <Tab title='Printer' />
                <Tab title='3D Printer' />
                <Tab title='Study Rooms' />
            </div>
            <h2 className='text-lg font-bold tracking-tighter pl-1'>Hours: </h2>
            <h2 className='text-lg font-bold tracking-tighter pl-1'>Capacity </h2>
        </div>
    );
};

export default OpenCard;