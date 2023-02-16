/**
 * @file
 */
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import Chart from 'chart.js/auto';

export const Chat2 = observer(() => {
    useEffect(() => {
        const ctx = document.getElementById('myChart2');

        const labels = ['域名安全', '请求安全', 'Cookie保护', '钓鱼防护'];
        // eslint-disable-next-line no-new
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [60, 100, 30, 40],
                        borderColor: '#fec400',
                        backgroundColor: '#fec400',
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Chart.js Radar Chart',
                    },
                },
            },
        });
    }, []);

    return (
        <canvas id="myChart2" />
    );
});
