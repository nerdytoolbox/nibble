import './PopupModal.scss'
import { useContext } from "react";
import { NibbleContext } from "../../context/NibbleContext.jsx";
import { POPUP_CONTENT } from "../../util/constants.js";
import AddNibble from "../ListOfNibbles/AddNibble/AddNibble.jsx";
import ResetData from "../ResetData/ResetData.jsx";

const PopupModal = () => {
	const { isPopupOpen, popupRef, popupContent } = useContext(NibbleContext)

	const content = {
		[POPUP_CONTENT.ADD_NIBBLE]: <AddNibble />,
		[POPUP_CONTENT.RESET_DATA]: <ResetData />,
	}

	return (
		<div className={`popup-modal ${isPopupOpen ? "active" : ""}`} ref={popupRef}>
			<div className="popup-content">
				{content[popupContent]}
			</div>
		</div>
	)
}

export default PopupModal