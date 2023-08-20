import React from 'react'
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    title:string;
    color:string;
    dataKey:string;
    chartData:object[];
};

const BarChartBox = (props:Props) => {
  return (
    <div className="barChart">
        <h1>{props.title}</h1>
        <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
           <BarChart data={props.chartData}>
           <Tooltip 
             contentStyle={{ background:"#2a3447", border:"none" }}
             labelStyle={{ display:"none" }}
             cursor={{ fill:"none" }}
             />
             <Bar
                 dataKey={props.dataKey}
                 fill={props.color} 
              />
           </BarChart>
           </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox