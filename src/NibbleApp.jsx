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

  const getFooter = () => {
    return (
      <div className="tool-footer">
        <a href="https://github.com/nerdytoolbox/nibble/issues/new?template=ISSUE_TEMPLATE.md">Report issues / Feature requests</a>
        <span>&nbsp;|&nbsp;</span>
        <a href="https://github.com/nerdytoolbox/nibble/releases/tag/v1.0.0">v1.0.0</a>
      </div>
    )
  }

  return (
    <Hub footer={getFooter()}>
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
