import { useContext } from "react";
import { NibbleContext } from "../../../../context/NibbleContext.jsx";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import './NibbleItem.scss'

const NibbleItem = ({ nibble }) => {
	const { addNibble, deleteNibble } = useContext(NibbleContext)

	return (
		<div className="nibble-item">
			{nibble.text}
			<div className="icons">
				{nibble.active && nibble.premade && <FaRegStar className="icon" />}
				{nibble.active && <MdDelete className="icon selectable" onClick={() => deleteNibble(nibble.id)} />}
				{!nibble.active && nibble.premade && <IoMdAdd className="icon selectable" onClick={() => addNibble(nibble)} />}
			</div>
		</div>
	)
}

export default NibbleItem