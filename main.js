// TEST LOL 1
var type = "dagger";
var skillLevel = 0;
var passiveType = "test";
var passiveTypeCost = "test";
var passive = 0.0;
var passiveCount = 0;
var interval = 1000.0;
var hasteCount = 0;
var passiveTotal = 0;
var passiveHaste = 0.0; //Start at 1000?
var typehaste = "";
var typecheck = "";
var dualWieldUnlock = 0;
var dualWieldFirst = "";
var dualWieldSecond = "";
var dualWieldActive = 0;
var characterHP = 0.0;
var characterMP = 0.0;
var characterSTR = 0.0;
var characterDEX = 0.0;
var characterVIT = 0.0;
var characterAGI = 0.0;
var characterINT = 0.0;
var characterMND = 0.0;
var characterCHA = 0.0;

var select = document.getElementById("daggerSelect"); 
var daggerList =  [{id:1, name:'Beestinger', delay: 1234}, {id:2, name:'Hornetneedle', delay: 2345}];
var characterHPScoreList = [
				 {id:1, Scale:9, Base: 19, Bonus: 1},
				 {id:2, Scale:8, Base: 17, Bonus: 1}, 
				 {id:3, Scale:7, Base: 16, Bonus: 1}, 
				 {id:4, Scale:6, Base: 14, Bonus: 0}, 
				 {id:5, Scale:5, Base: 13, Bonus: 0}, 
				 {id:6, Scale:4, Base: 11, Bonus: 0}, 
				 {id:7, Scale:3, Base: 10, Bonus: 0}];

var characterMPScoreList = [
				 {id:1, Scale:6, Base: 16},
				 {id:2, Scale:5, Base: 14}, 
				 {id:3, Scale:4, Base: 12}, 
				 {id:4, Scale:3, Base: 10}, 
				 {id:5, Scale:2, Base: 8}, 
				 {id:6, Scale:1, Base: 6}, 
				 {id:7, Scale:0.5, Base: 4}];

var characterStatScoreList = [
				 {id:1, Scale:0.5, Base: 5},
				 {id:2, Scale:0.45, Base: 4}, 
				 {id:3, Scale:0.4, Base: 4}, 
				 {id:4, Scale:0.34, Base: 3}, 
				 {id:5, Scale:0.3, Base: 3}, 
				 {id:6, Scale:0.25, Base: 2}, 
				 {id:7, Scale:0.2, Base: 2}];

for(var i = 0; i < daggerList.length; i++) {
    var opt = daggerList[i].name;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
};

function skillClick(skill){
    var type = skill;
    var typecheck = skill+"Check";
	var check = document.getElementById(typecheck).checked;
	var dw = document.getElementById('isDualWielding').innerHTML;
	
	if (!check && dw == "true"){
		uncheckAll();
		dualWieldActive = 0;
	}
	skillLevel =  parseInt(document.getElementById(skill).innerHTML) +1;
	document.getElementById(skill).innerHTML = skillLevel;
	
	if(dw == "false"){
		uncheckAll();
	}		
	
	document.getElementById(typecheck).checked = true;
	resetTime(skill);
	
	//typehaste = skill + "Haste";
	//passiveHaste = parseFloat(document.getElementById(typehaste).innerHTML);
	//interval = 1000 * (1-passiveHaste);
	//clearInterval(game);
	
	
	//game = setInterval(function(){
	//passiveClick(type);
	//getTotalPoints();
	//document.getElementById('gameStatus').innerHTML = interval;
	//}, interval);
};

function passiveClick(skill){

    passiveType = "passive"+skill;
    typehaste = skill + "Haste";
    passiveCount = parseInt(document.getElementById(passiveType).innerHTML);
    //skillLevel =  parseInt(document.getElementById(skill).innerHTML) +passiveCount;
    if (passiveCount > 0) {skillLevel =  parseInt(document.getElementById(skill).innerHTML) +1;};
    document.getElementById(skill).innerHTML = skillLevel;
};

function autoSkill(skill){
    passiveType = "passive"+skill;
    passiveTypeCost = "passive"+skill+"Cost";
    passive = parseFloat(document.getElementById(passiveType).innerHTML);
	characterPoints = parseInt(document.getElementById('characterPoints').innerHTML);
    var autoCost = Math.floor(10 * Math.pow(1.1,passive));     //works out the cost of this cursor
    
    skillLevel = parseInt(document.getElementById(skill).innerHTML);
    if(skillLevel >= autoCost){                                   		//checks that the player can afford the cursor
        passive += 1; 													//Increment total passive points for the given weapon
		characterPoints += 1;											//Increment total character points.
    	skillLevel = skillLevel - autoCost;                          	//deducts the cost of the upgrade from the current weapons skill points.
        document.getElementById(skill).innerHTML = skillLevel;  		//updates the number of skill points
        document.getElementById(passiveType).innerHTML = passive;  		//updates the number of passive points
		document.getElementById('characterPoints').innerHTML = characterPoints;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,passive));       //works out the cost of the next cursor
    document.getElementById(passiveTypeCost).innerHTML = nextCost;  //updates the cursor cost for the user
};

function save(){

	var save = {
	DaggerSkill: parseInt(document.getElementById('dagger').innerHTML),
	DaggerPassiveSkill:  parseInt(document.getElementById('passivedagger').innerHTML),
        Type: type
	};

	localStorage.setItem("save",JSON.stringify(save));
	document.getElementById('gameStatus').innerHTML = "saved";
};

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.DaggerSkill !== "undefined") skillLevel = savegame.DaggerSkill;
	if (typeof savegame.DaggerPassiveSkill !== "undefined") passive = savegame.DaggerPassiveSkill;
	if (typeof savegame.Type !== "undefined") type = savegame.Type;
    document.getElementById('dagger').innerHTML = skillLevel;  //updates the number of cookies for the user
    document.getElementById('passivedagger').innerHTML = passive;  //updates the number of cursors for the user
	document.getElementById('gameStatus').innerHTML = "loaded";
};

function getTotalPoints(){
	passiveTotal = 0;
	passiveTotal = passiveTotal + parseInt(document.getElementById('passivedagger').innerHTML);
	passiveTotal = passiveTotal + parseInt(document.getElementById('passivesword').innerHTML);
	//document.getElementById('passivePoints').innerHTML = passiveTotal;
};

function buyHaste(skill){
    typehaste = skill + "Haste";
    passiveHaste = parseFloat(document.getElementById(typehaste).innerHTML);
	hasteLevel = parseInt(document.getElementById(skill + "HasteLevel").innerHTML);
	availablePassivePoints = document.getElementById("passive" + skill).innerHTML;
	
	if(hasteLevel == 0){
		upgradeCost = 10;
	}
	else {
		upgradeCost = Math.floor(10 * Math.pow(15, hasteLevel));
	}
	
	if (availablePassivePoints >= upgradeCost){
		passiveHaste = passiveHaste * 0.9
		document.getElementById(typehaste).innerHTML = passiveHaste;
		document.getElementById(skill + "HasteLevel").innerHTML = parseInt(hasteLevel + 1);
		document.getElementById("passive" + skill).innerHTML = availablePassivePoints - upgradeCost;
	}
	else{
		window.alert("Not enought passive points.");
	}
	//Probably not necessary once we implement the below calculation
	//	if (passiveHaste == 0) {passiveHaste = 0.1;}
	//	else {passiveHaste = passiveHaste * 1.1;};
	
	//Update haste to always be 90% of the current haste value.
	
	
	
    //passiveHaste = passiveHaste + 0.1;
	
	resetTime(skill);
	//interval = 1000 * (1-passiveHaste);
	//clearInterval(game);
	
	
	//game = setInterval(function(){
	//passiveClick(type);
	//getTotalPoints();
	//document.getElementById('gameStatus').innerHTML = interval;
	//}, interval);
};

function uncheckAll(){ 
      var w = document.getElementsByTagName('input'); 
      for(var i = 0; i < w.length; i++){ 
        if(w[i].type=='checkbox'){ 
          w[i].checked = false; 
        }
      }
  } 
  
function enableAll(){ 
      var w = document.getElementsByTagName('input'); 
      for(var i = 0; i < w.length; i++){ 
        if(w[i].type=='checkbox'){ 
          w[i].readonly = false;
          w[i].disabled = false; 
        }
      }
  }

function disableAll(){ 
      var w = document.getElementsByTagName('input'); 
      for(var i = 0; i < w.length; i++){ 
        if(w[i].type=='checkbox'){ 
          w[i].readonly = true;
          w[i].disabled = true; 
        }
      }
  }

function dualWield(){
	uncheckAll();
	enableAll();
}

function SetDualWield(){
	var counter = 0;
	var skills=[];
	var skillnames = [];
	var w = document.getElementsByTagName('input'); 
      for(var i = 0; i < w.length; i++){ 
        if(w[i].type=='checkbox' && w[i].checked == true){ 
          counter = counter +1;
          skills.push(w[i].id);
        }
      }
	if(counter != 2){
		document.getElementById('gameStatus').innerHTML = "You Must Choose 2 Weapons!";
	}
	else if (counter == 2) {
		disableAll();
		
		
		var skillist = skills.length;
		for (var i = 0; i < skillist; i++) {
    		var skill = skills[i].substring(0, skills[i].length-5);
    		skillnames.push(skill);
    		
		}
		
		dualWieldFirst = skillnames[0];
		dualWieldSecond = skillnames[1];
		
		dualWieldUnlock = 1;
		dualWieldActive = 1;
		resetTime(dualWieldFirst);
		document.getElementById('isDualWielding').innerHTML = true;
		
	}
	
}

function resetTime(skill){
	typehaste = skill + "Haste";
    passiveHaste = parseFloat(document.getElementById(typehaste).innerHTML);  //Maybe comment this in.
    interval = passiveHaste;
    //interval = 1000 * (1-passiveHaste);  //Will need to be updated if passiveHaste is used to calculate each weapons' haste value
	clearInterval(game);
	
	//document.getElementById('gameStatus').innerHTML = dualWieldUnlock;
	if(dualWieldUnlock == 0 || dualWieldActive == 0) {
		game = setInterval(function(){
		passiveClick(skill);
		getTotalPoints();
		document.getElementById('gameStatus').innerHTML = typehaste;
		}, interval);
	}
	else if (dualWieldUnlock == 1  && dualWieldActive == 1 ) {
		var dualWieldHaste;
		dualWieldHaste = parseFloat(document.getElementById(dualWieldFirst+"Haste").innerHTML);
		dualWieldHaste = dualWieldHaste + parseFloat(document.getElementById(dualWieldSecond+"Haste").innerHTML);
		dualWieldHaste = (dualWieldHaste / 2) * .9;
		game = setInterval(function(){
		//passiveClick(dualWieldFirst);
		//passiveClick(dualWieldSecond);
		dualWieldClick(dualWieldFirst,dualWieldSecond);
		getTotalPoints();
		document.getElementById('gameStatus').innerHTML = "INSIDE THE DUAL WIELD SHIT" + dualWieldHaste;
		}, dualWieldHaste);

	}
}

function dualWieldClick(firstskill, secondskill){

	var firstskillLevel;
	var secondskillLevel;
    firstpassiveType = "passive"+firstskill;
    firsttypehaste = firstskill + "Haste";
    firstpassiveCount = parseInt(document.getElementById(firstpassiveType).innerHTML);
    //skillLevel =  parseInt(document.getElementById(skill).innerHTML) +passiveCount;
	if (firstpassiveCount > 0) {
		firstskillLevel =  parseInt(document.getElementById(firstskill).innerHTML) +1;
	};
    document.getElementById(firstskill).innerHTML = firstskillLevel;    
    secondpassiveType = "passive"+secondskill;
    secondtypehaste = secondskill + "Haste";
    secondpassiveCount = parseInt(document.getElementById(secondpassiveType).innerHTML);
    //skillLevel =  parseInt(document.getElementById(skill).innerHTML) +passiveCount;
    if (secondpassiveCount > 0) {secondskillLevel =  parseInt(document.getElementById(secondskill).innerHTML) +1;};
    document.getElementById(secondskill).innerHTML = secondskillLevel;
};
//window.setInterval(function(){
//	
//	passiveClick(type);
//        getTotalPoints();
//	document.getElementById('gameStatus').innerHTML = interval;
//	
//}, interval);

function itemChange(item){
	var itemList = item + "List";
	var itemSelect = item + "Select";
	for(var i = 0; i < this[itemList].length; i++) {
    	var opt = this[itemList][i].name;
    		if (opt == this[itemList][this[itemSelect].selectedIndex].name) {
    			itemhaste = item + "Haste";
    			document.getElementById(itemhaste).innerHTML = this[itemList][i].delay;
    			recalculateHaste(item);
    		}
	};
}

function recalculateHaste(skill){
	typehaste = skill + "Haste";
    passiveHaste = parseFloat(document.getElementById(typehaste).innerHTML);
	hasteLevel = parseInt(document.getElementById(skill + "HasteLevel").innerHTML);
	
	for (var i = 0; i < hasteLevel; i++) {
    		passiveHaste = passiveHaste * .9;    		
		}
		document.getElementById(typehaste).innerHTML = passiveHaste;
	resetTime(skill);
}

function spendCharacterPoints(){
	var characterPoints = parseInt(document.getElementById('characterPoints').innerHTML);
	var characterLevel = parseInt(document.getElementById('characterLevel').innerHTML);
	var cost = parseInt(document.getElementById('levelUpCost').innerHTML);
	if (characterPoints >= cost){
		document.getElementById('characterPoints').innerHTML = characterPoints - cost;
		document.getElementById('characterLevel').innerHTML = characterLevel + 1;
		var nextCost = Math.floor(5 * Math.pow(2, characterLevel));
		document.getElementById('levelUpCost').innerHTML = nextCost;
		
		var characterHP = parseFloat(document.getElementById('characterHPHidden').innerHTML);
		var characterMP = parseFloat(document.getElementById('characterMPHidden').innerHTML);
		var characterSTR = parseFloat(document.getElementById('characterSTRHidden').innerHTML);
		var characterDEX = parseFloat(document.getElementById('characterDEXHidden').innerHTML);
		var characterVIT = parseFloat(document.getElementById('characterVITHidden').innerHTML);
		var characterAGI = parseFloat(document.getElementById('characterAGIHidden').innerHTML);
		var characterINT = parseFloat(document.getElementById('characterINTHidden').innerHTML);
		var characterMND = parseFloat(document.getElementById('characterMNDHidden').innerHTML);
		var characterCHA = parseFloat(document.getElementById('characterCHAHidden').innerHTML);
		
		var characterHP = characterHP + characterHPScoreList[3].Scale;
		var characterMP = characterMP + characterMPScoreList[3].Scale;
		var characterSTR = characterSTR + characterStatScoreList[3].Scale;
		var characterDEX = characterDEX + characterStatScoreList[3].Scale;
		var characterVIT = characterVIT + characterStatScoreList[3].Scale;
		var characterAGI = characterAGI + characterStatScoreList[3].Scale;
		var characterINT = characterINT + characterStatScoreList[3].Scale;
		var characterMND = characterMND + characterStatScoreList[3].Scale;
		var characterCHA = characterCHA + characterStatScoreList[3].Scale;
		
		document.getElementById('characterHPHidden').innerHTML = characterHP;
		document.getElementById('characterMPHidden').innerHTML = characterMP;
		document.getElementById('characterSTRHidden').innerHTML = characterSTR.toFixed(2);
		document.getElementById('characterDEXHidden').innerHTML = characterDEX;
		document.getElementById('characterVITHidden').innerHTML = characterVIT;
		document.getElementById('characterAGIHidden').innerHTML = characterAGI;
		document.getElementById('characterINTHidden').innerHTML = characterINT;
		document.getElementById('characterMNDHidden').innerHTML = characterMND;
		document.getElementById('characterCHAHidden').innerHTML = characterCHA;
		
		var characterHP = Math.floor(characterHP);
		var characterMP = Math.floor(characterMP);
		var characterSTR = Math.floor(characterSTR);
		var characterDEX = Math.floor(characterDEX);
		var characterVIT = Math.floor(characterVIT);
		var characterAGI = Math.floor(characterAGI);
		var characterINT = Math.floor(characterINT);
		var characterMND = Math.floor(characterMND);
		var characterCHA = Math.floor(characterCHA);
		
		document.getElementById('characterHP').innerHTML = characterHP;
		document.getElementById('characterMP').innerHTML = characterMP;
		document.getElementById('characterSTR').innerHTML = characterSTR;
		document.getElementById('characterDEX').innerHTML = characterDEX;
		document.getElementById('characterVIT').innerHTML = characterVIT;
		document.getElementById('characterAGI').innerHTML = characterAGI;
		document.getElementById('characterINT').innerHTML = characterINT;
		document.getElementById('characterMND').innerHTML = characterMND;
		document.getElementById('characterCHA').innerHTML = characterCHA;
		
	}
	else {
		window.alert("Not enough character points to level up.")
	}	
}

var game = setInterval(function(){
passiveClick(type);
getTotalPoints();
itemChange(type);
document.getElementById('gameStatus').innerHTML = interval;
}, interval);