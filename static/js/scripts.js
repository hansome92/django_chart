
var url = "http://localhost:8000/api/loan";
var timeval = 1000 * 60;

jQuery(document).ready(function() {
    loadloan();
    var refreshId = setTimeout(loadloan('refresh'), timeval);
});

function loadloan($refresh) {


   jQuery.getJSON(url, function(data) {


          if (data.status == "success") {

              var age = [];
              for (var i = 1; i <= 20; i++) {
                  age.push(i * 5 + '%');
              }

              if (typeof $refresh !== 'undefined') {
                  jQuery.jqplot('chart', [data.data],
                      {

                seriesDefaults:{

                    renderer:jQuery.jqplot.BarRenderer,
                    rendererOptions: {fillToZero: true}
                },


                  series: [{
                      label:'Age : <br>' +
                            '0% = inception <br>' +
                            '100% = maturity',
             color: "#C14F4E",

             shadow: false,
            fillColor: "#C14F4E"

            }],

                legend: {
                    show: true,
                    showSwatches:false,
                    border:'1px solid #fff',
                    textColor:'#000',
                    color:'#000',
                    fontSize:'20pt',
                    placement: 'outsideGrid'
                },
                grid: {
                   drawGridlines: true,
                   gridLineColor: "#868686",
                   gridLineWidth: 1,
                   backgroundColor: "#fff",
                     borderColor: "#424242",
                    borderWidth: 1,

                      shadow: false
                },
                axes:
                {
                    // Use a category axis on the x axis and use our custom ticks.
                    xaxis: {
                        //renderer:$.jqplot.DateAxisRenderer,
                        rendererOptions:{
                            tickRenderer:jQuery.jqplot.CanvasAxisTickRenderer
                        },
                        tickOptions:{
                            fontSize:'10pt',
                            fontFamily:'Tahoma',
                            textColor:'#000',
                            angle:-40
                        },
                        color:'#000',
                        ticks: age,
                        drawMajorGridlines : false,
                        renderer: jQuery.jqplot.CategoryAxisRenderer
                    },
                    // Pad the y axis just a little so bars can get close to, but
                    // not touch, the grid boundaries.  1.2 is the default padding.
                    yaxis: {
                        color:'#000',
                        pad: 1,
                        padMin: 0,
                        tickOptions: {formatString: '%d'}
                    },
                    y2axis: {
                        borderColor:'#fff'
                    },
                    x2axis: {
                     borderColor:'#fff'
                    }
                }
            }
                  ).replot();
                  console.log('refresh');
                  setTimeout(loadloan('refresh'), timeval);
                  return;
              }


              var plot1 = jQuery.jqplot('chart', [data.data], {

                //title:'Outstanding principle/age distribution',
                seriesDefaults:{

                    renderer:jQuery.jqplot.BarRenderer,
                    rendererOptions: {fillToZero: true}
                },


                  series: [{
                      label:'Age : <br>' +
                            '0% = inception <br>' +
                            '100% = maturity',
             color: "#C14F4E",

             shadow: false,
            fillColor: "#C14F4E"

            }],

                legend: {
                    show: true,
                    showSwatches:false,
                    border:'1px solid #fff',
                    textColor:'#000',
                    color:'#000',
                    fontSize:'20pt',
                    placement: 'outsideGrid'
                },
                grid: {
                   drawGridlines: true,
                   gridLineColor: "#868686",
                   gridLineWidth: 1,
                   backgroundColor: "#fff",
                     borderColor: "#424242",
                    borderWidth: 1,

                      shadow: false
                },
                axes:
                {
                    // Use a category axis on the x axis and use our custom ticks.
                    xaxis: {
                        //renderer:$.jqplot.DateAxisRenderer,
                        rendererOptions:{
                            tickRenderer:jQuery.jqplot.CanvasAxisTickRenderer
                        },
                        tickOptions:{
                            fontSize:'10pt',
                            fontFamily:'Tahoma',
                            textColor:'#000',
                            angle:-40
                        },
                        color:'#000',
                        ticks: age,
                        drawMajorGridlines : false,
                        renderer: jQuery.jqplot.CategoryAxisRenderer
                    },
                    // Pad the y axis just a little so bars can get close to, but
                    // not touch, the grid boundaries.  1.2 is the default padding.
                    yaxis: {
                        //title:'Value, in GBP',
                        //label:'Value, in GBP',
                        color:'#000',
                        pad: 1,
                        padMin: 0,
                        tickOptions: {formatString: '%d'}
                    },
                    y2axis: {
                        borderColor:'#fff'
                    },
                    x2axis: {
                     borderColor:'#fff'
                    }
                }
            });
              jQuery('.loader').remove();
           jQuery('#chart-header').show();
          }

    });
}