import './Content.scss'
import { useContext } from "react";
import { NibbleContext } from "../../context/NibbleContext.jsx";
import ListOfNibbles from "./ListOfNibbles/ListOfNibbles.jsx";
import TakeANibble from "./TakeANibble/TakeANibble.jsx";
import About from "./About/About.jsx";

const Content = () => {
	const { selectedTab, MENU_ITEMS } = useContext(NibbleContext)

	switch (selectedTab) {
		case MENU_ITEMS[0]: // Info
			return <About />
		case MENU_ITEMS[1]: // Take a Nibble
			return <TakeANibble />
		case MENU_ITEMS[2]: // List of Nibbles
			return <ListOfNibbles />
		default:
			return <div>Could not find the page</div>
	}
}

export default Content