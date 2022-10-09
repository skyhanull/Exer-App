 import styled from 'styled-components';
import '../App.css';
import './Sidebar.css'
import { Link } from 'react-router-dom';


export const Nav = styled.div`
  background: #9EA8C2
;
  height: 80px;
  /* margin-top: -80px; */
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10; 

  @media screen and(max-width: 960px) {
    transition: 0.8s all ease;
  };
`
   const NavLinks = styled(Link)`
    color:#fff ;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`;



const Sidebar=()=>{

    return(
           <Nav>
            <div className='navcontainer'>
            <div className='Logo'>
            <Link to ="/">Logo</Link>
            </div>
           
            </div>
           <div className='Nav-menu'>
            <NavLinks to="/about">about</NavLinks>
           </div>
           
           </Nav>
           

           
            
            
          
     


)



}


export default Sidebar