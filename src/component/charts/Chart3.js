//pie chart
import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

export default class Chart3 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/pb1jwdt1/';

  render() {
    return (
      <PieChart width={400} height={300}>
        <Pie dataKey="value" startAngle={180} endAngle={0} data={data} cx={200} cy={200} outerRadius={120} fill="#8884d8" label />
      </PieChart>
    );
  }
}
