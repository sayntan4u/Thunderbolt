$("#saveChangeAvatar").click(function () {
  $("#avatar_navbar").attr(
    "src",
    $("#changeAvatarModal_avatar_selected").attr("src")
  );
  $("#avatar_profile").attr(
    "src",
    $("#changeAvatarModal_avatar_selected").attr("src")
  );
  $("#avatar_dropdown").attr(
    "src",
    $("#changeAvatarModal_avatar_selected").attr("src")
  );

  var srcStr = $("#changeAvatarModal_avatar_selected").attr("src");
  selectedAvatarId = srcStr.substring(
    srcStr.lastIndexOf("/") + 1,
    srcStr.lastIndexOf(".")
  );

  saveAvatarFB(selectedAvatarId);

  $("#avatarChangeAlert").removeClass("hidden");
  $("#avatarChangeAlert")
    .fadeIn(500)
    .delay(2000)
    .fadeOut(500, function () {
      $(this).addClass("hidden");
    });
});

$("#openChangeAvatarModalBtn").click(function () {
  $("#changeAvatarModal_avatar_selected").attr(
    "src",
    $("#avatar_profile").attr("src")
  );
  loadAvatarListUI(selectedAvatarId);
  changeAvatarModal.showModal();
});

$("#editProfileBtn").click(function () {
  $("#updateProfileName").val($("#profileName").html());
  $("#updateProfileEmail").val($("#profileEmail").html());
  $("#updateProfilePhone").val($("#profilePhone").html());
  updateProfileModal.showModal();
});

$("#updateProfileBtn").click(function () {
  const name = $("#updateProfileName").val();
  const phone = $("#updateProfilePhone").val();
  updateProfileFB(name, phone)
  $("#profileName").html(name);
  $("#navMenuName").html(name);
  $("#profilePhone").html(phone);

});

$(document).on("click", ".avatar_thunder", function (e) {
  let avatarId = $(this).attr("src");
  $("#changeAvatarModal_avatar_selected").attr("src", avatarId);

  $("#avatarList")
    .children()
    .each(function () {
      $(this)
        .children(".avatar_thunder")
        .removeClass("border-4 border-primary");
    });
  $(this).addClass("border-4 border-primary");
});

function saveAvatarFB(avID) {
  const data = { uid: uid.innerHTML, avID: avID };
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/user/setAvatarId");
  xhttp.onload = function () {};
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(data));
}

function updateProfileFB(name, phone) {
  const data = { uid: uid.innerHTML, name: name, phone : phone };
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/user/updateUser");
  xhttp.onload = function () {};
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(data));
}

function loadAvatarListUI(selectedAvatarId) {
  $("#avatarList").empty();
  for (let i = 1; i <= 17; i++) {
    $("#avatarList").append(`
            <div class="h-20 w-20 shrink-0 mask mask-circle">
                <img class="avatar_thunder ${
                  i == selectedAvatarId ? "border-4 border-primary" : ""
                }" src="images/avatars/${i}.avif" />
            </div>
            `);
  }
}

loadAvatarListUI(selectedAvatarId);
