export const GEOCHART_CONFIG = {
  type: 'GeoChart',
  columnNames: ['Country', 'Involved People', {'type': 'string', role: 'tooltip', p: {html: true}}],
  options: {
    datalessRegionColor: '#fce4ec',
    defaultColor: '#fce4ec',
    legend: 'none',
    tooltip: { showTitle: false, isHtml: true},
    colorAxis: {
      minValue: 0,
      colors: ['#f8bbd0', '#f48fb1', '#ec407a', '#d81b60', '#ad1457', '#880e4f']
    }
  }
};
