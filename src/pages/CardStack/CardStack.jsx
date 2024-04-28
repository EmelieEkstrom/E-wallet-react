import { useState } from 'react';
import Card from '../../components/Card/Card';  

function DisplayCards() {
    const [cards, setCards] = useState([]); 

    return (
    
        <li><Card /> </li>
            
    );
}

export default DisplayCards;
