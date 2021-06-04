let str = getQueryVariable("status");
if(str == "sec"){
    let canvasele = document.getElementById("can");
    canvasele.style.display = "block"
}


function mysearch()
{
    let stat = document.getElementById("title");
    stat.innerHTML = "<b>当前状况：拥挤</b>";
    let canvasele = document.getElementById("can");
    canvasele.style.display = "block"
}

function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

// $("#title").click(() => {
//     alert("123");
//     let stat = document.getElementById("title");
//     stat.innerHTML = "<b>当前状况：拥挤</b>"
// });