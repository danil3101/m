// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var terms_btn = document.getElementById("apply-terms");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

terms_btn.onclick = function() {
	document.getElementsByClassName("change-this-text")[0].style.display = "none";
	document.getElementsByClassName("change-this-text")[1].style.display = "none";
	document.getElementsByClassName("change-this-text")[2].style.display = "none";
	document.getElementsByClassName("show-this-later")[0].style.display = "block";
	document.getElementsByClassName("show-this-later")[1].style.display = "block";
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
$(document).ready(function() {
	$.ajax({
            url: 'http://165.227.142.137:3000/progress',
            type: 'GET',
            success: function (data) {
            	
             	document.getElementById("progress").innerHTML = "<span>" + data.progress.toFixed(4) + "%</span>" + "<br>Progress";   
             	document.getElementById("total-supply").innerHTML = "<span>" + data.total_supply + "</span>\n" +"<br>Total Supply"; 
             	document.getElementById("token-cap").innerHTML = "<span>" + 5000000 + "</span>\n" +"<br>Token Cap";     
            },
            error: function (e) {
                console.log(e);
            }
        });
});