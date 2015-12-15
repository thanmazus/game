// KYLE TEST LOL
var type = "dagger";
var skillLevel = 0;
var passiveType = "test";
var passiveTypeCost = "test";
var passive = 0;
var passiveCount = 0;
var interval = 1000.0;
var hasteCount = 0;
var passiveTotal = 0;
var passiveHaste = 1000.0; //Start at 1000?
var typehaste = "";
var typecheck = "";
var dualWieldUnlock = 0;
var dualWieldFirst = "";
var dualWieldSecond = "";

function skillClick(skill){
    type = skill;
    typecheck = skill+"Check";
    skillLevel =  parseInt(document.getElementById(skill).innerHTML) +1;
    document.getElementById(skill).innerHTML = skillLevel;
    UncheckAll();
    document.getElementById(typecheck).checked = true;
    ResetTimer(skill);
    
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
    passive = parseInt(document.getElementById(passiveType).innerHTML)
    var autoCost = Math.floor(10 * Math.pow(1.1,passive));     //works out the cost of this cursor
    
    skillLevel = parseInt(document.getElementById(skill).innerHTML);
    //document.getElementById(skill).innerHTML = passiveType;
    if(skillLevel >= autoCost){                                   //checks that the player can afford the cursor
        passive = passive + 1;                                   //increases number of cursors
        document.getElementById(skill).innerHTML = passive;
    	skillLevel = skillLevel - autoCost;                          //removes the cookies spent
	document.getElementById(skill).innerHTML = passiveType;
        document.getElementById(skill).innerHTML = skillLevel;  //updates the number of cursors for the user
        document.getElementById(passiveType).innerHTML = passive;  //updates the number of cookies for the user
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
	document.getElementById('passivePoints').innerHTML = passiveTotal;
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
	passiveHaste = passiveHaste * 0.9
	
	
    //passiveHaste = passiveHaste + 0.1;
	
	ResetTimer(skill);
	//interval = 1000 * (1-passiveHaste);
	//clearInterval(game);
	
	
	//game = setInterval(function(){
	//passiveClick(type);
	//getTotalPoints();
	//document.getElementById('gameStatus').innerHTML = interval;
	//}, interval);
};

function UncheckAll(){ 
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
	UncheckAll();
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
		ResetTimer(dualWieldFirst);
		
	}
	
}

function ResetTimer(skill){
	typehaste = skill + "Haste";
    passiveHaste = parseFloat(document.getElementById(typehaste).innerHTML);  //Maybe comment this in.
    interval = passiveHaste;
    //interval = 1000 * (1-passiveHaste);  //Will need to be updated if passiveHaste is used to calculate each weapons' haste value
	clearInterval(game);
	
	//document.getElementById('gameStatus').innerHTML = dualWieldUnlock;
	if(dualWieldUnlock == 0) {
		game = setInterval(function(){
		passiveClick(type);
		getTotalPoints();
		document.getElementById('gameStatus').innerHTML = dualWieldUnlock;
		}, interval);
	}
	else if (dualWieldUnlock == 1) {
		document.getElementById('gameStatus').innerHTML = "FART";
		game = setInterval(function(){
		//passiveClick(dualWieldFirst);
		//passiveClick(dualWieldSecond);
		dualWieldClick(dualWieldFirst,dualWieldSecond);
		getTotalPoints();
		document.getElementById('gameStatus').innerHTML = "INSIDE THE DUAL WIELD SHIT";
		}, interval);

	}
}

function dualWieldClick(firstskill, secondskill){

    firstpassiveType = "passive"+firstskill;
    firsttypehaste = firstskill + "Haste";
    firstpassiveCount = parseInt(document.getElementById(firstpassiveType).innerHTML);
    //skillLevel =  parseInt(document.getElementById(skill).innerHTML) +passiveCount;
	if (firstpassiveCount > 0) {firstskillLevel =  parseInt(document.getElementById(firstskill).innerHTML) +1;};
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

var game = setInterval(function(){
passiveClick(type);
getTotalPoints();
document.getElementById('gameStatus').innerHTML = interval;
}, interval);