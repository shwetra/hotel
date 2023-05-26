import { Text } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Slider from './Slider'
import { Dashboard } from './Dashboard'
import { Hoteldetail } from './Hoteldetail'
import  Hoteldetailpage  from './Hoteldetailpage'
import ContactForm from './Contact'
import Dummy from './Dummy'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Slider/>}/>
        <Route path="/placedetail" element={<Hoteldetail/>}/>
        <Route path="/hoteldetail" element={<Dummy/>}/>
        <Route path="/hoteldeta" element={<Hoteldetailpage/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/admin/@/@/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}
