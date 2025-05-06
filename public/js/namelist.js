function generateWeekDropDownUI() {
  $(".week").each(function () {
    var weekDropDownUI = "";
    for (var i = 1; i <= 53; i++) {
      weekDropDownUI += "<option>" + i + "</option>";
    }
    $(this).append(weekDropDownUI);
  });

  console.log("week done");
}

function generateResponseDropDownUI() {
  const responses = ["A", "B", "C"];

  $(".response").each(function () {
    var responseDropDownUI = "";
    for (var i = 0; i < 3; i++) {
      responseDropDownUI += "<option>" + responses[i] + "</option>";
    }
    $(this).append(responseDropDownUI);
  });
  console.log("response done");
}

function generateRowNamelistUI(sl,name) {
//   $("#namelistTable").empty();
  $("#namelistTable").append(`
        <tr>
											<td class="sl">${sl}</td>
											<th class="name_col z-[2]"><input type="text" value="${name}" /></th>
											<td>
												<select class="week weekAdded">
													<option selected></option>
												</select>
											</td>
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
											<td>
												<select class="week weekInfo">
													<option selected></option>
												</select>
											</td>
											<td class="br">
												<select class="response responseInfo">
													<option selected></option>
												</select>
											</td>
											<td class="bl"> <input type="checkbox" class="checkbox" /></td>
											<td>
												<select class="week weekReinfo">
													<option selected></option>
												</select>
											</td>
											<td class="br">
												<select class="response responseReinfo">
													<option selected></option>
												</select>
											</td>
											<td> <input type="checkbox" class="checkbox" /></td>
											<td class="bl"> <input type="checkbox" class="checkbox" /></td>
											<td>
												<select class="week weekInvite">
													<option selected></option>
												</select>
											</td>
											<td class="br">
												<select class="responseInvite">
													<option selected></option>
													<option>Yes</option>
													<option>No</option>
												</select>
											</td>
											<td class="bl"> <input type="checkbox" class="checkbox" /></td>
											<td>
												<select class="week weekPlan">
													<option selected></option>
												</select>
											</td>
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
											<td>
												<div class="flex">
													<div class=""><button
															class="btn btn-soft btn-sm btn-error p-0 h-7 w-7"><i
																class="w-5 h-5" data-lucide="trash-2"></i></button>
													</div>
													<!-- <div class="ml-1"><button class="btn btn-sm">hide</button></div> -->
												</div>


											</td>
										</tr>
        
        `);

}

const names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis", "Diana Prince", "Ethan Hunt", "Felicity Smoak", "George Clooney", "Hannah Montana"];

for(let i = 0; i < names.length; i++) {
  generateRowNamelistUI(i + 1, names[i]);
}

generateWeekDropDownUI();
generateResponseDropDownUI();

lucide.createIcons();