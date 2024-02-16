import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../Pages/Home/Home'
import { Posters } from '../../Pages/Posters/Posters'
import { PosterList } from '../Posters/PosterList'
import { Login } from '../../Pages/Login/Login'
import { PosterDetails } from '../Posters/PosterDetails'

export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path='/posters' element={<Posters />}>
            <Route path=':genreSlug' element={<PosterList />} />
            <Route path=':genreSlug/:posterSlug' element={<PosterDetails />} />
        </Route>
        <Route path='/about' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path="login" element={<Login />}/>
        {/* <Route path='*' element={PageNotFound} /> */}
    </Routes>
  )
}
