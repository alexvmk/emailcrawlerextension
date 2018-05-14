(function () {
    
    var extrEmails = function extractEmails ( text ){
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    };

    var save = function saveText(filename, text) {
            var tempElem = document.createElement('a');
            tempElem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            tempElem.setAttribute('download', filename);
            tempElem.click();
         };

    console.log("test1");
    var markup = document.documentElement.innerHTML;
    console.log(extrEmails(markup));

    var currentdate = new Date(); 
    var fileName = "Emails_" + currentdate.getDate() + "_"
                + (currentdate.getMonth()+1)  + "_" 
                + currentdate.getFullYear() + "   "  
                + currentdate.getHours() + "_"  
                + currentdate.getMinutes() + "_" 
                + currentdate.getSeconds();

    save(fileName, extrEmails(markup));

    console.log("end");
})();