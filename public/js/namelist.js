class UserThunderbolt {
  constructor(
    name,
    week,
    city,
    zone,
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
    remarks = ""
  ) {
    this.name = name;
    this.week = week;
    this.city = city;
    this.zone = zone;
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

const namelist = [];
var sl = 1;

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

function generateRowNamelistUI(sl, user) {
  //   $("#namelistTable").empty();
  $("#namelistTable").append(`
        						<tr>
							<td class="sl">${sl}</td>
							<th class="name_col z-[2]"><input type="text" value="${user.name}" /></th>
							<td class="weekAdded"><input type="text" placeholder="week" value="${
                user.week
              }" /></td>
							<td>
								<select class="zone">
									<option ${user.zone == "Office" ? "selected" : ""}>Office</option>
									<option ${user.zone == "PG" ? "selected" : ""}>PG</option>
									<option ${user.zone == "School" ? "selected" : ""}>School</option>
									<option ${user.zone == "College" ? "selected" : ""}>College</option>
									<option ${user.zone == "Others" ? "selected" : ""}>Others</option>
								</select>
							</td>
							<td class="city"><input type="text" placeholder="city" value="${
                user.city
              }" /></td>
							<td class="bl"> <input type="checkbox" class="checkbox" ${user.chatting == true ? "checked" : ""}/></td>
							<td class="br"> <input type="checkbox" class="checkbox" ${user.socialMedia == true ? "checked" : ""}/></td>
							<td class="bl"> <input type="checkbox" class="checkbox" ${user.info == true ? "checked" : ""}/></td>
							<td class="weekInfo"><input type="text" placeholder="week" value="${
                user.infoWeek
              }"/></td>
							<td class="br">
								<select class="response responseInfo">
									<option></option>
									<option ${user.infoResponse == "A" ? "selected" : ""}>A</option>
									<option ${user.infoResponse == "B" ? "selected" : ""}>B</option>
									<option ${user.infoResponse == "C" ? "selected" : ""}>C</option>
								</select>
							</td>
							<td class="bl"> <input type="checkbox" class="checkbox" ${user.reinfo == true ? "checked" : ""}/></td>
							<td class="weekReinfo"><input type="text" placeholder="week" value="${
                user.reinfoWeek
              }"/></td>
							<td class="br">
								<select class="response responseReinfo">
									<option></option>
									<option ${user.reinfoResponse == "A" ? "selected" : ""}>A</option>
									<option ${user.reinfoResponse == "B" ? "selected" : ""}>B</option>
									<option ${user.reinfoResponse == "C" ? "selected" : ""}>C</option>
								</select>
							</td>
							<td> <input type="checkbox" class="checkbox" ${user.meetup == true ? "checked" : ""}/></td>
							<td class="bl"> <input type="checkbox" class="checkbox" ${user.invi == true ? "checked" : ""}/></td>
							<td class="weekInvite"><input type="text" placeholder="week" value="${
                user.inviWeek
              }"/></td>
							<td class="br">
								<select class="responseInvite">
									<option></option>
									<option ${user.inviResponse == "Yes" ? "selected" : ""}>Yes</option>
									<option ${user.inviResponse == "No" ? "selected" : ""}>No</option>
								</select>
							</td>
							<td class="bl"> <input type="checkbox" class="checkbox" ${user.plan == true ? "checked" : ""}/></td>
							<td class="weekPlan"><input type="text" placeholder="week" value="${
                user.planWeek
              }"/></td>
							<td class="br">
								<select class="planStatus">
									<option></option>
									<option ${user.planStatus == "CIP" ? "selected" : ""}>CIP</option>
									<option ${user.planStatus == "AOS" ? "selected" : ""}>AOS</option>
									<option ${user.planStatus == "LA2" ? "selected" : ""}>LA2</option>
									<option ${user.planStatus == "LA" ? "selected" : ""}>LA</option>
									<option ${user.planStatus == "MIA" ? "selected" : ""}>MIA</option>
									<option ${user.planStatus == "OOZ" ? "selected" : ""}>OOZ</option>
									<option ${user.planStatus == "Onboarded" ? "selected" : ""}>Onboarded</option>
								</select>
							</td>
							<td class="remarks"><input type="text" placeholder="remarks" value="${
                user.remarks
              }"/></td>
							<th>
								<div class="flex">
									<div class=""><button class="btn btn-soft btn-sm btn-info p-0 h-7 w-7"><i
												class="w-5 h-5" data-lucide="eye"></i></button>
									</div>
									<div class="ml-1"><button class="btn btn-soft btn-sm btn-primary p-0 h-7 w-7"><i
												class="w-5 h-5" data-lucide="snail"></i></button></div>
									<div class="ml-1"><button class="btn btn-soft btn-sm btn-error p-0 h-7 w-7"><i
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

function addPerson() {
  const name = addPersonName.value;
  const city = addPersonCity.value;
  const week = addPersonWeekAdded.value;
  const zone = addPersonZone.value;

  const user = new UserThunderbolt(name, week, city, zone, true);
  generateRowNamelistUI(sl, user);
  clearFormAddPerson();
  sl++;
}

const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];

// for (let i = 0; i < names.length; i++) {
//   generateRowNamelistUI(i + 1, names[i]);
// }

generateSortWeekDropDownUI();
