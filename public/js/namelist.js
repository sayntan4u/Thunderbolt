class Prospect {
  constructor({
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

//testing

const p1 = new Prospect({name : "Gangotri Mandava", week : 18, zone: "Office"});
const p2 = new Prospect({name : "Anjusree Gunji", week : 18, zone: "PG"});
const p3 = new Prospect({name : "Srividya Tikka", week : 18, zone: "Office"});

const namelist = [];

namelist.push(p1);
namelist.push(p2);
namelist.push(p3);
namelist.push(new Prospect({name : "Gangotri Mandava", week : 18, zone: "Office"}));
namelist.push(new Prospect({name : "Gangotri Mandava", week : 18, zone: "Office"}));
namelist.push(new Prospect({name : "Anjusree Gunji", week : 18, zone: "PG"}));
namelist.push(new Prospect({name : "Gangotri Mandava", week : 18, zone: "Office"}));
namelist.push(new Prospect({name : "Gangotri Mandava", week : 18, zone: "Office"}));
namelist.push(new Prospect({name : "Gangotri Mandava", week : 18, zone: "Office"}));
namelist.push(new Prospect({name : "Anjusree Gunji", week : 18, zone: "PG"}));
namelist.push(new Prospect({name : "Gangotri Mandava", week : 18, zone: "Office"}));
namelist.push(new Prospect({name : "Anjusree Gunji", week : 18, zone: "PG"}));
namelist.push(new Prospect({name : "Gangotri Mandava", week : 18, zone: "Office"}));
namelist.push(new Prospect({name : "Srividya Tikka", week : 18, zone: "Office"}));
namelist.push(new Prospect({name : "Gangotri Mandava", week : 18, zone: "Office"}));

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
							<th class="name_col z-[2]"><input type="text" value="${prospect.name}" /></th>
							<td class="weekAdded"><input type="text" placeholder="week" value="${
                prospect.week
              }" /></td>
							<td>
								<select class="zone">
									<option ${prospect.zone == "Office" ? "selected" : ""}>Office</option>
									<option ${prospect.zone == "PG" ? "selected" : ""}>PG</option>
									<option ${prospect.zone == "School" ? "selected" : ""}>School</option>
									<option ${prospect.zone == "College" ? "selected" : ""}>College</option>
									<option ${prospect.zone == "Others" ? "selected" : ""}>Others</option>
								</select>
							</td>
							<td class="city"><input type="text" placeholder="city" value="${
                prospect.city
              }" /></td>
							<td class="bl"> <input type="checkbox" class="checkbox" ${
                prospect.chatting == true ? "checked" : ""
              }/></td>
							<td class="br"> <input type="checkbox" class="checkbox" ${
                prospect.socialMedia == true ? "checked" : ""
              }/></td>
							<td class="bl"> <input type="checkbox" class="checkbox" ${
                prospect.info == true ? "checked" : ""
              }/></td>
							<td class="weekInfo"><input type="text" placeholder="week" value="${
                prospect.infoWeek
              }"/></td>
							<td class="br">
								<select class="response responseInfo">
									<option></option>
									<option ${prospect.infoResponse == "A" ? "selected" : ""}>A</option>
									<option ${prospect.infoResponse == "B" ? "selected" : ""}>B</option>
									<option ${prospect.infoResponse == "C" ? "selected" : ""}>C</option>
								</select>
							</td>
							<td class="bl"> <input type="checkbox" class="checkbox" ${
                prospect.reinfo == true ? "checked" : ""
              }/></td>
							<td class="weekReinfo"><input type="text" placeholder="week" value="${
                prospect.reinfoWeek
              }"/></td>
							<td class="br">
								<select class="response responseReinfo">
									<option></option>
									<option ${prospect.reinfoResponse == "A" ? "selected" : ""}>A</option>
									<option ${prospect.reinfoResponse == "B" ? "selected" : ""}>B</option>
									<option ${prospect.reinfoResponse == "C" ? "selected" : ""}>C</option>
								</select>
							</td>
							<td> <input type="checkbox" class="checkbox" ${
                prospect.meetup == true ? "checked" : ""
              }/></td>
							<td class="bl"> <input type="checkbox" class="checkbox" ${
                prospect.invi == true ? "checked" : ""
              }/></td>
							<td class="weekInvite"><input type="text" placeholder="week" value="${
                prospect.inviWeek
              }"/></td>
							<td class="br">
								<select class="responseInvite">
									<option></option>
									<option ${prospect.inviResponse == "Yes" ? "selected" : ""}>Yes</option>
									<option ${prospect.inviResponse == "No" ? "selected" : ""}>No</option>
								</select>
							</td>
							<td class="bl"> <input type="checkbox" class="checkbox" ${
                prospect.plan == true ? "checked" : ""
              }/></td>
							<td class="weekPlan"><input type="text" placeholder="week" value="${
                prospect.planWeek
              }"/></td>
							<td class="br">
								<select class="planStatus">
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
							<td class="remarks"><input type="text" placeholder="remarks" value="${
                prospect.remarks
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

function setNLCount(count){
  nlCount.innerHTML = count;
  fromProspect.innerHTML = (parseInt(pageNumber.innerHTML) - 1)*10 + 1;
  if(count > parseInt(pageNumber.innerHTML)*10){
    toProspect.innerHTML = parseInt(pageNumber.innerHTML)*10;
  }else{
    toProspect.innerHTML = count;
  }
}


function goBack(){
  if(parseInt(pageNumber.innerHTML)>1){
    pageNumber.innerHTML = parseInt(pageNumber.innerHTML) - 1;
  }
  generateNL(namelist);
}

function goForward(){
  if(parseInt(pageNumber.innerHTML)< parseInt(namelist.length/10) + 1){
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

  const prospect = new Prospect({name : name, week : week, zone : zone, city: city});
  namelist.push(prospect);
  clearFormAddPerson();

  generateNL(namelist);
}

//loading
function loadNameListUI(namelist, count) {
  $("#namelistTable").empty();
  var sl = 1 + (parseInt(pageNumber.innerHTML)-1)*10;
  for (let i = 0; i < namelist.length; i++) {
    generateRowNamelistUI(sl, namelist[i]);
    sl++;
  }
  setNLCount(count);
}

function generateNL(namelist){
  if(namelist.length > parseInt(pageNumber.innerHTML)*10){
    loadNameListUI(namelist.slice((parseInt(pageNumber.innerHTML)-1)*10, parseInt(pageNumber.innerHTML)*10), namelist.length);
  }else{
    loadNameListUI(namelist.slice((parseInt(pageNumber.innerHTML)-1)*10, namelist.length), namelist.length);
  }
}

generateSortWeekDropDownUI();

//loadnamelist
generateNL(namelist);

