Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: '民國100年-民國111年來台觀光客人數分布圖(依國籍)'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        '資料來源:中華民國交通部觀光署'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: '亞洲地區',
                    y: 78.00
                },
                {
                    name: '非洲地區',
                    sliced: true,
                    selected: true,
                    y: 0.02
                },
                {
                    name: '美洲地區',
                    y: 13.00
                },
                {
                    name: '歐洲地區',
                    y: 0.07
                },
                {
                    name: '大洋洲地區',
                    y: 0.02
                }
            ]
        }
    ]
});