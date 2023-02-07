var monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
Morris.Area({
    element: 'graph_1',
    data: [
        { y: 1, a: 4, b: 6, c: 8 },
        { y: 2, a: 7, b: 17, c: 14 },
        { y: 3, a: 1, b: 3, c: 10 },
        { y: 4, a: 17, b: 21, c: 18 },
        { y: 5, a: 8, b: 8, c: 14 },
        { y: 6, a: 16, b: 22, c: 21 },
        { y: 7, a: 13, b: 10, c: 10 },
        { y: 8, a: 20, b: 9, c: 5 },
        { y: 9, a: 25, b: 20, c: 20 },
        { y: 10, a: 10, b: 15, c: 17 },
        { y: 11, a: 15, b: 10, c: 9 },
        { y: 12, a: 24, b: 13, c: 20 }

    ],
    xkey: 'y',
    parseTime: false,
    ykeys: ['a', 'b', 'c'],
    xLabelFormat: function (x) {
        var index = parseInt(x.src.y);
        return monthNames[index];
    },
    xLabels: "month",
    fillOpacity: 0,
    ymax: 25,
    pointFillColors: ['#4b5d66'],
    ymin: 0,
    numLines: 6,
    lineWidth: 1,
    smooth: false,
    resize: true,
    // xLabelAngle: 0,
    xLabelMargin: 5,
    behaveLikeLine: true,
    labels: ['Series A', 'Series B', 'Series C'],
    lineColors: ['#d75c5e', '#178cc7', '#5cbd6c'],
    hideHover: 'auto'

});

Morris.Donut({
    element: 'donut-example',
    title: 'ColorChart',
    data: [
        { label: "", value: 12 },
        { label: "Active Milestone", value: 85 }
    ],
    labelColor: '#000000',
    onhover: 'pointer',
    colors: ['#4e78a6', '#bab1ac', '#d75c5e', '#d25a5b'],
    formatter: function (y) { return y + "%" }
});

$(function () {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

});