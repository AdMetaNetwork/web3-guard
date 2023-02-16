/**
 * @file
 */
import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react';
import Chart from 'chart.js/auto';
import { popupStore } from '../../stores/PopupStore';
import { Chat2 } from './Chat2';

export const Chat = observer(() => {
    const store = useContext(popupStore);

    useEffect(() => {
        const ctx = document.getElementById('myChart');

        // eslint-disable-next-line no-console
        console.log('store----->>>>', store);

        // eslint-disable-next-line no-new
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['第三方请求', '已允许', '已拦截', '已修改', '用户规则'],
                datasets: [{
                    label: 'Web Page Statistics',
                    data: [12, 19, 1, 5, 2],
                    borderWidth: 1,
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }, [store]);

    return (
        <div className="chart">
            <canvas id="myChart" />
            <Chat2 />
        </div>
    );
});
