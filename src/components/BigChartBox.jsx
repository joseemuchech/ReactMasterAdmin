import React from 'react'
import './bigChartBox.scss'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        name:"A",
        pv:"4000",
        uv:"2400",
        amt:"2400",
    },
    {
        name:"B",
        pv:"3000",
        uv:"1394",
        amt:"2210",
    },
    {
        name:"C",
        pv:"2000",
        uv:"9800",
        amt:"2290",
    },
    {
        name:"D",
        pv:"1890",
        uv:"4800",
        amt:"2181",
    },
    {
        name:"E",
        pv:"2390",
        uv:"3800",
        amt:"2500",
    },
    {
        name:"F",
        pv:"3490",
        uv:"4300",
        amt:"2100",
    },
]

const BigChartBox = () => {
  return (
    <div className="bigChart">
        <h1>Revenue Analytics</h1>

        <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
             <AreaChart
               data={data}
               margin={{ 
                  top:10,
                  right:30,
                  left:0,
                  bottom:0,
                }}
             >
             <XAxis dataKey="name" />
             <YAxis />
             <Tooltip />
             <Area 
               type="monotone"
               dataKey="uv"
               stackId="1"
               stroke="#8884d8"
               fill="#8884d8"
             />
              <Area 
               type="monotone"
               dataKey="pv"
               stackId="1"
               stroke="#82ca9d"
               fill="#82ca9d"
             />
              <Area 
               type="monotone"
               dataKey="amt"
               stackId="1"
               stroke="#ffc658"
               fill="#ffc658"
             />

             </AreaChart>
            </ResponsiveContainer>
        </div>

    </div>
  )
}

export default BigChartBox