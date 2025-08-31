import './ResetData.scss'
import { Button } from "nerdy-lib";
import { useContext } from "react";
import { NibbleContext } from "../../context/NibbleContext.jsx";

const ResetData = () => {
	const { closePopup, setPopupContent, setNibbles, setHistory } = useContext(NibbleContext)

	const handleCancel = () => {
		setPopupContent(null)
		closePopup()
	}

	const handleReset = () => {
		setNibbles([])
		setHistory([])
		setPopupContent(null)
		closePopup()
	}


	return (
		<div className="reset-data-container">
			<span>Reset all data</span>
			This will delete all your Nibbles and history and cannot be undone. Are you sure you want to proceed?
			<div className="buttons">
				<Button onClick={handleCancel}>
					Cancel
				</Button>
				<Button color="red" onClick={handleReset}>
					Reset
				</Button>
			</div>
		</div>
	)
}

export default ResetData