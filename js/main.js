/* Mock data. You can safely remove it when it is loaded into database */
var mockData = [
  { id: 1, Company: "AB&C INTERNATIONAL", Level: 8, Suite: 806 },
  { id: 2, Company: "AXA Insurance Agency Pty Ltd", Level: 1, Suite: 104 },
  { id: 3, Company: "Alex & Sons Consulting Pty Ltd", Level: 10, Suite: 1002 },
  { id: 4, Company: "Altura Care", Level: 5, Suite: 505 },
  { id: 5, Company: "Auroral Design", Level: 11, Suite: 1105 },
  { id: 6, Company: "Australia Burger Pty Ltd", Level: 6, Suite: 604 },
  { id: 7, Company: "Austra Cats Pty Ltd", Level: 9, Suite: 901 },
  { id: 8, Company: "Armstrong Legal Consulting", Level: 6, Suite: 605 },
  { id: 9, Company: "AXE recruitment", Level: 4, Suite: 401 },
  { id: 10, Company: "Balance Life", Level: 6, Suite: 605 },
  { id: 11, Company: "Balance Recreation", Level: 3, Suite: 302 },
  { id: 12, Company: "Brook & Pown Co", Level: 3, Suite: 305 },
  { id: 13, Company: "BTC Ready Limited", Level: 8, Suite: 805 },
  { id: 14, Company: "Carramel Consulting", Level: 6, Suite: 606 },
  { id: 15, Company: "Carrington Financial", Level: 11, Suite: 1105 },
  { id: 16, Company: "Casual Meal", Level: 2, Suite: 204 },
  { id: 17, Company: "Centenary Legal Practice", Level: 3, Suite: 306 },
  { id: 18, Company: "Central Accounting & Taxation", Level: 1, Suite: 105 },
  { id: 19, Company: "Clever Mortgages", Level: 9, Suite: 904 },
  { id: 20, Company: "Clearly 90's Pty", Level: 6, Suite: 605 },
  { id: 21, Company: "Consult ME", Level: 6, Suite: 603 },
  { id: 22, Company: "Corporate Technology Services", Level: 2, Suite: 202 },
  { id: 23, Company: "Egis Papa", Level: 7, Suite: 701 },
  { id: 24, Company: "FERMER Insurance Specialists", Level: 1, Suite: 104 },
  { id: 25, Company: "Fire Shock Pty Ltd", Level: 10, Suite: 1005 },
  { id: 26, Company: "Global Video Pty Ltd", Level: 2, Suite: 201 },
  { id: 27, Company: "Golf Ball Specialist", Level: 3, Suite: 301 },
  { id: 28, Company: "GRTO Institute", Level: 1, Suite: 101 },
  { id: 29, Company: "Immigration Experts Pty Ltd", Level: 8, Suite: 801 },
  { id: 30, Company: "Instragram", Level: 9, Suite: 904 },
  { id: 31, Company: "Kenny & Associates Lawyers", Level: 9, Suite: 901 },
  { id: 32, Company: "Leadership Education Australia", Level: 7, Suite: 703 },
  { id: 33, Company: "LMAO Lawyers Pty Ltd", Level: 7, Suite: 709 },
  { id: 34, Company: "Mars Pty Ltd", Level: 2, Suite: 201 },
  { id: 35, Company: "Muri Muri Legal Practice", Level: 8, Suite: 802 },
  { id: 36, Company: "Peaceful Strata Management", Level: 8, Suite: 809 },
  { id: 37, Company: "Pinterested", Level: 1, Suite: 103 },
  { id: 38, Company: "Simple Supply", Level: 7, Suite: 705 },
  { id: 39, Company: "SXS Advisory Group", Level: 9, Suite: 901 },
  { id: 40, Company: "Skukura", Level: 11, Suite: 1104 },
  { id: 41, Company: "Sports Focus Physiotherapy", Level: 2, Suite: 204 },
  { id: 42, Company: "Think Harder", Level: 7, Suite: 705 },
  { id: 43, Company: "Tripple P", Level: 11, Suite: 1101 },
  { id: 44, Company: "Tri Logic", Level: 4, Suite: 405 },
  { id: 45, Company: "Umlaut", Level: 1, Suite: 101 },
  { id: 46, Company: "2hats", Level: 7, Suite: 209 },
  { id: 47, Company: "3D printer shop", Level: 1, Suite: 104 }
];

// Convert the JSON array to Html Table
function BindTable(jsondata) {
  var tableid = "#table-1, #table-2";
  // Get all the column headings of the data
  var columns = BindTableHeader(jsondata, tableid);
  for (var i = 0; i < jsondata.length; i++) {
    var row$ = $("<tr/>");
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = jsondata[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($("<td/>").html(cellValue));
    }
    $(tableid).append(row$);
  }
  // Append the "..." to the First Column of the HTML Table
  $(".table tr td:nth-child(2)").append(
    "       . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . "
  );
  $(tableid).show();
}

// Get all Column Names from JSON and Bind the HTML Table Header
function BindTableHeader(jsondata, tableid) {
  var columnSet = [];
  var headerTr$ = $("<tr/>");
  for (var i = 0; i < jsondata.length; i++) {
    var rowHash = jsondata[i];
    for (var key in rowHash) {
      if (rowHash.hasOwnProperty(key)) {
        // Add each unique column names to a variable array*/
        if ($.inArray(key, columnSet) === -1) {
          columnSet.push(key);
          headerTr$.append($("<th/>").html(key));
        }
      }
    }
  }
  $("#table-1 tr, #table-2 tr").remove();
  $(tableid).append(headerTr$);
  return columnSet;
}

function goInFullScreen(element) {
  //enter full screen mode
  if (element.requestFullscreen) element.requestFullscreen();
  else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
  else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
  else if (element.msRequestFullscreen) element.msRequestFullscreen();
  //hide cursor, too
  document.body.style.cursor = "none";
}

/* Open editor modal */
(function() {
  $("#modal-open").click(function() {
    $("#modal-overlay")
      .fadeIn(200)
      .css("display", "flex");
  });
  $("#modal-overlay-hide").click(function() {
    $("#modal-overlay").fadeOut(200);
  });
  var timedelay = 1;
  function delayCheck() {
    if (timedelay == 5) {
      $("#modal-open").fadeOut();
      timedelay = 1;
    }
    timedelay = timedelay + 1;
  }

  /* Show editor button */
  $(document).mousemove(function() {
    $("#modal-open").fadeIn();
    timedelay = 1;
    clearInterval(_delay);
    _delay = setInterval(delayCheck, 200);
  });
  // page loads starts delay timer
  _delay = setInterval(delayCheck, 200);
})();

// Starting
$(document).ready(function() {
  // Detect Chrome Browser to Hide the Warning Message & Activate the Drag & Drop
  if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase()) 
  && !/edge/.test(navigator.userAgent.toLowerCase())) {
    $(".dropbox-container").hide();
    BindTable(mockData);
    $("#fixedtable tr").fadeIn(1500);
    // Go Into FullScreen Mode
    //goInFullScreen(document.body);
  } else {
    $(".dropbox-container").show();
  }
});
