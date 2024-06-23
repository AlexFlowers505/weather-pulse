import MainLayout from "../views/layouts/MainLayout"
import MainSVGsprite from "../assets/images/svg-sprites/MainSVGsprite"
import Navbar from "../views/sections/Navbar/Navbar"
import ControlPanel from "../views/sections/ControlPanel/ControlPanel"

export default function App() {
  return (
    <>
      <MainSVGsprite />
      
      <MainLayout>
        <Navbar />
        <ControlPanel />
      </MainLayout>
    </>
  )
} 