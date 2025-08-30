import { useContext, useState } from "react";
import { NibbleContext } from "../../../context/NibbleContext.jsx";
import { Button } from "nerdy-lib";
import './TakeANibble.scss'

const TakeANibble = () => {
	const { nibbles } = useContext(NibbleContext)
	const [currentNibble, setCurrentNibble] = useState(null)

	const handleTakeANibble = () => {
		setCurrentNibble(nibbles[Math.floor(Math.random() * nibbles.length)].text)
	}

	if (!currentNibble) {
		return (
			<div className="take-a-nibble-container">
				<Button
					size="size9"
					shape="square"
					color="red"
					onClick={handleTakeANibble}
				>
					TAKE A NIBBLE
				</Button>
			</div>
		)
	}

	return <div className="take-a-nibble-container"><span>{currentNibble}</span></div>
}

export default TakeANibble