import React from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
}            from 'recharts';

const Chart = ({ data }) => {

  return (
    <div style={ { width: '100%', height: 300 } }>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={ data }>
            {
              data.map((entry) => <Cell key={ entry.name } fill={ entry.color } />)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )

}

export default Chart