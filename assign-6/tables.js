function showTables(){
    let values = document.getElementById('values1').value;

    let tableValues = ''
    for(i=1; i<=10 ; i++){
        tableValues += values + " x " + i + "=" + values*i + "\n" ;
    }
    var tables = document.getElementById('tables').innerHTML = tableValues;
} 