
//chart1 var
var date_reported = [];
var country = [];
var cumu_cases = [];
var cumu_deaths = [];
//chart2 car
var tot_cases =[];
var tot_death =[];
//chart3 car
var total_cases =[];
var total_death =[];

$(document).ready (function() {
  loadData();
});

/* Loading Data*/
   //loadData for Chart 1
 function loadData () {
  $.getJSON("data/usdata.json", function(classes) {
  parseData1(classes);
  });

//loadData for Chart 2
  $.getJSON("data/tx.json", function(classes) {
  parseData2(classes);
  });

//loadData for Chart 3
  $.getJSON("data/nyc.json", function(classes) {
  parseData3(classes);
  });
}

/* Parsing Data*/

//parseData for Chart 1
function parseData1(classes) {
  for (var i = 0; i < classes.length; i++) {
  cumu_cases.push(classes[i].cumu_cases);
  cumu_deaths.push(classes[i].cumu_deaths);
  };
buildChart1();
}
//parseData for Chart 2
function parseData2(classes) {
  for (var a = 0; a < classes.length; a++) {
    tot_cases.push(classes[a].tot_cases);
    tot_death.push(classes[a].tot_death);
  };
buildChart2();
}
//parseData for Chart 3
function parseData3(classes) {
  for (var b = 0; b < classes.length; b++) {
    total_cases.push(classes[b].total_cases);
    total_death.push(classes[b].total_death);
  };
buildChart3();
}
//parseData for Chart 4


function buildChart1(){

  //buildChart1
  var chart = c3.generate({
   data: {
     json: {
      "Total Cases": cumu_cases,
      "Total Deaths": cumu_deaths
     },
     type: 'bar'
   },
   axis: {
     x : {
         type: 'category',
         categories:  ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.'],
         tick: {
              multiline:false,
              culling: {
                  max: 1
              }
            }
          },
        y: {
          label: { // ADD
            text: 'Number of Cases in the U.S. overtime',
            position: 'outer-middle'
          }
        }
      },
   bar: {
     width: {
       ratio: 0.5
     }
   },
   bindto: '#chart1'
 });
}

function buildChart2(){
 var chart = c3.generate({
  data: {
    json: {
      "Total Deaths":tot_death
    },
    type: 'line'
  },
  axis: {
    x : {
        type: 'category',
        categories:  ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.'],
        tick: {
             multiline:false,
             culling: {
                 max: 1
             }
           }
         },
       y: {
         label: { // ADD
           text: 'Number of Deaths in Texas Overtime',
           position: 'outer-middle'
         }
       }
     },
  bar: {
    width: {
      ratio: 0.5
    }
  },
  bindto: '#chart2'
});
}

function buildChart3(){
var chart = c3.generate({
 data: {
   json: {
     "Total Cases":total_cases
   },
   type: 'line'
 },
 axis: {
   x : {
       type: 'category',
       categories:  ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.'],
       tick: {
            multiline:false,
            culling: {
                max: 1
            }
          }
        },
      y: {
        label: { // ADD
          text: 'Number of Cases in New York City Overtime',
          position: 'outer-middle'
        }
      }
    },
 bar: {
   width: {
     ratio: 0.5
   }
 },
 bindto: '#chart3'
});
}

$('#table_id').DataTable({
       ajax: {
           url: 'data/all.json',
           dataSrc: ''
       },
       columns: [
           { data: 'State' },
           { data: 'Total Cases' },
           { data: 'Total Deaths' }

       ]
});
