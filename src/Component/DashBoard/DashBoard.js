import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [data,setData]=useState([])
    console.log(data)
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setData(data))
    },[])

    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 '>
            <div className='flex justify-center'>
                <LineChart width={400} height={400} data={data}>
                    <Line dataKey="month" stroke="#8884d8" />
                    <Line dataKey="sell" stroke="#8884d8" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>


            <div>
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
            
            <div className='flex justify-center'>
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
                    <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
            <div>
                <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </div>
        </div>




    );
};

export default DashBoard;