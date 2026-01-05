import react from 'react';
import './index.css';
import Section1 from './components/section1/section1.jsx';
import Section2 from './components/section2/section2.jsx';

const App = () => {
  const users = [
    {img: 'https://images.unsplash.com/photo-1590650467980-8eadfa86ff48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D' ,intro: 'edfujh jfeirughduirgheui uhgdfuigwiejirgjij erjgeigjeirr ergjergur ' , tag: 'Satisfied' },
    {img: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D' ,intro: 'fghduig rugheriuhg rggierhir ghirh gherghirhg rghhg ' , tag: 'Underserved' },
    {img: 'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D' ,intro: 'ugieru rierih irgeigh hrguihe ghuiehgerh rihgrih uhgretguh rthui ' , tag: 'Underbanked' }
  ]
  return(
    <div >
      <Section1 users={users} />
      <Section2 />  

    </div>
  )
}
export default App;
