// No Milestone Morris Donut chart
Morris.Donut({
    element: 'donut-example',
    title: 'ColorChart',
    data: [
        { label: "No Milestone", value: 15 },
        { label: "Active Milestone", value: 85 }
    ],
    labelColor: '#000000',
    onhover: 'pointer',
    colors: ['#ffc074', '#d75c5e', '#d75c5e', '#d25a5b'],
    formatter: function (y) { return y + "%" }
});

//Project Overrun(Hours) Morris Bar chart
Morris.Bar({
    element: 'chart_div',
    data: [
        { team: 'Gourav', nb: 25 },
        { team: 'Sachin', nb: 35 },
        { team: 'Daljit', nb: 30 },
        { team: 'Deepak', nb: 45 }

    ],
    xkey: 'team',
    ykeys: ['nb'],
    resize: true,
    smooth: 'false',
    xLabelMargin: 5,
    barSize: 20,
    barSizeRatio: 0.3,
    ymax: 50,
    ymin: 0,
    numLines: 6,
    labels: ['Editions Wins'],
    barColors: function (row, series, type) {
        if (row.label == "Gourav") return "rgb(25, 141, 200)";
        else if (row.label == "Sachin") return "rgb(239, 132, 68)";
        else if (row.label == "Daljit") return "rgb(92, 189, 108)";
        else if (row.label == "Deepak") return "rgb(180, 116, 209)";
    }
});
//Extended Project  morris Stacked bar chart

Morris.Bar({
    element: 'charter',
    data: [
        { y: 'Gaurav', a: 15, b: 5 },
        { y: 'Sachin', a: 25, b: 5 },
        { y: 'Daljit', a: 30, b: 10 },
        { y: 'Deepak', a: 15, b: 7 }

    ],
    barColors: ['#198dc8', '#ef8444',],
    xkey: 'y',
    ykeys: ['a', 'b',],
    text: "{valuea}",
    barSize: 20,
    ymax: 50,
    ymin: 0,
    numLines: 6,
    barSizeRatio: 0.2,
    labels: ['Approach', 'Approaches',],
    // labelTop: true,
    stacked: true,
    resize: true,



});

//  morris bar 4

Morris.Bar({
    element: 'charters',
    data: [
        { team: 'Gourav', value: 2 },
        { team: 'Sachin', value: 5 },
        { team: 'Daljit', value: 4 },
        { team: 'Deepak', value: 1 }

    ],
    xkey: 'team',
    ykeys: ['value'],
    resize: 'true',
    smooth: 'false',
    hideHover: 'auto',
    xLabelMargin: 10,
    ymax: 10,
    ymin: 0,
    numLines: 6,
    barSize: 20,
    barSizeRatio: 0.3,
    labels: ['Editions Wins'],
    barColors: function (row, series, type) {
        // console.log("--> " + row.label, series, type);
        if (row.label == "Gourav") return "rgb(25, 141, 200)";
        else if (row.label == "Sachin") return "rgb(239, 132, 68)";
        else if (row.label == "Daljit") return "rgb(92, 189, 108)";
        else if (row.label == "Deepak") return "rgb(180, 116, 209)";
    }
});
//  morris bar 5

Morris.Bar({
    element: 'charterss',
    data: [
        { team: 'Gourav', nb: 5 },
        { team: 'Sachin', nb: 1 },
        { team: 'Daljit', nb: 8 },
        { team: 'Deepak', nb: 5 }

    ],
    xkey: 'team',
    ykeys: ['nb'],
    resize: 'true',
    smooth: 'false',
    hideHover: 'auto',
    xLabelMargin: 10,
    ymax: 10,
    ymin: 0,
    numLines: 6,
    barSize: 20,
    barSizeRatio: 0.3,
    labels: ['Editions Wins'],
    barColors: function (row, series, type) {
        // console.log("--> " + row.label, series, type);
        if (row.label == "Gourav") return "rgb(25, 141, 200)";
        else if (row.label == "Sachin") return "rgb(239, 132, 68)";
        else if (row.label == "Daljit") return "rgb(92, 189, 108)";
        else if (row.label == "Deepak") return "rgb(180, 116, 209)";
    }
});
//  morris bar 6

Morris.Bar({
    element: 'charter_s',
    data: [
        { team: 'Gourav', nb: 8 },
        { team: 'Sachin', nb: 3 },
        { team: 'Daljit', nb: 6 },
        { team: 'Deepak', nb: 4 }

    ],
    xkey: 'team',
    ykeys: ['nb'],
    resize: 'true',
    smooth: 'false',
    hideHover: 'auto',
    xLabelMargin: 10,
    ymax: 10,
    ymin: 0,
    numLines: 6,
    barSize: 20,
    barSizeRatio: 0.3,
    labels: ['Editions Wins'],
    barColors: function (row, series, type) {
        // console.log("--> " + row.label, series, type);
        if (row.label == "Gourav") return "rgb(25, 141, 200)";
        else if (row.label == "Sachin") return "rgb(239, 132, 68)";
        else if (row.label == "Daljit") return "rgb(92, 189, 108)";
        else if (row.label == "Deepak") return "rgb(180, 116, 209)";
    }
});
//  morris bar 7

Morris.Donut({
    element: 'donut-examples',
    title: 'ColorChart',
    data: [
        { label: "Team Lotus ", value: 20 },
        { label: "Team Gladiator", value: 20 },
        { label: "Team Ninza", value: 70 },
        { label: "", value: 40 }

    ],
    labelColor: '#000000',
    postUnits: '%',
    preUnits: '%',
    resize: true,
    redraw: true,
    pointStrokeColors: ['black'],
    colors: ['#ef8444', '#198dc8', '#55bd70', '#deeaf0'],
    formatter: function (y) { return y + "%" }
});
//  morris bar 8


var monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
Morris.Area({
    element: 'graph',
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

//  morris bar 9
var monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
Morris.Area({
    element: 'graphs',
    data: [
        { y: 1, a: 20, b: 24 },
        { y: 2, a: 26, b: 70 },
        { y: 3, a: 2, b: 49 },
        { y: 4, a: 60, b: 21 },
        { y: 5, a: 26, b: 80 },
        { y: 6, a: 28, b: 28 },
        { y: 7, a: 13, b: 90 },
        { y: 8, a: 20, b: 9 },
        { y: 9, a: 25, b: 20 },
        { y: 10, a: 30, b: 15 },
        { y: 11, a: 15, b: 40 },
        { y: 12, a: 24, b: 13 }

    ],
    xkey: 'y',
    parseTime: false,
    ykeys: ['a', 'b'],
    xLabelFormat: function (x) {
        var index = parseInt(x.src.y);
        return monthNames[index];
    },
    xLabels: "month",
    fillOpacity: 0,
    pointFillColors: ['#4b5d66'],
    ymax: 100,
    ymin: 0,
    numLines: 5,
    lineWidth: 1,
    smooth: false,
    resize: false,
    xLabelAngle: 0,
    xLabelMargin: 5,
    behaveLikeLine: true,
    barSizeRatio: 0.3,
    labels: ['Series A', 'Series B', 'Series C'],
    lineColors: ['#d75c5e', '#5cbd6c'],
    hideHover: 'auto'


});
