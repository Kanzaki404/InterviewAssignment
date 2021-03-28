import React, { useState } from "react";
import * as s from "./SideMenu.style";
import { Link } from "react-router-dom";
function SideMenu(props) {
	const {
		sideBarHeader = "",
		menuItems = [],
		fonts = {
			header: "",
			menu: "",
		},
        setMenuOpen,
        menuOpen
	} = props;

	const [selected, setSelected] = useState(menuItems[0].name);
    function handleMenuItem(e){
        setSelected(e)
        setMenuOpen(false)

    }
	const menuItem = menuItems.map( (e,index) => {
        const isItemsSelected = selected === e.name;
        return (
            <Link key={index} to={e.to} style={{textDecoration:'none', display:`${!menuOpen ? 'none': 'block'}`}}>
                <s.MenuItem onClick={()=>handleMenuItem(e.name)} selected={isItemsSelected}>
                    {e.name}
                </s.MenuItem>
            </Link>
        )
    });

	return <s.SideMenuContainer menuOpen={menuOpen}>
        <s.SideBarHeader>
            <s.CloseMenuBtn
                onClick={()=>setMenuOpen(false)}
                menuOpen={menuOpen}
                />
        </s.SideBarHeader>
        <s.MenuItemContainer>
                 {menuItem}
               

        </s.MenuItemContainer>
    </s.SideMenuContainer>;
}

export default SideMenu;
