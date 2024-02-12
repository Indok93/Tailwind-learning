import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../Pages/Home/Home'
import { Posters } from '../../Pages/Posters/Posters'
import { PosterList } from '../Posters/PosterList'

export const AppRouter = () => {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path='/posters' element={<Posters />}>
            <Route path=':genre' element={<PosterList />} />
            {/* <Route path=':genre/:poster' element={<PosterDetails />} /> */}
        </Route>
        <Route path='/about' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        {/* <Route path='*' element={PageNotFound} /> */}
    </Routes>
  )
}
