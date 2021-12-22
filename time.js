function convertTimeFrom12To24(timeStr) {
    var colon = timeStr.indexOf(':');
    var hours = timeStr.substr(0, colon),
        minutes = timeStr.substr(colon+1, 2),
        second = timeStr.substr(colon+2,3),
        meridian = timeStr.substr(colon+6, 2).toUpperCase();
   
   
    var hoursInt = parseInt(hours),
        offset = meridian == 'PM' ? 12 : 0;
   
    if (hoursInt == 12) 
    {
      
      hoursInt = offset;
    } 
    else {
        hoursInt+= offset;
    }
    return hoursInt + ":" + minutes + ":"+ "00";
  }
  console.log(convertTimeFrom12To24("08:01:00PM"));
