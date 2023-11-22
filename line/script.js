Highcharts.chart('container', {

    title: {
        text: '民國100年-民國111年來台觀光客人數統計圖(依地區)',
        align: 'left'
    },

    subtitle: {
        text: '資料來源:中華民國交通部觀光署',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '入境觀光客人數'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 100 to 111'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 100
        }
    },

    series: [{
        name: '亞洲地區',
        data: [2668160, 2885171, 3104443, 3605411, 3766249, 4488396, 5144314, 5484556, 6068826, 893829, 81883, 638464]
    }, 
       {
        name: '非洲地區',
        data: [9426, 9485, 9530, 10350, 10572, 11002, 12006, 12054, 12862, 2541, 886, 3423]
    },
        {
        name: '美洲地區',
        data: [543655, 550990, 570228, 618669, 641957, 705878, 757025, 783560, 818847, 109448, 12175, 105244, 6217676]
    },  
        {
        name: '歐洲地區',
        data: [280564, 292257, 309654, 340359, 353112, 378674, 410805, 425814, 464231, 66626, 16126, 68558]
    }, 
        {
        name: '大洋洲地區',
        data: [86572, 93352, 101280, 111674, 110492, 118207, 127770, 138687, 152326, 23662, 1272, 14994]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});