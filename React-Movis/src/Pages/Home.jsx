import Navbar from '../Components/Navbar';
import Body from '../Components/Body';
import Card from '../Particle/Card';
import { useState } from 'react';

export default function Home() {
    const [theme, setTheme] = useState('light');

    return (
        <div data-theme={theme} className='w-screen h-full flex flex-col items-center'>
            <Navbar setTheme={setTheme} />
            <Body>
                {data => <Card key={data.id} data={data} />}
            </Body>
        </div>
    );
}