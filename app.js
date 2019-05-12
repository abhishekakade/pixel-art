$(document).ready(function() {
  const TABLE = $("table");
  const CONTAINER = $(".container-fluid");
  let colorVal = $("#colors").val(); //color picker value

  function resetGrid() {
    TABLE.empty();
  }

  function newGrid(event) {
    event.preventDefault();
    TABLE.empty();

    let rows = $("#rows").val(); //table height
    let cols = $("#cols").val(); //table width

    // function to add columns to each row
    let addCells = function() {
      for (c = 1; c <= cols; c++) {
        $("tr:last").append("<td></td>");
        // $("td").css("transition", "all 1s");
        // $("td").fadeIn();
      }
    };

    // For loop to make table rows tr
    for (r = 1; r <= rows; r++) {
      TABLE.append("<tr></tr>");

      // For loop to add td cells in the row tr
      addCells();
    }
  }

  /* Try adding IIFE with setTimeOut func for animation */

  CONTAINER.on("click", "#reset", resetGrid);

  CONTAINER.on("click", "#submit-btn", newGrid);

  TABLE.on("click", "td", function() {
    $(this).css("background-color", colorVal);
  });

  /* Drag Color Function - Check if mouse button is down while hovering */

  TABLE.on("mousedown mouseover", "td", function(e) {
    if (e.buttons == 1) {
      colorVal = $("#colors").val();
      $(this).css("background-color", colorVal);
    }
  });

  TABLE.on("dblclick", "td", function() {
    $(this).css("background-color", "#ffffff");
  });

  // To disable right click on canvas
  TABLE.on("contextmenu", function(e) {
    e.preventDefault();
  });
});
