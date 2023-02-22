import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['PULNI TO\'LIQ TO\'LAGANLAR', 'TO\'LIQ TO\'LAMAGANLAR', 'UMUMAN TO\'LOV QILMAGANLAR'],
    datasets: [
        {
            label: 'SONI',
            data: [19, 12, 3],
            backgroundColor: [
                'rgb(91, 229, 132)',
                '#1070CA',
                '#EC4C47',
            ],
            borderColor: [
                '#fff',
                '#fff',
                '#fff',
            ],
            borderWidth: 1,
        },
    ],
};

export function PieChart() {
    return <Pie data={data} />;
}
