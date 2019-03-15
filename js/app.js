'use-strict';
var storeCloseTime = 20;
var storeOpenHours= [];
var totalCookies = 0;
var finalStoretime = 0;
var amPm = '';
var hourlyCookies =[];
var pikeStreetId = 'pike-street-id';
var alkiBeachId = 'alki-beach-id';
var capitolHillId = 'capitol-hill-id';
var seaTacId = 'sea-tac-id';
var seattleCenterId = 'seattle-center-id';

for (var storeOpenTime = 6; storeOpenTime <= storeCloseTime ; storeOpenTime++){
  if (storeOpenTime > 12) {
    finalStoretime = storeOpenTime - 12 ;
    amPm = 'pm';
  }else{
    finalStoretime = storeOpenTime;
    amPm = 'am';
  }
  var timeAmPm = finalStoretime + amPm ;
  storeOpenHours.push(timeAmPm);
  console.log(timeAmPm);
}
console.log(storeOpenHours);


var Pikestreet ={
  minHourlyCustomers:Math.ceil(Math.random())*10,
  maxHourlyCustomers:Math.ceil(Math.random())*30,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};



getperHourCustomers(Pikestreet);
getperHourCookies(Pikestreet);
getperCustomerCookies(Pikestreet);
getcookieDisplay(Pikestreet);
createElements(pikeStreetId);


var AlkiBeach ={
  minHourlyCustomers:Math.ceil(Math.random())*20,
  maxHourlyCustomers:Math.ceil(Math.random())*40,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};


getperHourCustomers(AlkiBeach);
getperHourCookies(AlkiBeach);
getperCustomerCookies(AlkiBeach);
getcookieDisplay(AlkiBeach);
createElements(alkiBeachId);

var CapitolHill ={
  minHourlyCustomers:Math.ceil(Math.random())*15,
  maxHourlyCustomers:Math.ceil(Math.random())*35,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};

getperHourCustomers(CapitolHill);
getperHourCookies(CapitolHill);
getperCustomerCookies(CapitolHill);
getcookieDisplay(CapitolHill);
createElements(capitolHillId);

var SeaTac ={
  minHourlyCustomers:Math.ceil(Math.random())*17,
  maxHourlyCustomers:Math.ceil(Math.random())*39,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};

getperHourCustomers(SeaTac);
getperHourCookies(SeaTac);
getperCustomerCookies(SeaTac);
getcookieDisplay(SeaTac);
createElements(seaTacId);


var SeattleCenter ={
  minHourlyCustomers:Math.ceil(Math.random())*14,
  maxHourlyCustomers:Math.ceil(Math.random())*37,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};

getperHourCustomers(SeattleCenter);
getperHourCookies(SeattleCenter);
getperCustomerCookies(SeattleCenter);
getcookieDisplay(SeattleCenter);
createElements(seattleCenterId);


function getperHourCustomers(location){
  for (var i = 0; i <= storeOpenHours.length; i++) {
    var perHourCustomers = Math.floor(Math.random()
* (location.maxHourlyCustomers -
location.minHourlyCustomers + 1))
+ location.minHourlyCustomers;
    location.averageCustomersPerHour.push(perHourCustomers);
  }
  console.log('averageCustomersPerHour :' + location.averageCustomersPerHour);
}

function getperHourCookies(location){
  for (var j = 0; j <= storeOpenHours.length; j++) {
    var perHourCookies = Math.ceil(
      location.averageCustomersPerHour[j] *
 Math.ceil(Math.floor(Math.random() * 16) + 5));
    location.averageCookiesPerHour.push(perHourCookies);
  }
  console.log(location.averageCookiesPerHour);
}

function getperCustomerCookies(location){
  for (var z = 0; z <= storeOpenHours.length; z++) {
    var perCustomerCookies = Math.ceil(
      location.averageCookiesPerHour[z]
/ location.averageCustomersPerHour[z]);
    location.averageCookiesPerCustomer.push(perCustomerCookies);
  }
  console.log('averageCookiesPerCustomer: ' + location.averageCookiesPerCustomer);
}

function getcookieDisplay(location){
  hourlyCookies =[];
  totalCookies = 0;
  for (var k = 0 ; k < storeOpenHours.length ; k++){
    var cookie = location.averageCookiesPerCustomer[k];
    var cookieDisplay = storeOpenHours[k] + ': ' + cookie;
    totalCookies = parseInt(cookie) + parseInt(totalCookies);
    hourlyCookies.push(cookieDisplay);
  }
  totalCookies = 'Total Cookies: ' + totalCookies;
  console.log('HOURLY COOKIES : ' + hourlyCookies);
}

function createElements(locationid){
  var cookiesHour = document.getElementById(locationid);
  for (var l = 0; l < hourlyCookies.length; l++) {
    var liEl = document.createElement('li');
    liEl.textContent = hourlyCookies[l];
    cookiesHour.appendChild(liEl);
  }
  var ldEl = document.createElement('td');
  ldEl.textContent = totalCookies;
  cookiesHour.appendChild(ldEl);
}
