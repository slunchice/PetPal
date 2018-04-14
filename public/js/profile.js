    $.get("/api/owner", function(data){
    console.log(data);
    $("#humanPic").html("<img id='humanPic' src='" + data[0].photo + "'/>");
    $("#profile-first-name").html(data[0].first_name);
    $("#profile-last-name").html(data[0].last_name);
    $("#humanLocation").html(data[0].location);
    })