<!DOCTYPE html>
<html>
  <head>
  <script>
    function isEven(num) { 
        if ( num%2 === 0) {
            return true
        }else {
            return false
        }
    }
    function renderTable() {
      var html = "<table style='width: 450px; border: 1px solid black;  border-collapse: collapse; text-align: center;'>"
      for (var i = 1; i <= 10; i++) {
        html += "<tr style='width: 450px; border: 1px solid black;  border-collapse: collapse; text-align: center;'>"
        for (var j = 1; j <= 11; j++) {
            var even = isEven(i * j)
            if (even){
                html += "<td style='width: 450px; border: 1px solid black;  border-collapse: collapse; text-align: center; width: 40px; background-color: #B3E8E5'>"+ i * j +"</td>"
            }else {
                html += "<td style='width: 450px; border: 1px solid black;  border-collapse: collapse; text-align: center; width: 40px; background-color: #79DAE8'>"+ i * j +"</td>"
            }
        }
      }
      html += "</table>"
      document.getElementById("container").innerHTML= html;
  }
  </script>
  </head>
  <body  onload="renderTable()">
   <div id="container">
   </div>
  </body>
</html>