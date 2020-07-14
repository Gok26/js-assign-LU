function display() {
    var date = new Date();
    var day = date.getDay(); // returns the day in index format from 0 to 6
    var weekday =['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday','Friday', 'Saturday'];
    document.write(" Today is : " + weekday[day]);  
    document.write('\n');
    
    // get time
    var hours = date.getHours(); // return hours from 0 to 23
    var toCheck = hours >= 12 ? 'PM' : 'AM' ;
    hours = hours % 12; // to convert in to 12 hour format
    hours = hours ? hours : 12;
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var myTime = hours + " " + toCheck + " : " + minutes + " : " + date.getMilliseconds();
    document.write(" Current time is : " + myTime);
}