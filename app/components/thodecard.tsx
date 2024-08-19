'use client'
import React from 'react';
import Tab from './tab';
import Progress from './progress';
import { useEffect , useState } from 'react';
import fetchFromApi from './utils/fetchApi';

interface OpenCardProps extends Array<number> {}




const ThodeCard: React.FC = () => {
    const [data, setData] = useState<OpenCardProps | null>(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetchFromApi<OpenCardProps>('/capacity/thode');
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
            
            
            <h2 className='text-lg font-bold tracking-tighter pl-1'>Hours: </h2>
            <div>
                {data ? (
                    data.map((value, index) => (
                        <Progress
                        key={index}
                        value={value.toString() + '%'} // Directly using the value from the data array
                        tcolor={index % 2 === 0 ? 'text-blue-500' : 'text-orange-500'}
                        bcolor={index % 2 === 0 ? 'bg-blue-500' : 'bg-orange-500'}
                        title={index % 2 === 0 ? 'Thode General' : 'Thode 2nd Floor'}
                        />
                    ))
                ) : (
                    <div role="status" className='items-center '>
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
            </div>
            
        </div>
    );
};


export default ThodeCard;