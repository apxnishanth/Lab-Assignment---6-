'use-strict';
var totalCookies = 0;
var finalStoretime = 0;
var amPm = '';
var hourlyCookies =[];
var hourlyCookieStore;
var hourlyTotal = 0;
var pikeStreetId = 'pike-street-id';
var alkiBeachId = 'alki-beach-id';
var capitolHillId = 'capitol-hill-id';
var seaTacId = 'sea-tac-id';
var seattleCenterId = 'seattle-center-id';

var defaultStoreHours =['7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];
var Stores = ['pikeStreet','alkiBeach','seaTac','seattleCenter','capitolHill'];
var table = document.getElementById('data');

function CookieStore(name, locationId, storeOpenTime, storeCloseTime, minHourlyCustomers, maxHourlyCustomers) {
  this.name = name;
  this.locationId = locationId;
  this.storeOpenTime = storeOpenTime;
  this.storeCloseTime = storeCloseTime;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookiesPerHour = [];
  this.averageCustomersPerHour = [];
  this.averageCookiesPerCustomer = [];
  this.storeOpenHours = [];
  this.hourlyCookies =[],
  this.totalCookies = 0;
  CookieStore.all.push(this);
};

CookieStore.all = [];
var pikeStreet = new CookieStore ('Pike Place', pikeStreetId, 7, 20, 9, 17);
var alkiBeach = new CookieStore ('SeaTac Airport', alkiBeachId, 7, 20, 7, 12);
var seaTac = new CookieStore ('Seattle Tacoma Airport', capitolHillId, 7, 20, 9, 15);
var seattleCenter = new CookieStore ('Seattle Center', seaTacId, 7, 20, 8, 19);
var capitolHill = new CookieStore ('Capitol Hill', seattleCenterId, 7, 20, 12, 24);


CookieStore.prototype.getStoreOpenHours = function () {
while (this.storeOpenTime <= this.storeCloseTime){
  if (this.storeOpenTime > 12) {
    finalStoretime = this.storeOpenTime - 12 ;
    amPm = 'pm';
  }else{
    finalStoretime = this.storeOpenTime;
    amPm = 'am';
  }
  if(finalStoretime == 12){
    amPm = 'pm';
  }
  var timeAmPm = finalStoretime + amPm ;
  this.storeOpenHours.push(timeAmPm);
  console.log(timeAmPm);
  this.storeOpenTime = this.storeOpenTime + 1;
}
console.log('Store Open Hours : ' + this.storeOpenHours);
}

CookieStore.prototype.getAverageCustomersPerHour = function () {
  for (var i = 0; i <= this.storeOpenHours.length; i++) {
    var perHourCustomers = Math.floor(Math.random()
* (this.maxHourlyCustomers -
this.minHourlyCustomers + 1))
+ this.minHourlyCustomers;
    this.averageCustomersPerHour.push(perHourCustomers);
  }
  console.log('averageCustomersPerHour :' + this.averageCustomersPerHour);
};

CookieStore.prototype.getAverageCookiesPerHour = function () {
  console.log('averageCustomersPerHour :' + this.averageCustomersPerHour[0]);
  for (var j = 0; j < this.storeOpenHours.length; j++) {
    var perHourCookies = Math.ceil(
      this.averageCustomersPerHour[j] *
 Math.ceil(Math.floor(Math.random() * 16) + 5));
    this.averageCookiesPerHour.push(perHourCookies);
  }
  console.log("averageCookiesPerHour: " + this.averageCookiesPerHour);
};

CookieStore.prototype.getAverageCookiesPerCustomer = function () {
  for (var z = 0; z <= this.storeOpenHours.length; z++) {
    var perCustomerCookies = Math.ceil(
      this.averageCookiesPerHour[z]
/ this.averageCustomersPerHour[z]);
    this.averageCookiesPerCustomer.push(perCustomerCookies);
  }
  console.log('averageCookiesPerCustomer: ' + this.averageCookiesPerCustomer);
};

CookieStore.prototype.getHourlyCookies = function () {
  this.hourlyCookies = [];
  totalCookies = 0;

  for (var k = 0 ; k < this.storeOpenHours.length ; k++){
    var cookie = this.averageCookiesPerCustomer[k];
    var cookieDisplay =  cookie;
    this.totalCookies = parseInt(cookie) + parseInt(this.totalCookies);
    this.hourlyCookies.push(cookieDisplay);
  }
  totalCookies = 'Total Cookies: ' + this.totalCookies;
  console.log('HOURLY COOKIES : ' + this.hourlyCookies);
  console.log('totalCookies :' + this.totalCookies);
};

CookieStore.prototype.render = function() {
  this.getStoreOpenHours();
  this.getAverageCustomersPerHour();
  this.getAverageCookiesPerHour();
  this.getAverageCookiesPerCustomer();
  this.getHourlyCookies();

    var trEl = document.createElement('tr');
    var section = document.getElementById("data");
    section.appendChild(trEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    

      for (var ir = 0; ir <= this.storeOpenHours.length; ir++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.hourlyCookies[ir];
        trEl.appendChild(tdEl);
    };
   tdEl.textContent = this.totalCookies;

}


function header(){
  var trEl = document.createElement('tr');
  
  
  var thEl = document.createElement('th');
  thEl.textContent = "Location";
  trEl.appendChild(thEl);

  for (var iq = 0; iq < defaultStoreHours.length; iq++) {
    var thEl = document.createElement('th')
    thEl.textContent = defaultStoreHours[iq];
    trEl.appendChild(thEl);
    table.appendChild(trEl);
  }
  var thElTotal = document.createElement('th');
  thElTotal.textContent = "Daily Location Total";
  trEl.appendChild(thElTotal);

}

function footer(){
  var trEl = document.createElement('tr');
  var section = document.getElementById("data");
  section.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = "Daily Location Total";
  trEl.appendChild(thEl);
  
  
  var hourlyFinalTotal =[];
  for( var ih = 0; ih < defaultStoreHours.length; ih++){
    hourlyTotal = 0;
    var FinalTotal = 0;
     for(var is = 0; is < CookieStore.all.length; is ++ ){
       hourlyCookieStore = CookieStore.all[is].hourlyCookies[ih];
       hourlyTotal = parseInt(hourlyTotal) + parseInt(hourlyCookieStore);
       hourlyTotalCookies = CookieStore.all[is].totalCookies;
       console.log("hourlyTotalCookies : " + CookieStore.all[is].totalCookies);
       FinalTotal = parseInt(FinalTotal) + hourlyTotalCookies;
     }
     console.log("FinalTotal : " + FinalTotal);
     hourlyFinalTotal.push(hourlyTotal);
     console.log("hourlyTotal : " + hourlyFinalTotal[ih]);
     var tdEl = document.createElement('td');
     tdEl.textContent = hourlyFinalTotal[ih];
     trEl.appendChild(tdEl);
     table.appendChild(trEl);
  }
  var tdElt = document.createElement('td');
  tdElt.textContent = FinalTotal;
  trEl.appendChild(tdElt);
  table.appendChild(trEl);

}

header();

pikeStreet.render();
alkiBeach.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();

footer();
