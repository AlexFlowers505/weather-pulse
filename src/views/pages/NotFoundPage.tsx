import React from "react"
import Navbar from "../sections/Navbar"
import ControlPanel from "../sections/ControlPanel"
import { notFoundPageStyle as tw } from "../../styles/pages/NotFoundPage.style"
import Btn from "../components/Btn"
import { btnContentType } from "../../constants/btnContentType"
import svgSymbolsIDs from "../../constants/svgSymbolsIDs"
import { btnStyles } from "../../styles/components/btn.style"
import { NavLink } from "react-router-dom"
import { URL_PATHS } from "../../constants/paths"
import { emoticons } from "../../constants/emoticons"

export default function NotFoundPage(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <div className={`sections-wrapper ${tw.sectionsWrapper}`}>
        <ControlPanel isSearchFocusOnLoad={false} />
        <div className={`not-found-block container-visuals ${tw.notFoundBlock}`}>
          <div className={`header ${tw.header}`}>
            <span className={`${tw.heading}`}>404</span>
            <span className={`${tw.emoticon}`}>{emoticons.dontKnow}</span>
            <span className={`${tw.desc}`}>Такой страницы у нас нет</span>
          </div>
          <NavLink to={`${URL_PATHS.LANDING}`}>
            <Btn 
              contentType={btnContentType.text} 
              content={'На главную'}
              btnSize={btnStyles.size.md}
              btnStyle={btnStyles.style.outlined}
            />
          </NavLink>
        </div>
      </div>
    </>
  )
}
