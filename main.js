const div = $('#div').append('<div>Hello World</div>');
const click = $('#div').click(function() {
    alert('Hello World');
});

// Chart challenge //
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    $('#myChart'),
    config
    );

// CHALLENGE 2 //
const labels2 = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
const data2 = {
    labels: labels2,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)'
        ],
        borderColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)'
        ],
        data: [12, 19, 3, 5, 2, 3],
    }]
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {}
};

const myChart2 = new Chart(
    $('#myChart2'),
    config2
    );