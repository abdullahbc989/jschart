let myChart = document.getElementById('myChart').getContext('2d');

let khabibChart = new Chart(myChart, {

    // Global Options
    /* Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777'; */


    type: 'bar', // bar, horizontal bar, pie, line, doughnut, radar, polarArea
    data:{
        labels: ['KO/TKO', 'Submissions', 'Decisions', 'Losses'],
        datasets: [{
            label: 'Win/Losses',
            data:[
                 8,
                 8,
                 8,
                 0
            ],
            backgroundColor: '#F75925',
            // backgroundColor: []
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options:{
        title: {
            display: true,
            text: 'Khabib\'s Stats',
            fontSize: 36
        },
        legend: {
            position: 'right',
            labels: {
                fontColor: 'black',
                fontSize: 24
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        },
    }
});

