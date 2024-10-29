'use strict';
//----------------------------------FUNCTIONS---------------------------------
function describeCountry(country,population,capitalCity){
    const countryDescription=`${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return countryDescription;
}
const country1=describeCountry('India',100, 'Delhi');
const country2=describeCountry('Pakistan',20,'Islamabad');
const country3=describeCountry('Bangladesh',50,'Daka');
console.log(country1);
console.log(country2);
console.log(country3);
//---------------------------------FUNCTION DECLARATIONS VS FUNCTION EXPRESSIONS-------------------
const worldPopulation=7900;
function percentageOfWorld1(countryName,population){
const description=`${countryName} has ${population} million people, so its about ${(population/worldPopulation)*100}% of the world population`
return description;
}
const countryPercent1=percentageOfWorld1('China',1441);
const countryPercent2=percentageOfWorld1('India',3255);
const countryPercent3=percentageOfWorld1('Pakistan',2500);
console.log(countryPercent1);
console.log(countryPercent2);
console.log(countryPercent3);
const percentageOfWorld2=function (countryName,population){
    const description=`${countryName} has ${population} million people, so its about ${(population/worldPopulation)*100}% of the world population`
return description;
}
const countryPercent4=percentageOfWorld1('Finland',1641);
const countryPercent5=percentageOfWorld1('Russia',877);
const countryPercent6=percentageOfWorld1('Kazakistan',699);
console.log(countryPercent4);
console.log(countryPercent5);
console.log(countryPercent6);
//---------------------------------ARROW FUNCTION----------------------------
const percentageOfWorld3=(countryName,population)=>{
    const description=`${countryName} has ${population} million people, so its about ${(population/worldPopulation)*100}% of the world population`
return description;
}
const countryPercent7=percentageOfWorld1('Germany',442);
const countryPercent8=percentageOfWorld1('Ukraine',77);
const countryPercent9=percentageOfWorld1('Iran',69);
console.log(countryPercent7);
console.log(countryPercent8);
console.log(countryPercent9);
//-------------------------------FUNCTION CALLING OTHER FUNCTIONS--------------------------------------
const describePopulation=(country,population)=>{
    const getPercentageOfCountry=percentageOfWorld1(country,population);
    console.log(getPercentageOfCountry);
}
describePopulation('China',1441);
describePopulation('Turkey',223);
describePopulation('Uganda',554);
//---------------------------------------CODING CHALLENGE #1-------------------------------------------
const calcAverage=(score1,score2,score3)=>{
    return (score1+score2+score3)/3;
}
let scoreDolphins=calcAverage(85,54,41);
let scoreKoalas=calcAverage(23,34,27);
const checkWinner=(avgDolphins,avgKoalas)=>{
    if(avgDolphins>=2*avgKoalas){
console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    }
    else if(avgDolphins<=2*avgKoalas){
        console.log(`Koalas win (${avgDolphins} vs ${avgKoalas})`)
    }
    else{
console.log('No team wins....')
    }
}
checkWinner(scoreDolphins,scoreKoalas);
//-----------------------INTRODUCTION TO ARRAY-------------------------------
const populationArray=[1441,223,554,887];
if(populationArray.length===4){
    console.log('The array has 4 elements')
}
const percentageArray=[percentageOfWorld1('China',populationArray[0]),percentageOfWorld1('Turkey',populationArray[1])]
console.log(percentageArray);
//---------------------------CODING CHALLENGE #2---------------------
const calcTip=(billValue)=>{
 const tip=billValue>=50 && billValue <=300 ? 0.15*billValue:0.2*billValue;
 return tip;
}
console.log(calcTip(100));
const billsArray=[125,555,44];
const tipsArray=[calcTip(billsArray[0]),calcTip(billsArray[1]),calcTip(billsArray[billsArray.length-1])];
console.log(tipsArray);
//BONUS
const totalsArray=[billsArray[0]+tipsArray[0],billsArray[1]+tipsArray[1],billsArray[2]+tipsArray[2]]
console.log(totalsArray);
//-------------------------------------BASIC ARRAY METHODS-----------------------------------------
const neighbouringCountries=['Pakistan','Bangladesh','Nepal','China','Bhutan'];
neighbouringCountries.push('Utopia');
console.log(neighbouringCountries);
neighbouringCountries.pop('Utopia')
console.log(neighbouringCountries);
if(!neighbouringCountries.includes('Germany')){
console.log('Probably not a central european country :D');
}
let getCountryIndex=neighbouringCountries.indexOf('China');
neighbouringCountries[getCountryIndex]='Republic of China';
console.log(neighbouringCountries);
//----------------------------INTRODUCNTION TO OBJECTS------------------------------------
const mycountry={
    country:'India',
    capital:'New Delhi',
    language:'Hindi',
    population:1000,
    neighbours:['China','Pakistan','Nepal','Bhutan'],
    describe: function(){
        const description=`${this.country} has ${this.population} million people, so its about ${(this.population/worldPopulation)*100}% of the world population`
return description;
    },
    checkIsland:function(){
        // if(this.neighbours.length()){
        //     this.isIsland=true;
        // }
        // else{
        //     this.isIsland=false;
        // }if(this.neighbours.length()){
        //     this.isIsland=true;
        // }
        // else{
        //     this.isIsland=false;
        // }
        //using terninary operator
        this.neighbours.length?this.isIsland=true:this.isIsland=false;
    }
}
console.log(mycountry);
//-------------------------------DOT VS BRACKET NOTATION-----------------------------------
console.log(`${mycountry.country} has ${mycountry.population} million ${mycountry.language}-speaking people, ${mycountry.neighbours.length} neighbouring countries and a capital called ${mycountry.capital}.`);
mycountry.population=mycountry.population+2000;
console.log(mycountry);
mycountry['population']=mycountry['population']-1000;
console.log(mycountry);
console.log(mycountry['neighbours']);
mycountry['Government Type']='Democratic Government';
console.log(mycountry);
//-------------------------------------OBJECT METHODS--------------------------------------------
console.log(mycountry.describe());
mycountry.checkIsland();
console.log(mycountry);
//------------------------------------CODING CHALLENGE #3-------------------------------------
const mark={
    fullName:'Mark Miller',
    mass:78,
    height:1.69,
    calcBMI:function(){
this.bmi=this.mass/(this.height**2);
return this.bmi;
    },
}
const john={
    fullName:'John Smith',
    mass:92,
    height:1.95,
    calcBMI:function(){
        this.bmi=this.mass/(this.height**2);
        return this.bmi;
            }
}
if(mark.calcBMI()>john.calcBMI()){
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`)
}
else{
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)
}
