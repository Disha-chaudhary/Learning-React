import react from 'react';
import Navbar from './navbar.jsx';
import Page1Content from './page1content.jsx';

const Section1 = (props) => {
    return(
        <div className='h-screen w-full bg-red-900'>
            <Navbar />
            <Page1Content users={props.users} />
        </div>
    )
}
export default Section1;