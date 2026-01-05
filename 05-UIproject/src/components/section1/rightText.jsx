import react from 'react';
import RightCard from './RightCard.jsx';

const rightText = (props) => {
    return(
        <div id='right'className = ' flex overflow-x-auto rounded-3xl gap-6 h-full p-6 w-1020'>
            {props.users.map(function(elem,idx){
                return <RightCard key={idx} color = {elem.color} id={idx} img={elem.img} tag={elem.tag}  />
            })}
            
           
            
        </div>
    )

}
export default rightText;