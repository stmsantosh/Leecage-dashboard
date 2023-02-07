Morris.Bar({
    element: 'chart_div',
    data: [
        { team: 'Gourav', nb: 25 },
        { team: 'Sachin', nb: 35 },
        { team: 'Daljit', nb: 30 },
        { team: 'Deepak', nb: 45 },
        { team: 'Desraj', nb: 30 },
        { team: 'Lokesh', nb: 20 },
        { team: 'Puneet', nb: 30 },
        { team: 'Avtar', nb: 40 },
        { team: 'Vinit', nb: 25 },
        { team: 'Rajan', nb: 15 }

    ],
    title: 'Population of Largest U.S. Cities',
    xkey: 'team',
    ykeys: ['nb'],
    resize: true,
    smooth: 'false',
    xLabelMargin: 5,
    barSize: 20,
    // barSizeRatio: 9,
    barSizeRatio: 1,
    ymax: 50,
    ymin: 0,
    numLines: 6,
    labels: ['Editions Wins'],
    barColors: function (row, series, type) {
        if (row.label == "Gourav") return "rgb(25, 141, 200)";
        else if (row.label == "Sachin") return "rgb(239, 132, 68)";
        else if (row.label == "Daljit") return "rgb(92, 189, 108)";
        else if (row.label == "Deepak") return "rgb(180, 116, 209)";
        else if (row.label == "Desraj") return "rgb(223, 191, 104)";
        else if (row.label == "Lokesh") return "rgb(112, 213, 239)";
        else if (row.label == "Puneet") return "rgb(215, 135, 123)";
        else if (row.label == "Avtar") return "rgb(180, 116, 209)";
        else if (row.label == "Vinit") return "rgb(255, 207, 21)";
        else if (row.label == "Rajan") return "rgb(108, 222, 152)";
    }
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
