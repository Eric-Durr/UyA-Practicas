var ctx = document.getElementById('radarChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(0, 150, 136, 0.7)',
            borderColor: 'rgb(0, 77, 64)',
            data: [20, 35, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('polarChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'polarArea',

    // The data for our dataset
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'Enero',
            backgroundColor: 'rgb(0, 150, 136, 0.7)', 
            borderColor: 'rgb(0, 77, 64)',
            data: [20, 35, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            
        }]
    }, 

    // Configuration options go here
    options: {
        
    }
});