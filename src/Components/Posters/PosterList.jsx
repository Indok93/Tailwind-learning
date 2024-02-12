import { useEffect, useState } from "react"
import { useSupabase } from "../Providers/SupabaseProvider"
import { NavLink } from "react-router-dom"

export const PosterList = () => {
    const [posterData, setPosterData] = useState([])
    const {supabase} = useSupabase()

    const getData = async () => {
        if (supabase) {
            const {data, error} = await supabase
                .from('posters')
                .select('*')
                .order('name')
            if (error) {
                console.error("Fejl i kald af genrer", error);
            } else {
                setPosterData(data)
            }
        }
    }

    useEffect(() => {
        getData()
    }, [setPosterData, supabase])

    console.log(posterData);

  return (
    <>
        PosterList
    </>
  )
}
