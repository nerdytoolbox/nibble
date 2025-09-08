import { createContext, useEffect, useRef, useState } from "react";
import { CURRENT_NIBBLE_KEY, HISTORY_KEY, NIBBLES_KEY } from "../util/constants.js";

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

	/**
	 * Menu selector
	 */
	const MENU_ITEMS = ["About", "Take a nibble", "List of nibbles"]
	const [selectedTab, setSelectedTab] = useState(MENU_ITEMS[1])
	const handleMenuItemClick = (item) => {
		setSelectedTab(item)
		setSettingsOpen(false)
	}

	/**
	 * Popup modal state
	 */
	const [isPopupOpen, setIsPopupOpen] = useState(false)
	const [popupContent, setPopupContent] = useState(null)
	const openPopup = () => setIsPopupOpen(true)
	const closePopup = () => setIsPopupOpen(false)
	const popupRef = useRef(null)
	useEffect(() => {
		if (!isPopupOpen) return;

		const handleClickOutside = (event) => {
			if (popupRef.current && popupRef.current.contains(event.target)) {
				return;
			}

			setPopupContent(null)
			setIsPopupOpen(false)
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isPopupOpen, setIsPopupOpen]);

	/**
	 * localStorage for Nibbles
	 */
	const [nibbles, setNibbles] = useState(localStorage.getItem(NIBBLES_KEY) ? JSON.parse(localStorage.getItem(NIBBLES_KEY)) : [])
	const addNibble = (nibble) => {
		setNibbles(prevNibbles => [...prevNibbles, { id: nibble.id ? nibble.id : crypto.randomUUID(), text: nibble.text, active: true, premade: nibble.premade }])
	}
	const deleteNibble = (id) => {
		setNibbles(prevNibbles => prevNibbles.filter(nibble => nibble.id !== id))
	}


	const [currentNibble, setCurrentNibble] = useState(localStorage.getItem(CURRENT_NIBBLE_KEY) ? JSON.parse(localStorage.getItem(CURRENT_NIBBLE_KEY)) : null)
	useEffect(() => {
		localStorage.setItem(CURRENT_NIBBLE_KEY, JSON.stringify(currentNibble))
	}, [currentNibble]);

	/**
	 * localStorage for history
	 */
	const [history, setHistory] = useState(localStorage.getItem(HISTORY_KEY) ? JSON.parse(localStorage.getItem(HISTORY_KEY)) : [])
	const addHistoryEntry = (entry) => {
		setHistory(prevHistory => [...prevHistory, entry])
	}
	useEffect(() => {
		localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
	}, [history]);

	return (
		<NibbleContext.Provider value={{
			settingsOpen, setSettingsOpen, handleSettingsToggle,
			menuRef, settingsRef,
			MENU_ITEMS, selectedTab, handleMenuItemClick,
			nibbles, setNibbles, addNibble, deleteNibble,
			isPopupOpen, openPopup, closePopup, popupRef, popupContent, setPopupContent,
			addHistoryEntry, setHistory,
			currentNibble, setCurrentNibble
		}}>
			{children}
		</NibbleContext.Provider>
	)
}