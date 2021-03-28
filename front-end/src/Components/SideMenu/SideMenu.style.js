import styled from "styled-components";
import close from "../../Assets/icons/close.svg"
export const SideMenuContainer = styled.div`
	width: ${p=> p.menuOpen ? '250px': '0px' };
    transition: ease-in 0.2s;
	/* min-width: 200px;
	max-width: 250px; */
  
	background-color: rgba(0, 0, 0, 0.2);
	height: 100vh;
    @media (max-width: 760px) {
    flex-direction: column;
    width: ${p=> p.menuOpen ? '100%': '0px' };
    
	background-color: ${p=> p.menuOpen ? 'rgba(0, 0, 0, 0.8)': '0px' };
    display: flex;
    position: absolute;
  }
`;

export const SideBarHeader = styled.div`
	height: 30px;
	width: ${p=> p.menuOpen ?  '0%' :'90%'} ;
	background-color: Transparent;
	margin-right: auto;
	margin-left: auto;
	margin-top: 30px;
	margin-bottom: 30px;

   
`;

export const MenuItemContainer = styled.div`


`;
export const MenuItem = styled.div`
	background-color: ${(p)=> p.selected ? 'rgba(255,255,255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
	height: 55px;
	width: ${p=> p.menuOpen ?  '0%' :'90%'} ;
    display: ${p=> p.menuOpen ?  'none' :'flex' }; 
	margin-right: auto;
	margin-left: auto;
	margin-top: 15px;
	margin-bottom: 15px;
    border-radius: 5px;
   // display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;

    :hover{
        background-color: rgba(255,255,255, 0.1);
    }

    @media (max-width: 760px) {
    
    display: flex;
    width: 200px;
  }
   
    
`;

export const CloseMenuBtn = styled.div`
  display: ${p=> !p.menuOpen ?  'none' :'block' };  
  width: 20px;
  height:100%;
  background-image: url(${close});
  background-repeat: no-repeat; 


`;
