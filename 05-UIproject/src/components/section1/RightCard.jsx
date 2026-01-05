import React from 'react';
import RightCardContent from './rightcardcontent.jsx';

const RightCard = (props) => {
  return (
    <div className="relative h-full w-1/2 bg-red-500 rounded-3xl overflow-hidden">

      {/* Image */}
      <img
        src={props.img}
        alt=""
        className="h-full w-full object-cover"
      />
      <RightCardContent id={props.id} tag={props.tag} color={props.color}/>

   
    </div>
  );
};

export default RightCard;
