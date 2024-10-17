"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from 'react'

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts } : DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [75000000.57, 25350000, 57500000],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
                hoverOffset: 4
            }
        ],
        labels: ['BCA', 'Maybank', 'OCBC'],    
    }
    return <Doughnut 
        data={data} 
        options={{ 
            cutout: '60%', 
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }} 
    />
}

export default DoughnutChart