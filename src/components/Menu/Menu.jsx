import { useContext } from "react";
import { NibbleContext } from "../../context/NibbleContext.jsx";
import './Menu.scss'
import MenuItem from "./MenuItem.jsx";



const Menu = () => {
	const { settingsOpen, menuRef, MENU_ITEMS, selectedTab, handleMenuItemClick } = useContext(NibbleContext)

	return (
		<div className={`nibble-menu ${settingsOpen ? 'open' : ''}`} ref={menuRef}>
			{MENU_ITEMS.map(item => <MenuItem item={item} onClick={() => handleMenuItemClick(item)} className={selectedTab === item ? "selected" : ""} />)}
		</div>
	)
}

export default Menu