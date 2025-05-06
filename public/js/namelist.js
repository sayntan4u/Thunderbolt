function generateSortWeekDropDownUI() {
  var weekDropDownUI = "";
  for (var i = 1; i <= 53; i++) {
    weekDropDownUI += "<option>" + i + "</option>";
  }
  $("#sortWeek").children("select").append(weekDropDownUI);
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

function generateRowNamelistUI(sl, name) {
  //   $("#namelistTable").empty();
  $("#namelistTable").append(`
        <tr>
											<td class="sl">${sl}</td>
											<th class="name_col z-[2]"><input type="text" value="${name}" /></th>
											<td class="weekAdded"><input type="text" placeholder="week" /></td>
											<td>
												<select class="zone">
													<option selected></option>
													<option>Office</option>
													<option>PG</option>
													<option>School</option>
													<option>College</option>
													<option>Others</option>
												</select>
											</td>
											<td class="city"><input type="text" placeholder="city" /></td>
											<td class="bl"> <input type="checkbox" class="checkbox" /></td>
											<td class="br"> <input type="checkbox" class="checkbox" /></td>
											<td class="bl"> <input type="checkbox" class="checkbox" /></td>
											<td class="weekInfo"><input type="text" placeholder="week" /></td>
											<td class="br">
												<select class="response responseInfo">
													<option selected></option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>C</option>
												</select>
											</td>
											<td class="bl"> <input type="checkbox" class="checkbox" /></td>
											<td class="weekReinfo"><input type="text" placeholder="week" /></td>
											<td class="br">
												<select class="response responseReinfo">
													<option selected></option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>C</option>
												</select>
											</td>
											<td> <input type="checkbox" class="checkbox" /></td>
											<td class="bl"> <input type="checkbox" class="checkbox" /></td>
											<td class="weekInvite"><input type="text" placeholder="week" /></td>
											<td class="br">
												<select class="responseInvite">
													<option selected></option>
													<option>Yes</option>
													<option>No</option>
												</select>
											</td>
											<td class="bl"> <input type="checkbox" class="checkbox" /></td>
											<td class="weekPlan"><input type="text" placeholder="week" /></td>
											<td class="br">
												<select class="planStatus">
													<option selected></option>
													<option>CIP</option>
													<option>AOS</option>
													<option>LA2</option>
													<option>LA</option>
													<option>MIA</option>
													<option>OOZ</option>
													<option>KIV</option>
													<option>Onboarded</option>
												</select>
											</td>
											<td class="remarks"><input type="text" placeholder="remarks" /></td>
											<th>
												<div class="flex">
													<div class=""><button
															class="btn btn-soft btn-sm btn-info p-0 h-7 w-7"><i
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
}

const names = [
  "John Doe",
  "Jane Smith",
  "Alice Johnson",
  "Bob Brown",
  "Charlie Davis",
  "Diana Prince",
  "Ethan Hunt",
  "Felicity Smoak",
  "George Clooney",
  "Hannah Montana",
];

for (let i = 0; i < names.length; i++) {
  generateRowNamelistUI(i + 1, names[i]);
}

generateSortWeekDropDownUI();

lucide.createIcons();
