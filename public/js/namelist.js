
function generateWeekDropDownUI(){
    $(".week").each(function(){
        var weekDropDownUI = "";
        for (var i = 1; i <= 53; i++) {
            weekDropDownUI += "<option>" + i + "</option>";
        }
        $(this).append(weekDropDownUI);
    });
}

function generateResponseDropDownUI(){

    const responses = ["A", "B", "C"];

    $(".response").each(function(){
        var responseDropDownUI = "";
        for (var i = 0; i < 3; i++) {
            responseDropDownUI += "<option>" + responses[i] + "</option>";
        }
        $(this).append(responseDropDownUI);
    });
}

generateWeekDropDownUI();
generateResponseDropDownUI();