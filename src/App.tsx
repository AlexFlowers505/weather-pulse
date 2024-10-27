import React from "react"
import MainLayout from "./views/layouts/MainLayout"
import AreaOverviewPage from "./views/pages/AreaOverviewPage"
import FavouriteAreasOverviewPage from "./views/pages/FavouriteAreasOverviewPage"
import NotFoundPage from "./views/pages/NotFoundPage"
import WelcomePage from "./views/pages/WelcomePage"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

export default function App(): React.JSX.Element {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<WelcomePage />} />
        <Route path='/forecast/:lat_lon' element={<AreaOverviewPage />} />
        <Route path='/favourites' element={<FavouriteAreasOverviewPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}
