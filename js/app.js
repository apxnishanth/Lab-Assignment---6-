'use-strict';
var storeCloseTime = 20;
var storeOpenHours = [];
var storeOpenTime = 6;
var hourlyCookies= [];
var totalCookies = 0;

for (storeOpenTime ; storeOpenTime <= storeCloseTime ; storeOpenTime++){
  if (storeOpenTime > 12) {
    var finalStoretime = storeOpenTime - 12 ;
    var amPm = 'pm';
  }else{
    var finalStoretime = storeOpenTime;
    var amPm = 'am';
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
    var perHourCustomers = Math.floor(Math.random() * (locationPikestreet.maxHourlyCustomers - locationPikestreet.minHourlyCustomers + 1)) + locationPikestreet.minHourlyCustomers;
    locationPikestreet.averageCustomersPerHour.push(perHourCustomers);
  }
  console.log(locationPikestreet.averageCustomersPerHour);
  console.log(Math.random(3,13));

  for (var i = 0; i <= storeOpenHours.length; i++) {
    var perHourCookies = Math.ceil(locationPikestreet.averageCustomersPerHour[i] * Math.ceil(Math.floor(Math.random() * 16) + 5));
    locationPikestreet.averageCookiesPerHour.push(perHourCookies);
  }
  console.log(locationPikestreet.averageCookiesPerHour);

  for (var i = 0; i <= storeOpenHours.length; i++) {
    var perCustomerCookies = Math.ceil(locationPikestreet.averageCookiesPerHour[i] / locationPikestreet.averageCustomersPerHour[i]);
    locationPikestreet.averageCookiesPerCustomer.push(perCustomerCookies);
  }
  console.log(locationPikestreet.averageCookiesPerCustomer);

  for (var i = 0 ; i < storeOpenHours.length ; i++)
  {
    var cookie = locationPikestreet.averageCookiesPerCustomer[i];
    var cookieDisplay = storeOpenHours[i] + ': ' + cookie;
    var totalCookies = parseInt(cookie) + parseInt(totalCookies);
    hourlyCookies.push(cookieDisplay);
  }
  var totalCookies = "Total Cookies: " + totalCookies;
  console.log(hourlyCookies);

  var cookiesHour = document.getElementById('cookies-Hour');

for (var i = 0; i < hourlyCookies.length; i++) {

  var liEl = document.createElement('li');
 
  liEl.textContent = hourlyCookies[i];
  
  cookiesHour.appendChild(liEl);
}

var ldEl = document.createElement('td');
ldEl.textContent = totalCookies;
cookiesHour.appendChild(ldEl);