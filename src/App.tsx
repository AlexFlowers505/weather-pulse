import React from "react"
import MainLayout from "./views/layouts/MainLayout.tsx"
import AreaOverviewPage from "./views/pages/AreaOverviewPage.tsx"
import FavouriteAreasOverviewPage from "./views/pages/FavouriteAreasOverviewPage.tsx"
import NotFoundPage from "./views/pages/NotFoundPage.tsx"
import WelcomePage from "./views/pages/WelcomePage.tsx"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

export default function App(): React.JSX.Element {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<WelcomePage />} />
        <Route path='/forecast' element={<AreaOverviewPage />} />
        <Route path='/favourites' element={<FavouriteAreasOverviewPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}