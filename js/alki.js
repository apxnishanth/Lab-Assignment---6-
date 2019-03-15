'use-strict';
var storeCloseTime = 20;
var hourlyCookies= [];
var storeOpenHours= [];
var totalCookies = 0;
var finalStoretime = 0;
var amPm = '';

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

var locationAlkiBeach ={
  minHourlyCustomers:Math.ceil(Math.random())*35,
  maxHourlyCustomers:Math.ceil(Math.random())*57,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};

for (var i = 0; i <= storeOpenHours.length; i++) {
  var perHourCustomers = Math.floor(Math.random()
* (locationAlkiBeach.maxHourlyCustomers -
locationAlkiBeach.minHourlyCustomers + 1))
+ locationAlkiBeach.minHourlyCustomers;
  locationAlkiBeach.averageCustomersPerHour.push(perHourCustomers);
}
console.log(locationAlkiBeach.averageCustomersPerHour);

for (var j = 0; j <= storeOpenHours.length; j++) {
  var perHourCookies = Math.ceil(
    locationAlkiBeach.averageCustomersPerHour[j] *
 Math.ceil(Math.floor(Math.random() * 16) + 5));
  locationAlkiBeach.averageCookiesPerHour.push(perHourCookies);
}
console.log(locationAlkiBeach.averageCookiesPerHour);

for (var z = 0; z <= storeOpenHours.length; z++) {
  var perCustomerCookies = Math.ceil(
    locationAlkiBeach.averageCookiesPerHour[z]
/ locationAlkiBeach.averageCustomersPerHour[z]);
  locationAlkiBeach.averageCookiesPerCustomer.push(perCustomerCookies);
}
console.log(locationAlkiBeach.averageCookiesPerCustomer);

for (var k = 0 ; k < storeOpenHours.length ; k++){
  var cookie = locationAlkiBeach.averageCookiesPerCustomer[k];
  var cookieDisplay = storeOpenHours[k] + ': ' + cookie;
  totalCookies = parseInt(cookie) + parseInt(totalCookies);
  hourlyCookies.push(cookieDisplay);
}
totalCookies = 'Total Cookies: ' + totalCookies;
console.log(hourlyCookies);

var cookiesHour = document.getElementById('alki-cookies-Hour');

for (var l = 0; l < hourlyCookies.length; l++) {
  var liEl = document.createElement('li');
  liEl.textContent = hourlyCookies[l];
  cookiesHour.appendChild(liEl);
}

var ldEl = document.createElement('td');
ldEl.textContent = totalCookies;
cookiesHour.appendChild(ldEl);
