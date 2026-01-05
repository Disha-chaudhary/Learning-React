import react from 'react';

const RightCardContent = (props) => {
    return(
         <div className="absolute inset-0 bg-amber-500/20 rounded-3xl flex flex-col justify-between p-6">

        {/* Top number */}
        <h2 className="text-white text-4xl font-bold">{props.id+1}</h2>

        {/* Text */}
        <p className="text-white text-sm leading-relaxed font-bold  text-4xl">
          Lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem.
          Lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-white text-black rounded-full font-medium">
            {props.tag}
          </button>

          <button className="p-3 bg-white rounded-full">
            <i className="ri-arrow-right-line text-black"></i>
          </button>
        </div>

      </div>
    )
}
export default RightCardContent;