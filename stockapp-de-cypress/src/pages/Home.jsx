import React, { useEffect } from 'react'
import Typography from "@mui/material/Typography"
import KpiCards from '../components/KpiCards'
import Charts from '../components/Charts'
import useStockCall from '../hooks/useStockCall'

const Home = () => {
  const {getPurSales} = useStockCall()
  

  useEffect(()=>{
      getPurSales();
  },[])

  return (
    <div>
      <Typography data-test="dashboardHeader" variant='h4' color='error' align='center' mb={3}>Dashboard</Typography>
      <KpiCards />
      <Charts />
    </div>
  )
}

export default Home

// react-query
// rtk-query
// useSwr

//1. Props & Local State
//2. Context API(auth-theme vb.)
//3. Redux,Zustand,Mobx,Redux-Saga