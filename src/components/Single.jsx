import React from 'react'
import './single.scss';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type Props = {
  id: Number;
  img?: String;
  title: String;
  info:object;
  chart?:{
    dataKeys:{name:string; color:string}[];
    data:object[];
  };
  activities?:{time:string; text:string}[];
}

const Single = (props:Props) => {
  return (
    <div className="single">
       <div className="view">
        <div className="info">
           <div className="topInfo">
            <img src={props.img} alt="" />
            <h1>{props.title}</h1>
            <button>Updates</button>
           </div>
           <div className="details">
            {Object.entries(props.info).map((item)=>(
                 <div className="item" key={item[0]}>
                 <span className="itemTitle">{item[0]}</span>
                 <span className="itemValue">{item[1]}</span>
               </div>
            ))}

           </div>
        </div>
        <hr />
        {props.chart &&(
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
             <LineChart
               data={props.chart.data}
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
             <Legend />

           {props.chart.dataKeys.map(dataKey=>(
             <Line 
               type="monotone"
               dataKey={dataKey.name}
               stroke={dataKey.color}
             />
             ))}
             </LineChart>
            </ResponsiveContainer>
        </div>
     )}
       </div>
       <div className="activities">
        <h2>Latest Activites</h2>

        {props.activities && <ul>

          {props.activities.map(activity=>( 
          <li key={activity.text}>
            <div>
              <p>{activity.text}</p>
              <time>{activity.time}</time>
            </div>
          </li>
          ))}

        </ul>}
       </div>

    </div>
  )
}

export default Single