import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddCard from '../../pages/Addcard/Addcard'; 


function Card(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(props)


function handleClick() { 
  const card = {
    Card: props.card,
    CardInformation: props.CardInformation,
  };
  
  dispatch(addToCardStack(card));
}

function CardInformation(props) {
  navigate(`/card/${props.card.id}`);
}

  return (
    <article className='card'>
      
      <AddCard />
    </article>
  );
}

console.log(Card);
export default Card;