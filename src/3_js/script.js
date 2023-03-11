const panels=document.querySelectorAll('.panel')
console.log(panels)

panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')})
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}


var map = L.map('map').setView([45.331958, 17.675823], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
  maxZoom: 25
}).addTo(map);



var marker = L.marker([45.331958, 17.675823]).addTo(map);
marker.bindPopup("<b>Županijska ulica 4, Požega</b><br>  <a target=”_blank” href= 'https://www.google.com/maps/dir//%C5%BDupanijska+ul.+4,+34000,+Po%C5%BEega/@45.3318146,17.6737658,1088m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x475d84db7882ab5f:0x86da7ee0db407d16!2m2!1d17.6759545!2d45.3318108!3e0' >Google upute</a> ").openPopup();



var map2 = L.map('map2').setView([45.731156, 15.996673], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
  maxZoom: 19
}).addTo(map2);
var marker2 = L.marker([45.731156, 15.996673]).addTo(map2);
marker2.bindPopup("<b>Odranska ulica 62, Odra</b><br>  <a target=”_blank” href= 'https://www.google.com/maps/dir//Odranska+ul.+62,+10000,+Odra/@45.731097,15.9964142,191m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x47667f810b57f1ff:0x4526349b0d91f2c!2m2!1d15.9966768!2d45.7311706!3e0' >Google upute</a> ").openPopup();

  // Smooth Scrolling
$('#showcase1 .showcase-container1 a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });

