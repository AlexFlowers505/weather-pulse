import MainLayout from "../views/layouts/MainLayout"
import CityOverviewPage from "../views/pages/CityOverviewPage"
import FavouriteCitiesOverviewPage from "../views/pages/FavouriteCitiesOverviewPage"
import NotFoundPage from "../views/pages/NotFoundPage"
import WelcomePage from "../views/pages/WelcomePage"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<WelcomePage />} />
        <Route path='/forecast' element={<CityOverviewPage />} />
        <Route path='/favourites' element={<FavouriteCitiesOverviewPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}