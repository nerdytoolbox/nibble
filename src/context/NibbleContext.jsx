import { createContext, useEffect, useRef, useState } from "react";

export const NibbleContext = createContext(null)

export const NibbleProvider = ({ children }) => {
	/**
	 * To open and close the settings menu
	 */
	const [settingsOpen, setSettingsOpen] = useState(false)
	const handleSettingsToggle = () => {
		setSettingsOpen(prevState => !prevState)
	}

	/**
	 * Reference to the menu component to detect clicks outside of it
	 */
	const menuRef = useRef(null)
	const settingsRef = useRef(null)
	useEffect(() => {
		if (!settingsOpen) return;

		const handleClickOutside = (event) => {
			if (settingsRef.current && settingsRef.current.contains(event.target)) {
				return
			}

			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setSettingsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [settingsOpen, setSettingsOpen]);

	return (
		<NibbleContext.Provider value={{
			settingsOpen, handleSettingsToggle,
			menuRef, settingsRef
		}}>
			{children}
		</NibbleContext.Provider>
	)
}