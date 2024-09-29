import React from 'react';
import "../../index.css";

interface HomeProps {
    displayText: string
}

const Home: React.FC<HomeProps> = ({ displayText }: HomeProps) => {
    return (
        <div>
            <h1 className="heading-text-1" style={{ textAlign: 'center' }}>{ displayText }</h1>
        </div>
    );
}

export default Home;
