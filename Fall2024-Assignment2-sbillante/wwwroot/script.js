function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': 'aeb04dc4c27f41418e537b63ffece7e8'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
            $("#searchResults").css("visibility", "visible");
        })
        .fail(function () {
            alert('error');
        });
}

$("#search").click(function () {
    apiSearch();
    //console.log("something happened");
});

$("#engineName").click(function () {
    console.log("change background image");
});

$("#clock").click(function () {
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    let readableTime = hour + ":" + minutes;
    //console.log("Hey, the clock function ran");
    $("#time").html(readableTime);
    $("#time").dialog();
    $("#time").css("visibility", "visible");
});