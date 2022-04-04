import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 '>
            <div className='ml-5'>
                <p className='text-center text-indigo-600 text-xl font-bold'>MONTH WISE SELL</p>
                <LineChart width={400} height={400} data={data}>
                    <Line dataKey="month" stroke="#8884d8" />
                    <Line dataKey="sell" stroke="#8884d8" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>


            <div>
                <p className='text-center text-indigo-600 text-xl font-bold'>INVESTMENT VS REVENUE</p>
                <AreaChart
                    width={400}
                    height={400}
                    data={data}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="month" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>

            </div>

            <div >
                <p className='text-center text-indigo-600 text-xl font-bold'>INVESTMENT VS REVENUE</p>
                <BarChart

                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="month" stackId="a" fill="#8884d8" />

                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />

                </BarChart>
            </div>
            <div>
                <p className='text-center text-indigo-600 text-xl font-bold mr-12'>INVESTMENT VS REVENUE</p>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="revenue"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#C71585"
                        label
                    />
                    <Pie dataKey="investment" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>
            </div>


        </div>




    );
};

export default DashBoard;