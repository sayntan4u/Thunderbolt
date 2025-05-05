var selectedAvatarId = 17;

$("#saveChangeAvatar").click(function() {
    $("#avatar_navbar").attr("src", $("#changeAvatarModal_avatar_selected").attr("src"));
    $("#avatar_profile").attr("src", $("#changeAvatarModal_avatar_selected").attr("src"));
    var srcStr = $("#changeAvatarModal_avatar_selected").attr("src");
    selectedAvatarId = srcStr.substring(srcStr.lastIndexOf("/") + 1, srcStr.lastIndexOf("."));
    $("#avatarChangeAlert").removeClass("hidden");
    $("#avatarChangeAlert").fadeIn(500).delay(2000).fadeOut(500, function() {
        $(this).addClass("hidden");
    });

});

$("#openChangeAvatarModalBtn").click(function() {
    $("#changeAvatarModal_avatar_selected").attr("src", $("#avatar_profile").attr("src"));   
    loadAvatarListUI(selectedAvatarId);
    changeAvatarModal.showModal();
});

$(document).on("click", ".avatar_thunder", function(e) {
    let avatarId = $(this).attr("src");
    $("#changeAvatarModal_avatar_selected").attr("src", avatarId);

    $("#avatarList").children().each(function(){
        $(this).children(".avatar_thunder").removeClass("border-4 border-primary");
    });
    $(this).addClass("border-4 border-primary");
});


function loadAvatarListUI(selectedAvatarId) {
    $("#avatarList").empty();
    for(let i=1; i<=17; i++){
        $("#avatarList").append(`
            <div class="h-20 w-20 shrink-0 mask mask-circle">
                <img class="avatar_thunder ${(i==selectedAvatarId)? 'border-4 border-primary' : ''}" src="images/avatars/${i}.avif" />
            </div>
            `);
    }
}

loadAvatarListUI(selectedAvatarId);
$("#avatar_profile").attr("src", `images/avatars/${selectedAvatarId}.avif`);