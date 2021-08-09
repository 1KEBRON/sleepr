
var currentTime = new Date().toLocaleTimeString()
var timeinp = document.getElementById('timeinp')

var riseTimecycles = [];
var bedTimecycles = []
window.addEventListener("load", function(){


  // CREATE HTML TABLE STRING
  var perrow = 2, // 2 CELLS PER ROW
      html = "<table><tr>";
       html += `<tr>
    <td>Sleep cycle</td>
    <th> </th>
    <td> Rise time   </td>

    <td> Alarm Status </td>

    </tr>`

  // LOOP THROUGH ARRAY AND ADD TABLE CELLS
  for (var i=0; i<riseTimecycles.length; i++) {
    // "NORMAL" CELL
   
    html += `<td>${[i+1]}</td>`;
    html += `<th></th>`;
    html += `<td>${riseTimecycles[i]}</td>`;
    html += `<td><label class="switch">
                <input type="checkbox">
                <span class="slider round">
                </span></label></td>`
    html += "</tr><tr>";
    // CLICK ON CELL TO DO SOMETHING 
    // html += `<td onclick="FUNCTION()">${data[i]}</td>`;
  
    // TO PASS IN A RUNNING NUMBER OR PARAMETER
    // html += `<td onclick="FUNCTION(${i})">${data[i]}</td>`;
 
    // BREAK INTO NEXT ROW
    var next = i+1;
    // if (next%perrow==0 && next!=riseTimecycles.length) {
    //   html += "</tr><tr>";
    // }
  }
  html += "</tr></table>";

  // ATTACH HTML TO CONTAINER
  document.getElementById("riseTimeCont").innerHTML = html;
});



function addMinutes(time, minsToAdd) {
  function D(J){ return (J<10? '0':'') + J};
  
  var piece = time.split(':');
  
  var mins = piece[0]*60 + +piece[1] + +minsToAdd;

  return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);  
}  


function calcRiseTime (){
  // array that contains riseTimecycles
  // var selctedTime = timeinp.value
  for(var i = 1; i < 7; i++){
    riseTimecycles.push(addMinutes(currentTime, (i*90)+15));  
  }

  
}

  calcRiseTime ()




