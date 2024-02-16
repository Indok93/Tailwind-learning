import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSupabase } from "../Providers/SupabaseProvider"
import { useForm } from "react-hook-form"

export const PosterDetails = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {posterSlug} = useParams()
    const [posterData, setPosterData] = useState([])
    const {supabase} = useSupabase()

    const getData = async () => {
        if(supabase){
            const {data, error} = await supabase
                .from("posters")
                .select("*")
                .eq("slug", posterSlug)
                .limit(1)
                .single()
                if (error) {
                    console.error(error);
                } else {
                    setPosterData(data)
                }
        }
    }

    useEffect(() => {
        getData()
    }, [posterData, supabase])

    const add2cart = async (formdata) => {
        // console.log(formdata);
        const {data: {session: {user: {id: user_id}}}} = await supabase.auth.getSession()


        if (supabase) {
            const {data, error} = await supabase
                .from("cart")
                .insert([{
                    user_id: user_id,
                    poster_id: formdata.poster_id,
                    quantity: formdata.quantity
                }])
                if (error) {
                    console.error(error);
                } else {
                    // Return message to user
                    console.log('Added to cart', data);
                }
        }

    }

    // if (!posterData.id) {
    //     return <div>Loading...</div>
    // }

  return (
    <>
        {posterData && posterData.id && (
            <div>
                <h1>{posterData.name}</h1>
                <p dangerouslySetInnerHTML={{__html: posterData.description}}></p>
                
                <form onSubmit={handleSubmit(add2cart)}>
                    <input type="hidden" defaultValue={posterData.id} {...register('poster_id')} />
                    <input type="number" {...register('quantity', {required: true})} />
                    <button>Læg i kurv</button>
                </form>
            </div>
        )}
    </>
  )
}
