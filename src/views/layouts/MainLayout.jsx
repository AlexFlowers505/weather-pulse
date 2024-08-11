import { Outlet } from 'react-router-dom'
import MainSVGsprite from '../../assets/svg-sprites/MainSVGsprite.tsx'
import { mainLayoutStyle as tw } from '../../styles/layouts/MainLayout.style'

export default function MainLayout() {
  return (
    <>
      <MainSVGsprite />
      <div className={`main-layout ${tw.mainLayout}`}>
        <div className={`content-wrapper ${tw.contentWrapper}`}><Outlet /></div>
      </div>
    </>
  )
}
