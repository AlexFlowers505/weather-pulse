import MainLayout from "../views/layouts/MainLayout"
import MainSVGsprite from "../assets/svg-sprites/MainSVGsprite"
import Navbar from "../views/sections/Navbar"
import ControlPanel from "../views/sections/ControlPanel"
import TodayForecast from "../views/sections/TodayForecast"
import SevenDaysForecast from "../views/sections/SevenDaysForecast"
import CurrentCityForecastDisplay from "../views/sections/CurrentCityForecastDisplay"
import HelloSection from "../views/sections/HelloSection"

export default function App() {
  return (
    <>
      <MainSVGsprite />
      
      <MainLayout>
        <Navbar />
        <div className='flex flex-col justify-between items-start w-full gap-base'>
          <ControlPanel />
          <CurrentCityForecastDisplay />
          <TodayForecast />
        </div>
        <SevenDaysForecast />
        {/* <HelloSection /> */}
      </MainLayout>
    </>
  )
} 