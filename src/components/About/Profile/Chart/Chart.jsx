import React from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip
}            from 'recharts';

const Chart = ({ data }) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
                                   cx, cy, midAngle, innerRadius, outerRadius, percent, index
                                 }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const percentage = (percent * 100).toFixed(0)

    if (percentage < 5) {
      return null
    } else {
      return <text x={ x } y={ y } fill="white" textAnchor="middle" dominantBaseline="central">
        { `${ percentage }%` }
      </text>
    }
  }

  return (
    <div style={ { width: '20em', height: 300 } }>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={ data } margin={ { right: 0 } } cy={ 100 } >
            {
              data.map((entry) => <Cell key={ entry.name } fill={ entry.color } label={renderCustomizedLabel} />)
            }
          </Pie>
          <Legend layout='horizontal' align='center' verticalAlign='top' />
          <Tooltip />/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )

}

export default Chart