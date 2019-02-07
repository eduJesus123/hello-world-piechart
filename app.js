let info = [5, 20, 75];
let changed = false;
google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['IE6', info[0]],
        ['IE7', info[1]],
        ['IE8', info[2]]
    ]);
    var options = {
        title: 'Use of the internet explorer browser'
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}
const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    if (changed) {
        info[0] = 5;
        info[1] = 20;
        info[2] = 75;
        drawChart();
        changed = false;
        btn.textContent = 'CHANGE';
        btn.className = 'btn btn-primary';
    } else {
        info[0] = 50;
        info[1] = 40;
        info[2] = 10;
        drawChart();
        changed = true;
        btn.textContent = 'ORIGINAL';
        btn.className = 'btn btn-danger';
    }
});