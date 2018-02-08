
document.addEventListener("DOMContentLoaded", onPageLoaded);

var albumCombo = null;
function onPageLoaded(e){
  albumCombo = document.getElementById("alumbcod");
  albumCombo.addEventListener("change",onAlbumCombo_change );
}

function onAlbumCombo_change(e){
  var uriString =  '/api/album/' + e.target.value;
  fetch(uriString)
      .then(function(response){
          return response.json();
        })
        .then(function(jsonData){
          var jsonDataStr = jsonData.map(function(o,i){
            return '<b>'+o.title+'</b><br/><img src="'+o.thumbnailUrl+'" /> <hr/>';
          }).join('');
          document.getElementById("albumholder").innerHTML = jsonDataStr;
        })
}
