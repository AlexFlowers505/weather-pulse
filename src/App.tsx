import MainLayout from "./views/layouts/MainLayout"
import AreaOverviewPage from "./views/pages/AreaOverviewPage"
import FavouriteAreasOverviewPage from "./views/pages/FavouriteAreasOverviewPage"
import NotFoundPage from "./views/pages/NotFoundPage"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Landing from "./views/pages/Landing"
import { URL_PATHS } from "./constants/paths"

export default function App(): React.JSX.Element {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={URL_PATHS.LANDING} element={<MainLayout />} >
        <Route index element={<Landing />} />
        <Route path={URL_PATHS.FORECAST} element={<AreaOverviewPage />} />
        <Route path={URL_PATHS.FAVOURITES} element={<FavouriteAreasOverviewPage />} />
        <Route path={URL_PATHS.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}
