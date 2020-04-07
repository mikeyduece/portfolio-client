import React from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
}            from 'recharts';

const Chart = ({ data }) => {

  return (
    <div style={ { width: '20em', height: 300 } }>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={ data } margin={{right: 0}}>
            {
              data.map((entry) => <Cell key={ entry.name } fill={ entry.color } />)
            }
          </Pie>
        <Legend layout='vertical' align='right' verticalAlign='middle' />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )

}

export default Chart