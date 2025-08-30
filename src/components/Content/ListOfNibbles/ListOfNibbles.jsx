import './ListOfNibbles.scss'
import { useContext } from "react";
import { NibbleContext } from "../../../context/NibbleContext.jsx";
import NibbleItem from "./NibbleItem/NibbleItem.jsx";
import { Button } from "nerdy-lib";
import { POPUP_CONTENT, PREMADE_NIBBLES } from "../../../util/constants.js";
import PremadeNibbles from "./AddNibble/PremadeNibbles.jsx";

const ListOfNibbles = () => {
	const { nibbles, openPopup, setPopupContent } = useContext(NibbleContext)

	const handleAddNibble = () => {
		setPopupContent(POPUP_CONTENT.ADD_NIBBLE)
		openPopup()
	}

	// Filter premade nibbles to only show those that are not already in the nibbles list
	const premadeNibblesToShow = PREMADE_NIBBLES.filter(premadeNibble => !nibbles.some(nibble => nibble.id === premadeNibble.id))

	return (
		<div className="list-of-nibbles">
			<div className="header">
				<span>Active Nibbles</span>
				<Button
					shape="circle"
					color="blue"
					onClick={handleAddNibble}
				>
					+ Add Nibble
				</Button>
			</div>


			{nibbles.map(nibble => <NibbleItem nibble={nibble} key={nibble.id} />)}

			<PremadeNibbles premadeNibblesToShow={premadeNibblesToShow} />
		</div>
	)
}

export default ListOfNibbles