function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for(var i=1; i<tr.length; i++) {
      var found = false;
      var td = tr[i].getElementsByTagName('td');
      if(td) {
        for(var j=0; j<td.length; j++) {
          txtValue = td[j].textContent || td.innerText;
          if(txtValue.toUpperCase().indexOf(filter) > -1) {
            found = true;
            break;
          } 
        }
        if(found) {
          tr[i].style.display = "";
        }else {
          tr[i].style.display = "none";
        }
      }
    }

}
