import { IoIosMenu } from "react-icons/io";
import { Title } from "nerdy-lib";
import { useContext } from "react";
import { NibbleContext } from "../../context/NibbleContext.jsx";
import './Header.scss'

const Header = () => {
	const { handleSettingsToggle, settingsRef } = useContext(NibbleContext)

	return (
		<div className="nibble-header">
			<div className="menu-icon-div" onClick={handleSettingsToggle} ref={settingsRef}>
				<IoIosMenu className="menu-icon" />
			</div>
			<Title text="Nibble" noIcon />
		</div>
	)
}

export default Header