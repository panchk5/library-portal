'use client'
import React from 'react';
import Tab from './tab';
import Progress from './progress';
import { useEffect , useState } from 'react';
import fetchFromApi from './utils/fetchApi';

interface OpenCardProps {
    [key: string]: number;
    
}




const ThodeCard: React.FC = () => {
    const [data, setData] = useState<OpenCardProps | null>(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetchFromApi<OpenCardProps>('/capacity');
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    return (
        <div className='rounded-lg bg-white text-black p-2'>
            <h2 className='text-xl font-bold font-sans tracking-tighter pl-1'>H.G. Thode Library of Science & Engineering</h2>
            <a className='flex items-center w-fit' href='https://www.google.com/maps/place/H.G.+Thode+Library+of+Science+and+Engineering/@43.2614856,-79.9246701,17.5z/</a>data=!4m14!1m7!3m6!1s0x882c84ad98824899:0xd38445a64f954124!2sH.G.+Thode+Library+of+Science+and+Engineering!8m2!3d43.2611011!4d-7</svg>9.9225905!16s%2Fg%2F1tnpln3b!3m5!1s0x882c84ad98824899:0xd38445a64f954124!8m2!3d43.2611011!4d-79.9225905!16s%2Fg%2F1tnpln3b?entry=ttu'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2C6.686 2 4 4.686 4 8c0 1.333.4 2.588 1.086 3.646l4.914 7.314a.5.5 0 00.828 0l4.914-7.314C15.6 10.588 16 9.333 16 8c0-3.314-2.686-6-6-6zm0 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <p className='pl-1'>Main engineering library</p>
                
            </a>
            
            <div className='flex flex-row gap-1 mt-1'>
                
                <Tab title='Printer' />
                <Tab title='3D Printer' />
                <Tab title='Study Rooms' />
            </div>
            <div className='mt-4'>
                {data ? (
                    Object.entries(data).map(([key, value]) => (
                        <p key={key}>{`${key}: ${value}`}</p>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            
            <h2 className='text-lg font-bold tracking-tighter pl-1'>Hours: </h2>
           
            <Progress value='45%' tcolor='text-blue-500' bcolor='bg-blue-500' title='Thode general' />
            <Progress value='20%' tcolor='text-orange-500' bcolor='bg-orange-500' title='Makerspace' />

        </div>
    );
};


export default ThodeCard;