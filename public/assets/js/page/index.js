"use strict";

if ($("#message-list").length) {
    $("#message-list").css({
      height: 400
    }).niceScroll();
  }

/* chart shadow */
var draw = Chart.controllers.line.prototype.draw;
Chart.controllers.lineShadow = Chart.controllers.line.extend({
  draw: function () {
    draw.apply(this, arguments);
    var ctx = this.chart.chart.ctx;
    var _stroke = ctx.stroke;
    ctx.stroke = function () {
      ctx.save();
      ctx.shadowColor = '#00000075';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 8;
      ctx.shadowOffsetY = 8;
      _stroke.apply(this, arguments)
      ctx.restore();
    }
  }
});

var ctx = document.getElementById('myChart').getContext("2d");
var gradientStroke = ctx.createLinearGradient(500, 0, 0, 0);
gradientStroke.addColorStop(0, 'rgba(55, 154, 80, 1)');
gradientStroke.addColorStop(1, 'rgba(131, 210, 151, 1)');

var gradientStroke2 = ctx.createLinearGradient(0, 0, 700, 0);
gradientStroke2.addColorStop(0, 'rgba(255, 204, 128, 1)');
gradientStroke2.addColorStop(0.5, 'rgba(255, 152, 0, 1)');
gradientStroke2.addColorStop(1, 'rgba(239, 108, 0, 1)');


var myChart = new Chart(ctx, {
  type: 'lineShadow',
  data: {
    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
    type: 'line',
    defaultFontFamily: 'Poppins',
    datasets: [{
      label: "Income",
      data: [0, 30, 10, 120, 50, 63, 10],
      borderColor: gradientStroke2,
      pointBorderColor: gradientStroke2,
      pointBackgroundColor: gradientStroke2,
      pointHoverBackgroundColor: gradientStroke2,
      pointHoverBorderColor: gradientStroke2,
      pointBorderWidth: 10,
      pointHoverRadius: 10,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      fill: false,
      borderWidth: 4,
    }, {
      label: "Expenses",
      data: [0, 50, 40, 80, 40, 79, 120],
      borderColor: gradientStroke,
      pointBorderColor: gradientStroke,
      pointBackgroundColor: gradientStroke,
      pointHoverBackgroundColor: gradientStroke,
      pointHoverBorderColor: gradientStroke,
      pointBorderWidth: 10,
      pointHoverRadius: 10,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      fill: false,
      borderWidth: 4,
    }]
  },
  options: {
    legend: {
      position: "bottom",
      labels:{
      fontColor: "#9aa0ac"
      }
    },
    tooltips: {
      mode: 'index',
      titleFontSize: 12,
      titleFontColor: '#fff',
      bodyFontColor: '#fff',
      backgroundColor: '#000',
      titleFontFamily: 'Poppins',
      bodyFontFamily: 'Poppins',
      cornerRadius: 3,
      intersect: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "#9aa0ac",
          fontStyle: "bold",
          beginAtZero: true,
          maxTicksLimit: 5,
          padding: 20
        },
        gridLines: {
          drawTicks: false,
          display: false
        }

      }],
      xAxes: [{
        gridLines: {
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "#9aa0ac",
          fontStyle: "bold"
        }
      }]
    }
  }
});


var balance_chart = document.getElementById("chart-1").getContext('2d');

var balance_chart_bg_color = balance_chart.createLinearGradient(0, 0, 0, 70);
balance_chart_bg_color.addColorStop(0, 'rgba(120, 107, 236, .2)');
balance_chart_bg_color.addColorStop(1, 'rgba(120, 107, 236, 0)');

var myChart = new Chart(balance_chart, {
  type: 'lineShadow',
  data: {
    labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001'],
    datasets: [{
      label: 'Balance',
      data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40],
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: 'rgba(41, 192, 177, 1)',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(120, 107, 236,1)',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },

    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false
        }
      }]
    },
  }
});

var sales_chart = document.getElementById("chart-2").getContext('2d');

var sales_chart_bg_color = sales_chart.createLinearGradient(0, 0, 0, 80);
balance_chart_bg_color.addColorStop(0, 'rgba(120, 107, 236,.2)');
balance_chart_bg_color.addColorStop(1, 'rgba(120, 107, 236,0)');

var myChart = new Chart(sales_chart, {
  type: 'lineShadow',
  data: {
    labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001'],
    datasets: [{
      label: 'Sales',
      data: [70, 62, 44, 40, 21, 63, 82, 52, 50, 31, 70, 50],
      borderWidth: 2,
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: 'rgba(156, 39, 176, 1)',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(120, 107, 236,1)',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false
        }
      }]
    },
  }
});
var sales_chart = document.getElementById("chart-3").getContext('2d');

var sales_chart_bg_color = sales_chart.createLinearGradient(0, 0, 0, 80);
balance_chart_bg_color.addColorStop(0, 'rgba(120, 107, 236,.2)');
balance_chart_bg_color.addColorStop(1, 'rgba(120, 107, 236,0)');

var myChart = new Chart(sales_chart, {
  type: 'lineShadow',
  data: {
    labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001'],
    datasets: [{
      label: 'Sales',
      data: [63, 82, 52, 50, 31, 70, 50, 70, 62, 44, 40, 21],
      borderWidth: 2,
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: 'rgba(76, 175, 80, 1)',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(120, 107, 236,1)',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false
        }
      }]
    },
  }
});

var ctx = document.getElementById("chart-4").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{
      label: 'Sales',
      data: [10, 35, 27, 55, 30],
      borderWidth: 2,
      backgroundColor: 'rgba(78, 214, 193, .8)',
      borderWidth: 0,
      borderColor: 'transparent',
      pointBorderWidth: 0,
      pointRadius: 2,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(63,82,227,.8)',
    },
    {
      label: 'Budget',
      data: [35, 20, 45, 35, 45],
      borderWidth: 2,

      backgroundColor: 'rgba(226, 226, 226, .9)',
      borderWidth: 0,
      borderColor: 'transparent',
      pointBorderWidth: 0,
      pointRadius: 2,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(254,86,83,.8)',
    }]
  },
  options: {
    legend: {
      display: false,
      label: {
       fontColor: "#9aa0ac"
       }
    },
    scales: {
      yAxes: [{
        gridLines: {
          // display: false,
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 10,
          fontColor: "#9aa0ac",
          callback: function (value, index, values) {
            return '$' + value;
          }
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          tickMarkLength: 15,
        },
        ticks: {
          fontColor: "#9aa0ac",
        }
      }]
    },
  }
});

var ctx = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        80,
        50,
        40,
      ],
      backgroundColor: [
        '4ED6C1',
        '#63ed7a',
        '#ffa426',
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Black',
      'Green',
      'Yellow',
    ],
  },
  options: {
    responsive: true,
     legend: {
      position: "bottom",
      labels:{
      fontColor: "#9aa0ac"
      }
    },
  }
});