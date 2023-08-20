
import Chartbox from '../components/Chartbox'
import PieChartBox from "../components/PieChartBox"
import BarChartBox from '../components/BarChartBox'
import BigChartBox from '../components/BigChartBox'
import TopBox from '../components/TopBox';
import { barChartRevenue, barChartVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../data'
import './home.scss'
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2"><Chartbox {...chartBoxUser} /></div>
      <div className="box box3"><Chartbox {...chartBoxProduct} /></div>
      <div className="box box4"><PieChartBox /></div>
      <div className="box box5"><Chartbox {...chartBoxRevenue} /></div>
      <div className="box box6"><Chartbox {...chartBoxConversion} /></div>
      <div className="box box7"><BigChartBox /></div>
      <div className="box box8"><BarChartBox {...barChartVisit} /></div>
      <div className="box box9"><BarChartBox  {...barChartRevenue}/></div>

    </div>
  )
}

export default Home