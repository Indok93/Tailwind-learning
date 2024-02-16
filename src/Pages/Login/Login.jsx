import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa, supabase } from "@supabase/auth-ui-shared"
import { useSupabase } from "../../Components/Providers/SupabaseProvider"
import { useEffect, useState } from "react"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"

export const Login = () => {
    const {supabase} = useSupabase()
    const [session, setSession] = useState(null)



    useEffect(() => {
        supabase?.auth?.getSession().then(({data: session}) => {
            setSession(session)
        })

        if (supabase && supabase.auth) {
            const {
                data: {subscription},
            } = supabase.auth.onAuthStateChange((_event, session) => {
                setSession(session)
            })
            return () => subscription.unsubscribe()
        }
    }, [supabase])



    if (!session) {
        return (
          <ContentWrapper title="Login">
              {supabase && (
                  <Auth supabaseClient={supabase} appearance={{theme: ThemeSupa}} />
              )}
          </ContentWrapper>
        )
        
    } else {
        return (
            <>
                <h1>Logged in</h1>
                <p>Du er logget ind som {session?.user?.email}</p>
                <button onClick={() => supabase.auth.signOut()}>Log ud</button>
            </>
        )
    }
}
