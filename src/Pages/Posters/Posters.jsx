import { Outlet } from "react-router-dom"
import { GenreList } from "../../Components/Posters/GenreList"

export const Posters = () => {
  return (
    <div>
        <GenreList></GenreList>
        <Outlet></Outlet>
    </div>
  )
}
