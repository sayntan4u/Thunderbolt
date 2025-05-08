class Prospect {
  constructor({
    id,
    name,
    week,
    zone,
    city = "",
    chatting = false,
    socialMedia = false,
    info = false,
    infoWeek = "",
    infoResponse = "",
    reinfo = false,
    reinfoWeek = "",
    reinfoResponse = "",
    meetup = false,
    invi = false,
    inviWeek = "",
    inviResponse = "",
    plan = false,
    planWeek = "",
    planStatus = "",
    remarks = "",
  }) {
    this.id = id;
    this.name = name;
    this.week = week;
    this.zone = zone;
    this.city = city;
    this.chatting = chatting;
    this.socialMedia = socialMedia;
    this.info = info;
    this.infoWeek = infoWeek;
    this.infoResponse = infoResponse;
    this.reinfo = reinfo;
    this.reinfoWeek = reinfoWeek;
    this.reinfoResponse = reinfoResponse;
    this.meetup = meetup;
    this.invi = invi;
    this.inviWeek = inviWeek;
    this.inviResponse = inviResponse;
    this.plan = plan;
    this.planWeek = planWeek;
    this.planStatus = planStatus;
    this.remarks = remarks;
  }
}

var namelist = [];

function generateSortWeekDropDownUI() {
  var weekDropDownUI = "";
  for (var i = 1; i <= 53; i++) {
    weekDropDownUI += "<option>" + i + "</option>";
  }
  $("#sortWeek").children("select").append(weekDropDownUI);
  $("#weekAddPerson").children("select").append(weekDropDownUI);
}

function filterValueChanged(elem) {
  $(".option").each(function () {
    $(this).addClass("hidden");
  });
  if ($(elem).val() == "Name") {
    $("#sortName").parent().removeClass("hidden");
  } else if ($(elem).val() == "Week Added") {
    $("#sortWeek").parent().removeClass("hidden");
  } else if ($(elem).val() == "Zone") {
    $("#sortZone").parent().removeClass("hidden");
  } else if ($(elem).val() == "City") {
    $("#sortCity").parent().removeClass("hidden");
  } else if (
    $(elem).val() == "Chatting" ||
    $(elem).val() == "Social Media" ||
    $(elem).val() == "Info" ||
    $(elem).val() == "Reinfo" ||
    $(elem).val() == "Meetup" ||
    $(elem).val() == "Invi" ||
    $(elem).val() == "Plan"
  ) {
    $("#sortDonePending option").prop("selected", function () {
      // return defaultSelected property of the option
      return this.defaultSelected;
    });
    $("#sortDonePending").parent().removeClass("hidden");
  }
}

function generateRowNamelistUI(sl, prospect) {
  //
  $("#namelistTable").append(`
        						<tr>
							<td class="sl">${sl}</td>
							<th class="name_col z-[2]"><input type="text" value="${
                prospect.name
              }" onchange="updateName(${prospect.id}, this)"/></th>
							<td class="weekAdded"><input type="text" placeholder="week" onchange="updateWeekAdded(${
                prospect.id
              }, this)" value="${prospect.week}" /></td>
							<td>
								<select class="zone" onchange="updateZone(${prospect.id}, this)">
									<option ${prospect.zone == "Office" ? "selected" : ""}>Office</option>
									<option ${prospect.zone == "PG" ? "selected" : ""}>PG</option>
									<option ${prospect.zone == "School" ? "selected" : ""}>School</option>
									<option ${prospect.zone == "College" ? "selected" : ""}>College</option>
									<option ${prospect.zone == "Others" ? "selected" : ""}>Others</option>
								</select>
							</td>
							<td class="city"><input type="text" placeholder="city" onchange="updateCity(${
                prospect.id
              }, this)" value="${prospect.city}" /></td>
							<td class="bl"> <input type="checkbox" class="checkbox" onchange="updateChatting(${
                prospect.id
              }, this)" ${prospect.chatting == true ? "checked" : ""}/></td>
							<td class="br"> <input type="checkbox" class="checkbox" onchange="updateSocialMedia(${
                prospect.id
              }, this)" ${prospect.socialMedia == true ? "checked" : ""}/></td>
							<td class="bl"> <input type="checkbox" class="checkbox" onchange="updateInfo(${
                prospect.id
              }, this)" ${prospect.info == true ? "checked" : ""}/></td>
							<td class="weekInfo"><input type="text" placeholder="week" onchange="updateInfoWeek(${
                prospect.id
              }, this)" value="${prospect.infoWeek}"/></td>
							<td class="br">
								<select class="response responseInfo" onchange="updateInfoResponse(${
                  prospect.id
                }, this)">
									<option></option>
									<option ${prospect.infoResponse == "A" ? "selected" : ""}>A</option>
									<option ${prospect.infoResponse == "B" ? "selected" : ""}>B</option>
									<option ${prospect.infoResponse == "C" ? "selected" : ""}>C</option>
								</select>
							</td>
							<td class="bl"> <input type="checkbox" class="checkbox" onchange="updateReInfo(${
                prospect.id
              }, this)" ${prospect.reinfo == true ? "checked" : ""}/></td>
							<td class="weekReinfo"><input type="text" placeholder="week" onchange="updateReInfoWeek(${
                prospect.id
              }, this)" value="${prospect.reinfoWeek}"/></td>
							<td class="br">
								<select class="response responseReinfo" onchange="updateReInfoResponse(${
                  prospect.id
                }, this)">
									<option></option>
									<option ${prospect.reinfoResponse == "A" ? "selected" : ""}>A</option>
									<option ${prospect.reinfoResponse == "B" ? "selected" : ""}>B</option>
									<option ${prospect.reinfoResponse == "C" ? "selected" : ""}>C</option>
								</select>
							</td>
							<td> <input type="checkbox" class="checkbox" onchange="updateMeetup(${
                prospect.id
              }, this)" ${prospect.meetup == true ? "checked" : ""}/></td>
							<td class="bl"> <input type="checkbox" class="checkbox" onchange="updateInvi(${
                prospect.id
              }, this)" ${prospect.invi == true ? "checked" : ""}/></td>
							<td class="weekInvite"><input type="text" placeholder="week" onchange="updateInviWeek(${
                prospect.id
              }, this)" value="${prospect.inviWeek}"/></td>
							<td class="br">
								<select class="responseInvite" onchange="updateInviResponse(${
                  prospect.id
                }, this)">
									<option></option>
									<option ${prospect.inviResponse == "Yes" ? "selected" : ""}>Yes</option>
									<option ${prospect.inviResponse == "No" ? "selected" : ""}>No</option>
								</select>
							</td>
							<td class="bl"> <input type="checkbox" class="checkbox" onchange="updatePlan(${
                prospect.id
              }, this)" ${prospect.plan == true ? "checked" : ""}/></td>
							<td class="weekPlan"><input type="text" placeholder="week" onchange="updatePlanWeek(${
                prospect.id
              }, this)" value="${prospect.planWeek}"/></td>
							<td class="br">
								<select class="planStatus" onchange="updatePlanStatus(${prospect.id}, this)">
									<option></option>
									<option ${prospect.planStatus == "CIP" ? "selected" : ""}>CIP</option>
									<option ${prospect.planStatus == "AOS" ? "selected" : ""}>AOS</option>
									<option ${prospect.planStatus == "LA2" ? "selected" : ""}>LA2</option>
									<option ${prospect.planStatus == "LA" ? "selected" : ""}>LA</option>
									<option ${prospect.planStatus == "MIA" ? "selected" : ""}>MIA</option>
									<option ${prospect.planStatus == "OOZ" ? "selected" : ""}>OOZ</option>
									<option ${
                    prospect.planStatus == "Onboarded" ? "selected" : ""
                  }>Onboarded</option>
								</select>
							</td>
							<td class="remarks"><input type="text" placeholder="remarks" onchange="updateRemarks(${
                prospect.id
              }, this)" value="${prospect.remarks}"/></td>
							<th>
								<div class="flex">
									<div class=""><button class="btn btn-soft btn-sm btn-info p-0 h-7 w-7" onclick="transferProspectToKIV(${
                    prospect.id
                  })"><i
												class="w-5 h-5" data-lucide="eye"></i></button>
									</div>
									<div class="ml-1"><button class="btn btn-soft btn-sm btn-primary p-0 h-7 w-7" onclick="transferProspectToLL(${
                    prospect.id
                  })"><i
												class="w-5 h-5" data-lucide="snail"></i></button></div>
									<div class="ml-1"><button class="btn btn-soft btn-sm btn-error p-0 h-7 w-7" onclick="removeProspect(${
                    prospect.id
                  })"><i
												class="w-5 h-5" data-lucide="trash-2"></i></button></div>
								</div>


							</th>
						</tr>
        
        `);
  lucide.createIcons();
}

function clearFormAddPerson() {
  addPersonName.value = "";
  addPersonCity.value = "";
}

function setNLCount(count) {
  if (count > 0) {
    $("#pagination").removeClass("hidden");
  } else {
    $("#pagination").addClass("hidden");
  }
  nlCount.innerHTML = count;
  fromProspect.innerHTML = (parseInt(pageNumber.innerHTML) - 1) * 10 + 1;
  if (count > parseInt(pageNumber.innerHTML) * 10) {
    toProspect.innerHTML = parseInt(pageNumber.innerHTML) * 10;
  } else {
    toProspect.innerHTML = count;
  }
}

function goBack() {
  if (parseInt(pageNumber.innerHTML) > 1) {
    pageNumber.innerHTML = parseInt(pageNumber.innerHTML) - 1;
  }
  generateNL(namelist);
}

function goForward() {
  if (parseInt(pageNumber.innerHTML) < namelist.length / 10) {
    pageNumber.innerHTML = parseInt(pageNumber.innerHTML) + 1;
  }
  generateNL(namelist);
}

//Addition
function addPerson() {
  const name = addPersonName.value;
  const city = addPersonCity.value;
  const week = addPersonWeekAdded.value;
  const zone = addPersonZone.value;

  const prospect = new Prospect({
    id: Date.now(),
    name: name,
    week: week,
    zone: zone,
    city: city,
  });

  namelist.push(prospect);
  addProspectFB(prospect);

  clearFormAddPerson();

  generateNL(namelist);
}

//updation
function updateName(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].name = $(elem).val();
      updateProspectFB(id, "name", $(elem).val());
      break;
    }
  }
}
function updateWeekAdded(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].week = $(elem).val();
      updateProspectFB(id, "week", $(elem).val());
      break;
    }
  }
}
function updateZone(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].zone = $(elem).val();
      updateProspectFB(id, "zone", $(elem).val());
      break;
    }
  }
}
function updateCity(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].city = $(elem).val();
      updateProspectFB(id, "city", $(elem).val());
      break;
    }
  }
}
function updateChatting(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].chatting = $(elem).prop("checked");
      updateProspectFB(id, "chatting", $(elem).prop("checked"), "bool");
      break;
    }
  }
}
function updateSocialMedia(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].socialMedia = $(elem).prop("checked");
      updateProspectFB(id, "socialMedia", $(elem).prop("checked"), "bool");
      break;
    }
  }
}
function updateInfo(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].info = $(elem).prop("checked");
      updateProspectFB(id, "info", $(elem).prop("checked"), "bool");
      break;
    }
  }
}
function updateInfoWeek(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].infoWeek = $(elem).val();
      updateProspectFB(id, "infoWeek", $(elem).val());
      break;
    }
  }
}
function updateInfoResponse(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].infoResponse = $(elem).val();
      updateProspectFB(id, "infoResponse", $(elem).val());
      break;
    }
  }
}
function updateReInfo(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].reinfo = $(elem).prop("checked");
      updateProspectFB(id, "reinfo", $(elem).prop("checked"), "bool");
      break;
    }
  }
}
function updateReInfoWeek(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].reinfoWeek = $(elem).val();
      updateProspectFB(id, "reinfoWeek", $(elem).val());
      break;
    }
  }
}
function updateReInfoResponse(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].reinfoResponse = $(elem).val();
      updateProspectFB(id, "reinfoResponse", $(elem).val());
      break;
    }
  }
}
function updateMeetup(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].meetup = $(elem).prop("checked");
      updateProspectFB(id, "meetup", $(elem).prop("checked"), "bool");
      break;
    }
  }
}
function updateInvi(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].invi = $(elem).prop("checked");
      updateProspectFB(id, "invi", $(elem).prop("checked"), "bool");
      break;
    }
  }
}
function updateInviWeek(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].inviWeek = $(elem).val();
      updateProspectFB(id, "inviWeek", $(elem).val());
      break;
    }
  }
}
function updateInviResponse(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].inviResponse = $(elem).val();
      updateProspectFB(id, "inviResponse", $(elem).val());
      break;
    }
  }
}
function updatePlan(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].plan = $(elem).prop("checked");
      updateProspectFB(id, "plan", $(elem).prop("checked"), "bool");
      break;
    }
  }
}
function updatePlanWeek(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].planWeek = $(elem).val();
      updateProspectFB(id, "planWeek", $(elem).val());
      break;
    }
  }
}
function updatePlanStatus(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].planStatus = $(elem).val();
      updateProspectFB(id, "planStatus", $(elem).val());
      break;
    }
  }
}
function updateRemarks(id, elem) {
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist[i].remarks = $(elem).val();
      updateProspectFB(id, "remarks", $(elem).val());
      break;
    }
  }
}

//Actions
function removeProspect(id) {
  const name = getName(id);
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist.splice(i, 1);
      break;
    }
  }
  removeProspectFB(id, name);
  generateNL(namelist);
}
function transferProspectToKIV(id) {
  const name = getName(id);
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist.splice(i, 1);
      break;
    }
  }
  transferProspectToKIVFB(id, name)
  generateNL(namelist);
  //Add to KIV list
}

function transferProspectToLL(id) {
  const name = getName(id);
  for (let i = 0; i < namelist.length; i++) {
    if (namelist[i].id == id) {
      namelist.splice(i, 1);
      break;
    }
  }
  transferProspectToLLFB(id, name);
  generateNL(namelist);
  //Add to LL list
}

//ajax methods
function addProspectFB(prospect) {
  const data = { prospect: prospect };
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/namelist/addProspect");
  xhttp.onload = function () {
    showAlert(this.responseText);
  };
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(data));
}

function showAlert(content, type="success"){
  $(".alert").removeClass("alert-error").removeClass("alert-info").removeClass("alert-primary").removeClass("alert-success").addClass("alert-" + type).removeClass("hidden");
  alertContent.innerHTML = content;
}

function getNLData() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/namelist/getData");
  xhttp.onload = function () {
    const response = JSON.parse(this.responseText);
    namelist = response;
    generateNL(namelist);
    showAlert("Namelist loaded");
   
  };
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send();
}

function removeProspectFB(id, name) {
  const data = { id: id };
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/namelist/removeProspect");
  xhttp.onload = function () {
    showAlert(name + " removed successfully!", "error");
  };
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(data));
}

function transferProspectToKIVFB(id, name) {
  const data = { id: id };
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/namelist/transferToKIV");
  xhttp.onload = function () {
    showAlert(name + " transferred to KIV successfully!", "info");
  };
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(data));
}

function transferProspectToLLFB(id, name) {
  const data = { id: id };
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/namelist/transferToLL");
  xhttp.onload = function () {
    showAlert(name + " transferred to LL successfully!", "primary");
  };
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(data));
}

function getName(id){
  for(let i=0; i<namelist.length; i++){
    if(namelist[i].id == id){
      return namelist[i].name;
    }
  }
}

function updateProspectFB(id, fieldName, value, type = "str") {
  const data = { id: id, fieldName: fieldName, value: value, type: type };
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/namelist/updateProspect");
  xhttp.onload = function () {
    showAlert(getName(id) + " updated successfully!");
  };
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(data));
}

//loading
function loadNameListUI(namelist, count) {
  $("#namelistTable").empty();
  var sl = 1 + (parseInt(pageNumber.innerHTML) - 1) * 10;
  for (let i = 0; i < namelist.length; i++) {
    generateRowNamelistUI(sl, namelist[i]);
    sl++;
  }
  setNLCount(count);
}

function generateNL(namelist) {
  if (namelist.length > parseInt(pageNumber.innerHTML) * 10) {
    loadNameListUI(
      namelist.slice(
        (parseInt(pageNumber.innerHTML) - 1) * 10,
        parseInt(pageNumber.innerHTML) * 10
      ),
      namelist.length
    );
  } else {
    loadNameListUI(
      namelist.slice(
        (parseInt(pageNumber.innerHTML) - 1) * 10,
        namelist.length
      ),
      namelist.length
    );
  }
}

generateSortWeekDropDownUI();

//loadnamelist
getNLData();
