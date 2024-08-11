import LogoMin from '../components/LogoMin'
import navLinksData from '../../data/navLinksData.ts' 
import NavbarLink from '../components/NavbarLink'
import { helloSectionStyle as tw } from '../../styles/sections/HelloSection.style'

export default function Navbar() {
  return (
        <nav className={tw.base}>
            <LogoMin styles={tw.logo} />
            { navLinksData.map( (linkData, i) => { return (
                <NavbarLink link={linkData} key={i}/> )}
            )}
        </nav>  
    )
}