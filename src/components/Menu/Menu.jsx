import { useContext } from "react";
import { NibbleContext } from "../../context/NibbleContext.jsx";
import './Menu.scss'
import MenuItem from "./MenuItem.jsx";
import { POPUP_CONTENT } from "../../util/constants.js";



const Menu = () => {
	const {
		settingsOpen,
		menuRef,
		MENU_ITEMS,
		selectedTab,
		handleMenuItemClick,
		openPopup,
		setPopupContent
	} = useContext(NibbleContext)

	const handleResetClick = () => {
		setPopupContent(POPUP_CONTENT.RESET_DATA)
		openPopup()
	}

	return (
		<div className={`nibble-menu ${settingsOpen ? 'open' : ''}`} ref={menuRef}>
			{MENU_ITEMS.map(item => <MenuItem item={item} onClick={() => handleMenuItemClick(item)} className={selectedTab === item ? "selected" : ""} />)}
			<MenuItem item={"Reset all data"} onClick={handleResetClick} />
		</div>
	)
}

export default Menu