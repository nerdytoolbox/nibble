import { TextInput, Button } from "nerdy-lib";
import './AddNibble.scss'
import { useContext, useState } from "react";
import { NibbleContext } from "../../../../context/NibbleContext.jsx";

const AddNibble = () => {
	const { addNibble, closePopup } = useContext(NibbleContext)
	const [nibbleText, setNibbleText] = useState("")

	const handleInputChange = (e) => {
		setNibbleText(e.target.value)
	}

	const handleAddClick = () => {
		addNibble(nibbleText)
		setNibbleText("")
		closePopup()
	}

	return (
		<div className="add-nibble-container">
			<span>Add new Nibble</span>
			<TextInput value={nibbleText} onChange={e => handleInputChange(e)} />
			<Button onClick={handleAddClick}>Add</Button>
		</div>
	)
}

export default AddNibble