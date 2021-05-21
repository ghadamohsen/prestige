
// ///////////////////
var count = 1;
var countEl = document.getElementById("count");
function plus(){
    count++;
    countEl.value = count;
}
function minus(){
if (count > 1) {
    count--;
    countEl.value = count;
}  
}
///////// for button gift &  invitations //////////
function openOrder(evt, orderType) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(orderType).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // ===== add to favorite ====== //
  document.addEventListener("DOMContentLoaded", function(event) { // <-- add this wrapper
    var element = document.querySelectorAll('.fav-icon-color');
    
        if (element) {
        
          element.forEach(function(el, key){
            
             el.addEventListener('click', function () {
                console.log(key);
             
                el.classList.toggle("active");
                
                 element.forEach(function(ell, els){
                     if(key !== els) {
                         ell.classList.remove('active');
                     }
                      console.log(els);
                 });
             });
          });
        }
    });
    // =========== add card====== //
    document.getElementById("add-cart")
    .addEventListener("click", function() {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        this.classList.add("active");
      }

    });
    // ===============add to menu===========
    jQuery(document).ready(function($) {
      $('.rating .star').hover(function() {
        $(this).addClass('to_rate');
        $(this).parent().find('.star:lt(' + $(this).index() + ')').addClass('to_rate');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').addClass('no_to_rate');
      }).mouseout(function() {
        $(this).parent().find('.star').removeClass('to_rate');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate');
      }).click(function() {
        $(this).removeClass('to_rate').addClass('rated');
        $(this).parent().find('.star:lt(' + $(this).index() + ')').removeClass('to_rate').addClass('rated');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate').removeClass('rated');
        /*Save your rate*/
        /*TODO*/
      });
    });