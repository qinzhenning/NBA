/**
 * Gray theme for Highcharts JS
 * @author Torstein Honsi
 */

Highcharts.theme = {
	colors: ["#DDDF0D", "#7798BF", "#55BF3B", "#DF5353", "#aaeeee", "#ff0066", "#eeaaee",
		"#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
	chart: {
		backgroundColor: null,
		borderWidth: 0,
		borderRadius: 0,
		plotBackgroundColor: null,
		plotShadow: false,
		plotBorderWidth: 0
	},

	xAxis: {
		gridLineWidth: 1,
		lineColor: '#999',
		tickColor: '#999',
		// 外圈文字设置
		labels: {
			style: {
				color: '#fff',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#AAA',
				font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	// 连接各个角之间的线
	yAxis: {
		alternateGridColor: null,
		minorTickInterval: null,
		gridLineColor: '#999',
		minorGridLineColor: 'rgba(255,255,255,0.07)',
		lineWidth: 0,
		tickWidth: 0,
		labels: {
			style: {
				color: '#999',
				fontWeight: 'bold'
			}
		},
		title: {
			style: {
				color: '#AAA',
				font: 'bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},

};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
