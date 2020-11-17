var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
 
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
 
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

var worker = null;

window.onload = function () {
    var monthly_amount = getUrlParameter("monthly");
    if (monthly_amount !== null) {
        worker = new Worker("money_changer.js");
        worker.postMessage(monthly_amount);
        worker.addEventListener('message', function(e) {
            document.getElementById("money").innerHTML = e.data.toFixed(10);
        });
    }
}