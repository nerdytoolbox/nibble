import { useContext } from "react";
import { NibbleContext } from "../../context/NibbleContext.jsx";
import './Menu.scss'

const Menu = () => {
	const { settingsOpen, menuRef } = useContext(NibbleContext)

	return (
		<div className={`nibble-menu ${settingsOpen ? 'open' : ''}`} ref={menuRef}>
			Content of menu
		</div>
	)
}

export default Menu