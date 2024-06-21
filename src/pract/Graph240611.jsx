import {
    CategoryScale,
    Chart,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
//실시간 스케일과 스트리밍 플러그인 import
import { RealTimeScale, StreamingPlugin } from 'chartjs-plugin-streaming'; 
import React from 'react';
import { Line } from 'react-chartjs-2';
//luxon은 날짜와 시간을 다루는 라이브러리
import 'chartjs-adapter-luxon';

Chart.register(
    StreamingPlugin,
    RealTimeScale,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function ChartExample() {
    const initialTimestamp = Date.now();

    return (
    <Line
        data={{
        datasets: [
            {
            label: 'Dataset 1',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            borderDash: [8, 4], //차트스타일
            fill: true,
            data: [],
            pointRadius: 5, // 점의 크기 설정
            },
            {
            label: 'Dataset 2',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            cubicInterpolationMode: 'monotone', //차트스타일
            fill: true,
            data: [],
            pointRadius: 5, // 점의 크기 설정
            },
        ],
        }}
        options={{
            scales: {
                x: {
                    type: 'realtime',
                    realtime: {
                        delay: 0, // 데이터가 표시되기까지의 지연 시간 (밀리초)
                        refresh: 60000, // onRefresh가 호출되는 주기 (밀리초) : 1분
                        duration: 3600000, // x축에 표시되는 데이터의 기간 (밀리초) : 1시간
                        onRefresh: (chart) => {
                            const now = Date.now();
                            chart.data.datasets.forEach((dataset) => {
                                dataset.data.push({
                                    x: now,
                                    y: Math.random(),
                                });
                            });
                        },
                    },
                },
            },
            plugins: {
                tooltip: {
                    enabled: true, // 툴팁 활성화
                    mode: 'nearest', // 가장 가까운 데이터 포인트에 대해 툴팁을 표시
                    intersect: false, // 마우스가 데이터 포인트와 교차하지 않아도 툴팁을 표시
                },
            },
        }}
    />
    );
}

export default ChartExample;