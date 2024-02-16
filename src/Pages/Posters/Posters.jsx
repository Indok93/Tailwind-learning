import { Outlet } from "react-router-dom"
import { GenreList } from "../../Components/Posters/GenreList"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"

export const Posters = () => {
  return (
    <ContentWrapper title="Posterside">
      <div className="flex">
          <GenreList></GenreList>
          <Outlet></Outlet>
      </div>
    </ContentWrapper>
  )
}
