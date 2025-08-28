import Menu from "./components/Menu/Menu.jsx";
import Header from "./components/Header/Header.jsx";
import Content from "./components/Content/Content.jsx";
import { Hub } from 'nerdy-lib'

import './NibbleApp.scss'

const NibbleApp = () => {
  return (
    <Hub>
      <div className="nibble-main-page">
        <Header />
        <Menu />
        <Content />
      </div>
    </Hub>
  )
}

export default NibbleApp
