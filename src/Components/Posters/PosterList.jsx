import { useEffect, useState } from "react"
import { useSupabase } from "../Providers/SupabaseProvider"
import { NavLink, useParams } from "react-router-dom"

export const PosterList = () => {
    const {genreSlug} = useParams();
    const [posterData, setPosterData] = useState([])
    const {supabase} = useSupabase()

    const getData = async () => {
        if (supabase) {
            const {data, error} = await supabase
                .from("genres")
                .select("*, posters(*)")
                .eq("slug", genreSlug)
            if (error) {
                console.error(error);
            } else {
                // console.log(data[0].posters);
                setPosterData(data[0].posters)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [genreSlug, supabase])

  return (
    <div className="flex flex-wrap">
        {posterData && posterData.map(item => {
            return (
                <div className="max-w-[200px]" key={item.id}>
                    <h2><NavLink to={item.slug}>{item.name}</NavLink></h2>
                    <img src={item.image} alt={item.name} />
                </div>
            )
        })}
    </div>
  )
}
