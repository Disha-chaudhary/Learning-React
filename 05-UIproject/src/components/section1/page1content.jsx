import react from 'react';
import LeftText from './leftText.jsx';
import RightText from './rightText.jsx';

const Page1Content = () => {
    return(
        <div className='py-3 h-[90vh] bg-white flex gap-10 justify-between px-18'><LeftText />
        <RightText /></div>
    )
}   
export default Page1Content;