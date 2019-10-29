// slider
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;
  slider.oninput = function() {
    output.innerHTML = this.value;
   }

// handle modal box
let modal = document.getElementById('myModal');
let btn = document.getElementById("otprav");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// button close modal box
let close=document.getElementById("close_m");
close.onclick = function() {
    modal.style.display = "none";
}


// load images
document.getElementById("output").height = "200";

var openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };



// form validation

  function valid(form){
    var name2=form.name.value
    alert(name2) 
  }


// modal


function getSend(){
    // user information
    let name1 = document.getElementById('name1').value;
    let surname = document.getElementById('surname').value;
    let otch=document.getElementById("otch").value;
    let html = '<b> СПАСИБО ,  <b> ' + name1 + ' <b> ' + surname + ' <b> ' + otch +'<br/>'+ 'ВАШ ОТЗЫВ ОТПРАВЛЕН';
    document.getElementById('n1').innerHTML = html;
      
    // contacts
    let numb=document.getElementById("mobile").value;
    let mail=document.getElementById("email").value;
    let contacts=" "+numb+ " "+mail;
    document.getElementById("n2").innerHTML=contacts;

    // date
    let date=document.getElementById("date").value;
    document.getElementById("n3").innerHTML=date;

    // country
    let country=document.getElementById("country").value;
    document.getElementById("n4").innerHTML=country;

   // sightseens

   // gid mark
   let mark=slider.value+" %";
   document.getElementById("n6").innerHTML=mark

   // emotions
   let emotions=document.getElementById("area").value;
   document.getElementById("n7").innerHTML=emotions;


}




document.getElementById('otprav').addEventListener('click', getSend);

