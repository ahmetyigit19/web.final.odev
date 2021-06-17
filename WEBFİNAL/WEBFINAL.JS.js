
$(document).ready(function() {
  $('#example').DataTable( {
    "java": '../WEBFINAL.JS.js/getcovidlist/consolelog.data'
} );
} );               //-- verileri tabloya yerleştirmeye çalıştım 





const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [{
    label: 'example',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};



const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};


module.exports = {
  actions: [],
  config: config,
};
//-- verdiğiniz tablo yapısını  koydum 




document.getElementById("getData").addEventListener('click',getData);        //--json verisini çekmeye çalıştım
function getData(){
var url="https://api.covid19api.com/country/turkey?from=2021-05-01T00:00:00Z&amp;to=2021-06-01T00:00:00Z";
var xml=new XMLHttpRequest();
xml.open('GET',url,true);
xml.onload=function () {
  if(xml.status===200){
    var post=JSON.parse(this.responseText);
    var html= "";
    post.array.forEach(element => {
    html+-`
      <tr>
      <th>${element.ıd}</th>
      <th>${element.country}</th>
      <th>${element.CountryCode}</th>
      <th>${element.Province}</th>
      <th>${element.City}</th>
      <th>${element.CityCode}</th>
       <th>${element.Lat}</th>
       <th>${element.Lon}</th>
       <th>${element.Confirmed}</th>
       <th>${element.Deaths}</th>
       <th>${element.Recovered}</th>
       <th>${element.Active}</th>



  </tr>
` ;



    });
     document.getElementById("example").innerHTML=html;

  }}}

