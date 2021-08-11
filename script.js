
var currentTime = new Date().toLocaleTimeString()

var riseTimecycles = [];
var bedTimecycles = []
 function populateRiseTimeTable(){
  // CREATE HTML TABLE STRING
  var perrow = 2, // 2 CELLS PER ROW
      html = "<table><tr>";
       html += `<tr>
    <td>Sleep cycle</td>
    <th> </th>
    <td id="timeFrameLbl"> Rise time   </td>

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
    // html += `<td onclick="FUNCTION()">${riseTimecycles[i]}</td>`;
  
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
  $("#riseTimeCont").html(html) ;
};
function populateBedtimeTable(){
   
  // CREATE HTML TABLE STRING
  var perrow = 2, // 2 CELLS PER ROW
      html = "<table><tr>";
       html += `<tr>
    <td>Sleep cycle</td>
    <th> </th>
    <td > Bed time   </td>

    <td> Alarm Status </td>

    </tr>`

  // LOOP THROUGH ARRAY AND ADD TABLE CELLS
  for (var i=0; i<length; i++) {
    // "NORMAL" CELL
   
    html += `<td>${[i+1]}</td>`;
    html += `<th></th>`;
    html += `<td>${bedTimecycles[i]}</td>`;
    html += `<td><label class="switch">
                <input type="checkbox">
                <span class="slider round">
                </span></label></td>`
    html += "</tr><tr>";
    // CLICK ON CELL TO DO SOMETHING 
    // html += `<td onclick="FUNCTION()">${riseTimecycles[i]}</td>`;
  
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
  $("#bedTimeCont").html(html) ;
};



function backForwrd(time, minsToAddSubb) {
  function D(J){ return (J<10? '0':'') + J};
  
  var piece = time.split(':');
  
  var mins = piece[0]*60 + +piece[1] + +(minsToAddSubb);

  return D(mins%(24*60)/60 | 0) + ':' + D(mins%60);  
}  



$('#riseTimeSubmit').click(function riseBedTimeCalc (){
    var selectedTime = document.getElementById('selectedTime').value;
    selectedTime.toLocaleTimeString
    for(var i = 1; i < 7; i++){
        riseTimecycles.push(backForwrd(selectedTime, (i*90)+15));
         bedTimecycles.push(backForwrd(selectedTime, -(i*90)+15));
        
  }
   populateRiseTimeTable()
   populateBedtimeTable()
})

function changeTab(headlbl){
  $('#headLbl').html(headlbl);
  
}




