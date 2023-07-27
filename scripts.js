const request = new XMLHttpRequest();
request.open("GET", "https://json.extendsclass.com/bin/4fdd0e3f35c9", true);
request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200) {
        try {
	        var data = JSON.parse(request.responseText);
            run(data);
        } catch(err) {
            console.log("Error: " + err.message);
        }
    }
};
request.send();

function run(data) {
    document.getElementById("dailyMsg").innerHTML = data.dailyMsg;
    document.getElementById("dailyMsgEnd").hidden = false;
    document.getElementById("leaderboard").innerHTML = decodeLeaderboard(data.people);
}

function decodeLeaderboard(data) {
    var r = "<h3>Bickley Bucks Leaderboard</h3>";
    for(var i = 0; i < data.length; i++) {
        r += '<p class="leaderboard-part"><b>' + (i + 1) + "</b>: " + data[i].name + " - With " + data[i].balance + " Bickley Buck" + (data[i].balance == 1?"":"s") + "!</p>";
    }
    return(r);
}