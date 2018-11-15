function uptimeChecker() {
  var siteArrey = ['Shaadilive', 'Divabride', 'Fropper'];
  var urlArrey = ['http://blog.shaadi.com', 'http://www.divabride.in', 'https://www.fropper.com'];
  
  for (i=1; i < 4; i++){
    //Logger.log(urlArrey[i-1]);
    var urlResponse = UrlFetchApp.fetch(urlArrey[i-1], {muteHttpExceptions: true});
    if (urlResponse.getResponseCode() != 200){
      GmailApp.sendEmail('prashant.j@peopleinteractive.in', siteArrey[i-1]+' is down', 'Status code for '+siteArrey[i-1]+' is '+urlResponse.getResponseCode());
    }
  }
}

