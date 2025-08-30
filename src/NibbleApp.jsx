import Menu from "./components/Menu/Menu.jsx";
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import { Hub } from 'nerdy-lib'

import './NibbleApp.scss'
import PopupModal from "./components/PopupModal/PopupModal.jsx";
import { NibbleContext } from "./context/NibbleContext.jsx";
import { useContext } from "react";

const NibbleApp = () => {
  const { isPopupOpen } = useContext(NibbleContext)

  return (
    <Hub>
      <div className={`nibble-main-page ${isPopupOpen ? "blurred" : ""}`}>
        <Header />
        <Menu />
        <Content />
      </div>
      <PopupModal />
    </Hub>
  )
}

export default NibbleApp
