function random() {

    //Budget Values
    var bAny=document.getElementById('bAny').checked;
    var b20=document.getElementById('b20').checked;
    var b50=document.getElementById('b50').checked;
    var b75=document.getElementById('b75').checked;
    var b100=document.getElementById('b100').checked;
    var b150=document.getElementById('b150').checked;
    var b200=document.getElementById('b200').checked;
    var b200p=document.getElementById('b200p').checked;
    const budget = [];

    //Weapon Type Values
    var wAny=document.getElementById('wAny').checked;
    var wAR=document.getElementById('wAR').checked;
    var wAC=document.getElementById('wAC').checked;
    var wLMG=document.getElementById('wLMG').checked;
    var wSMG=document.getElementById('wSMG').checked;
    var wS=document.getElementById('wS').checked;
    var wDMR=document.getElementById('wDMR').checked;
    var wSR=document.getElementById('wSR').checked;
    var wP=document.getElementById('wP').checked;
    var wM=document.getElementById('wM').checked;
    var wSp=document.getElementById('wSp').checked;
    const weapon = [];

    //Gear Type Values
    var gAny=document.getElementById('gAny').checked;
    var gPMC=document.getElementById('gPMC').checked;
    var gS=document.getElementById('gS').checked;
    var gBG=document.getElementById('gBG').checked;
    var gRR=document.getElementById('gRR').checked;
    var gC=document.getElementById('gC').checked;
    const gear = [];

    //Armor Type Values
    var aAnyN=document.getElementById('aAnyN').checked;
    var aAny=document.getElementById('aAny').checked;
    var aN=document.getElementById('aN').checked;
    var aBA=document.getElementById('aBA').checked;
    var aAR=document.getElementById('aAR').checked;
    const armor = [];

    //Throwable Weapons Values
    var tAnyN=document.getElementById('tAnyN').checked;
    var tAny=document.getElementById('tAny').checked;
    var tN=document.getElementById('tN').checked;
    var tF=document.getElementById('tF').checked;
    var tSm=document.getElementById('tSm').checked;
    var tSt=document.getElementById('tSt').checked;
    const throwable = [];

    //Item Source Values
    var sAny=document.getElementById('sAny').checked;
    var sT=document.getElementById('sT').checked;
    var sFM=document.getElementById('sFM').checked;
    var sS=document.getElementById('sS').checked;
    const source = [];

    //Secure Container Values
    var cAny=document.getElementById('cAny').checked;
    var cN=document.getElementById('cN').checked;
    var cSO=document.getElementById('cSO').checked;
    var cBO=document.getElementById('cBO').checked;
    const container = [];

    //Map Values
    var mAny=document.getElementById('mAny').checked;
    var mLa=document.getElementById('mLa').checked;
    var mI=document.getElementById('mI').checked;
    var mC=document.getElementById('mC').checked;
    var mF=document.getElementById('mF').checked;
    var mW=document.getElementById('mW').checked;
    var mR=document.getElementById('mR').checked;
    var mLi=document.getElementById('mLi').checked;
    var mS=document.getElementById('mS').checked;
    const map = [];

    //Time Values
    var tiAny=document.getElementById('tiAny').checked;
    var tiD=document.getElementById('tiD').checked;
    var tiN=document.getElementById('tiN').checked;
    const time = [];

    //Budget Randomizer
    if (bAny==true) {
        budget.push("Any budget");
    };
    if (b20==true) {
        budget.push("20k budget");
    };
    if (b50==true) {
        budget.push("50k budget");
    };
    if (b75==true) {
        budget.push("75k budget");
    };
    if (b100==true) {
        budget.push("100k budget");
    };
    if (b150==true) {
        budget.push("150k budget");
    };
    if (b200==true) {
        budget.push("200k budget");
    };
    if (b200p==true) {
        budget.push("Above 200k budget");
    };
    console.log(budget);
    const budgetRandom = Math.floor(Math.random() * budget.length);
    console.log(budgetRandom, budget[budgetRandom]);
    var budgetOutput = (budgetRandom, budget[budgetRandom]);

    //Weapon Type Randomizer
    if (wAny==true) {
        weapon.push("Any weapon type");
    };
    if (wAR==true) {
        weapon.push("Only Assault Rifles");
    };
    if (wAC==true) {
        weapon.push("Only Assault Carbines");
    };
    if (wLMG==true) {
        weapon.push("Only Light Machine Guns");
    };
    if (wSMG==true) {
        weapon.push("Only Submachine Guns");
    };
    if (wS==true) {
        weapon.push("Only Shotguns");
    };
    if (wDMR==true) {
        weapon.push("Only Designated Marksman Rifles");
    };
    if (wSR==true) {
        weapon.push("Only Sniper Rifles");
    };
    if (wP==true) {
        weapon.push("Only Pistols");
    };
    if (wM==true) {
        weapon.push("Only Melee weapons");
    };
    if (wSp==true) {
        weapon.push("Only Special weapons");
    };
    console.log(weapon);
    const weaponRandom = Math.floor(Math.random() * weapon.length);
    console.log(weaponRandom, weapon[weaponRandom]);
    var weaponOutput = (weaponRandom, weapon[weaponRandom]);

    //Gear Type Randomizer
    if (gAny==true) {
        gear.push("Any type of gear");
    };
    if (gPMC==true) {
        gear.push("'PMC' like gear");
    };
    if (gS==true) {
        gear.push("'Scav' like gear");
    };
    if (gBG==true) {
        gear.push("'Boss/Guard' like gear");
    };
    if (gRR==true) {
        gear.push("'Rogue/Raider' like gear");
    };
    if (gC==true) {
        gear.push("Gear that can be found in Caches");
    };
    console.log(gear);
    const gearRandom = Math.floor(Math.random() * gear.length);
    console.log(gearRandom, gear[gearRandom]);
    var gearOutput = (gearRandom, gear[gearRandom]);

    //Armor Type Randomizer
    if (aAnyN==true) {
        armor.push("Any armor type (including none)");
    };
    if (aAny==true) {
        armor.push("Any armor type");
    };
    if (aN==true) {
        armor.push("No armor");
    };
    if (aBA==true) {
        armor.push("Body Armor");
    };
    if (aAR==true) {
        armor.push("Armored Rig");
    };
    console.log(armor);
    const armorRandom = Math.floor(Math.random() * armor.length);
    console.log(armorRandom, armor[armorRandom]);
    var armorOutput = (armorRandom, armor[armorRandom]);

    //Throwable Weapons Randomizer
    if (tAnyN==true) {
        throwable.push("Any Throwable Weapons (including none)");
    };
    if (tAny==true) {
        throwable.push("Any Throwable Weapons");
    };
    if (tN==true) {
        throwable.push("No Throwable Weapons");
    };
    if (tF==true) {
        throwable.push("Only Fragmentation Grenades");
    };
    if (tSm==true) {
        throwable.push("Only Smoke Grenades");
    };
    if (tSt==true) {
        throwable.push("Only Stun Grenades");
    };
    console.log(throwable);
    const throwableRandom = Math.floor(Math.random() * throwable.length);
    console.log(throwableRandom, throwable[throwableRandom]);
    var throwableOutput = (throwableRandom, throwable[throwableRandom]);

    //Item Source Randomizer
    if (sAny==true) {
        source.push("Any item source");
    };
    if (sT==true) {
        source.push("Traders only");
    };
    if (sFM==true) {
        source.push("Flea market only");
    };
    if (sS==true) {
        source.push("Stash only (if possible)");
    };
    console.log(source);
    const sourceRandom = Math.floor(Math.random() * source.length);
    console.log(sourceRandom, source[sourceRandom]);
    var sourceOutput = (sourceRandom, source[sourceRandom]);

    //Secure Container Randomizer
    if (cAny==true) {
        container.push("Any Secure Container");
    };
    if (cN==true) {
        container.push("No Secure Container");
    };
    if (cSO==true) {
        container.push("Smallest Secure Container Owned");
    };
    if (cBO==true) {
        container.push("Biggest Secure Container Owned");
    };
    console.log(container);
    const containerRandom = Math.floor(Math.random() * container.length);
    console.log(containerRandom, container[containerRandom]);
    var containerOutput = (containerRandom, container[containerRandom]);

    //Map Randomizer
    if (mAny==true) {
        map.push("Any map");
    };
    if (mLa==true) {
        map.push("The Lab");
    };
    if (mI==true) {
        map.push("Interchange");
    };
    if (mC==true) {
        map.push("Customs");
    };
    if (mF==true) {
        map.push("Factory");
    };
    if (mW==true) {
        map.push("Woods");
    };
    if (mR==true) {
        map.push("Reserve");
    };
    if (mLi==true) {
        map.push("Lighthouse");
    };
    if (mS==true) {
        map.push("Shoreline");
    };
    console.log(map);
    const mapRandom = Math.floor(Math.random() * map.length);
    console.log(mapRandom, map[mapRandom]);
    var mapOutput = (mapRandom, map[mapRandom]);

    //Time Randomizer
    if (tiAny==true) {
        time.push("Any time");
    };
    if (tiD==true) {
        time.push("Daytime");
    };
    if (tiN==true) {
        time.push("Nighttime");
    };
    console.log(time);
    const timeRandom = Math.floor(Math.random() * time.length);
    console.log(timeRandom, time[timeRandom]);
    var timeOutput = (timeRandom, time[timeRandom]);

    //Undefined replacement
    if (budgetOutput==undefined) {
        budgetOutput=("");
    };
    if (weaponOutput==undefined) {
        weaponOutput=("");
    };
    if (gearOutput==undefined) {
        gearOutput=("");
    };
    if (armorOutput==undefined) {
        armorOutput=("");
    };
    if (throwableOutput==undefined) {
        throwableOutput=("");
    };
    if (sourceOutput==undefined) {
        sourceOutput=("");
    };
    if (containerOutput==undefined) {
        containerOutput=("");
    };
    if (mapOutput==undefined) {
        mapOutput=("");
    };
    if (timeOutput==undefined) {
        timeOutput=("");
    };

    //Output
    document.getElementById('budgetOutput').innerHTML=budgetOutput;
    document.getElementById('weaponOutput').innerHTML=weaponOutput;
    document.getElementById('gearOutput').innerHTML=gearOutput;
    document.getElementById('armorOutput').innerHTML=armorOutput;
    document.getElementById('throwableOutput').innerHTML=throwableOutput;
    document.getElementById('sourceOutput').innerHTML=sourceOutput;
    document.getElementById('containerOutput').innerHTML=containerOutput;
    document.getElementById('mapOutput').innerHTML=mapOutput;
    document.getElementById('timeOutput').innerHTML=timeOutput;
};

//'Check all checkboxes' Checkbox
function toggle(source) {
    checkboxes = document.getElementsByName('checkall');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}