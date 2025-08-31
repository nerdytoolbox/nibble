import { useContext, useState } from "react";
import { NibbleContext } from "../../context/NibbleContext.jsx";
import { Button } from "nerdy-lib";
import './TakeANibble.scss'
import { NIBBLE_ACTIONS } from "../../util/constants.js";

const TakeANibble = () => {
	const { nibbles, addHistoryEntry } = useContext(NibbleContext)
	const [currentNibble, setCurrentNibble] = useState(null)

	const handleTakeANibble = () => {
		setCurrentNibble(nibbles[Math.floor(Math.random() * nibbles.length)])
	}

	const handleNibble = (action) => {
		addHistoryEntry({ nibble: currentNibble, action: action, timestamp: new Date(Date.now()) })
		setCurrentNibble(null)
	}

	if (!currentNibble) {
		return (
			<div className="take-a-nibble-container">
				<Button
					size="size8"
					shape="square"
					color="red"
					onClick={handleTakeANibble}
				>
					TAKE A NIBBLE
				</Button>
			</div>
		)
	}

	return (
		<div className="take-a-nibble-container">
			<span>{currentNibble.text}</span>
			<div className="buttons">
				<Button onClick={() => handleNibble(NIBBLE_ACTIONS.SKIPPED)}>Cancel</Button>
				<Button color="blue" onClick={() => handleNibble(NIBBLE_ACTIONS.DONE)}>Done!</Button>
			</div>
		</div>
	)
}

export default TakeANibble