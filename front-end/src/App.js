import React, { useState }from 'react';
import * as s from './App.Style'
import SideMenu from './Components/SideMenu/SideMenu'
import Routes from './routes'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const sideBarHeader = 'SkiCal';
  const menuItems = [
    { name: 'Home', to:'/'},
    { name: 'About', to: '/about'}
  ]
  const fonts = {
    header: 'Quicksand',
    menu: 'Quicksand'
  }

  return (
    <s.AppContainer>
     
     {menuOpen ?  null : <s.HamburgerMenu onClick={()=> setMenuOpen(true)}></s.HamburgerMenu> }
      <SideMenu sideBarHeader={sideBarHeader} menuItems={menuItems} fonts={fonts} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     
      <Routes/>
      <s.Footer/>
    </s.AppContainer>
  );
}

export default App;
