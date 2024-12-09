import React from "react"
import LogoMin from "../components/LogoMin"
import NavbarLink from "../components/NavbarLink"
import { NavLink } from "react-router-dom"
import { navbarStyle as tw } from "../../styles/sections/Navbar.style"
import CustomTooltip from "../components/CustomTooltip"
import { navbarLinkStyle as extraTw } from "../../styles/components/NavbarLink.style"
import { URL_PATHS } from "../../constants/paths"
import { NavLinks } from "../../types/components/navlinks.type"
import svgSymbolsIDs from "../../constants/svgSymbolsIDs"
import { useGetCurrentAreaForecastURL } from "../../hooks/useGetCurrentAreaForecastURL"


export default function Navbar(): React.JSX.Element {
    const currentAreaURL = useGetCurrentAreaForecastURL()
    const config: NavLinks = [
        {
            text: 'Погода',
            url: `${URL_PATHS.FORECAST}${currentAreaURL}`,
            icon: svgSymbolsIDs.iconWeather,
        },
        {
            text: 'Избранное',
            url: URL_PATHS.FAVOURITES,
            icon: svgSymbolsIDs.iconAddToFavourite,
        },
    ]
    
    
    return (
        <nav className={tw.navbar}>
            <CustomTooltip title="На главную" placement="bottom">
                <NavLink
                className={`logo-wrapper ${tw.logoWrapper} ${extraTw.link}`}
                to={`${URL_PATHS.LANDING}`}
                >
                <LogoMin styles={tw.logo} />
                </NavLink>
            </CustomTooltip>
            {config.map((linkData, i) => {
                return <NavbarLink link={linkData} key={i} />
            })}
        </nav>
  )
}
