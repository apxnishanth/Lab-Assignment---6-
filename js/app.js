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

var locationPikestreet ={
  minHourlyCustomers:Math.ceil(Math.random())*10,
  maxHourlyCustomers:Math.ceil(Math.random())*30,
  averageCookiesPerHour:[],
  averageCustomersPerHour:[],
  averageCookiesPerCustomer:[]
};

for (var i = 0; i <= storeOpenHours.length; i++) {
  var perHourCustomers = Math.floor(Math.random()
* (locationPikestreet.maxHourlyCustomers -
locationPikestreet.minHourlyCustomers + 1))
+ locationPikestreet.minHourlyCustomers;
  locationPikestreet.averageCustomersPerHour.push(perHourCustomers);
}
console.log(locationPikestreet.averageCustomersPerHour);

for (var j = 0; j <= storeOpenHours.length; j++) {
  var perHourCookies = Math.ceil(
    locationPikestreet.averageCustomersPerHour[j] *
 Math.ceil(Math.floor(Math.random() * 16) + 5));
  locationPikestreet.averageCookiesPerHour.push(perHourCookies);
}
console.log(locationPikestreet.averageCookiesPerHour);

for (var z = 0; z <= storeOpenHours.length; z++) {
  var perCustomerCookies = Math.ceil(
    locationPikestreet.averageCookiesPerHour[z]
/ locationPikestreet.averageCustomersPerHour[z]);
  locationPikestreet.averageCookiesPerCustomer.push(perCustomerCookies);
}
console.log('averageCookiesPerCustomer: ' + locationPikestreet.averageCookiesPerCustomer);

for (var k = 0 ; k < storeOpenHours.length ; k++){
  var cookie = locationPikestreet.averageCookiesPerCustomer[k];
  var cookieDisplay = storeOpenHours[k] + ': ' + cookie;
  totalCookies = parseInt(cookie) + parseInt(totalCookies);
  hourlyCookies.push(cookieDisplay);
}
totalCookies = 'Total Cookies: ' + totalCookies;
console.log('HOURLY COOKIES : ' + hourlyCookies);

var cookiesHour = document.getElementById('cookies-Hour');

console.log('HOURLY COOKIES 2: ' + hourlyCookies.length);

for (var l = 0; l < hourlyCookies.length; l++) {
  var liEl = document.createElement('li');
  liEl.textContent = hourlyCookies[l];
  cookiesHour.appendChild(liEl);
}

var ldEl = document.createElement('td');
ldEl.textContent = totalCookies;
cookiesHour.appendChild(ldEl);
