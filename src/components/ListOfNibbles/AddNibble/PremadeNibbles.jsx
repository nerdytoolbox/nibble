import NibbleItem from "../NibbleItem/NibbleItem.jsx";
import { FaRegStar } from "react-icons/fa";

const PremadeNibbles = ({ premadeNibblesToShow }) => {
	return (
		<details>
			<summary><FaRegStar /> Suggestions</summary>
			{premadeNibblesToShow.map(nibble => <NibbleItem nibble={nibble} />)}
		</details>
	)
}

export default PremadeNibbles