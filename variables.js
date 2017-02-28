var template = (function () {/*
   
<h1 class="w3-center">#Name</h1>


<div class='w3-light-grey w3-content' style='max-width:1600px'>




<!-- Overlay effect when opening sidenav on small screens -->
<div class='w3-overlay w3-hide-large w3-animate-opacity' onclick='w3_close()' style='cursor:pointer' title='close side menu' id='myOverlay'></div>

<!-- !PAGE CONTENT! -->
<div class='w3-main' style='margin-left:300px'>

  <!-- Push down content on small screens --> 
  <div class='w3-hide-large' style='margin-top:83px'></div>
  
  <!-- Photo grid -->
  <div class="w3-row">
      <img class='w3-third' src='natureboy.jpg' style='width:100% ; height:30%!important;' alt='A boy surrounded by beautiful nature'>
      <img class='w3-third' src='girl_mountain.jpg' style='width:100% ; height:30%!important;' alt='What a beautiful scenery this sunset'>

      <img class='w3-third' src='boy.jpg' style='width:100% ; height:30%!important;' alt='Quiet day at the beach. Cold, but beautiful'>
      <img class='w3-third' src='man_bench.jpg' style='width:100% ; height:30%!important;' alt='Waiting for the bus in the desert'>
    
      <img class='w3-third' src='girl.jpg' style='width:100% ; height:30%!important;' alt='Canoeing again'>
      <img class='w3-third' src='girl_train.jpg' style='width:100% ; height:30%!important;' alt='A girl, and a train passing'>
</div>

  
  

  <!-- About section -->
  <div class='w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32' id='about'>
    <h4><b>About Me</b></h4>
    <div class='w3-content w3-justify' style='max-width:600px'>
      <p>#aboutMe
      </p>
      <p>#email</p>
      <p>tel: #phoneNumber</p>
    </div>
  </div>

  <!-- Contact section -->
  <div class='w3-container w3-light-grey w3-padding-32 w3-padding-large' id='contact'>
    <div class='w3-content' style='max-width:600px'>
      <h4 class='w3-center'><b>Contact Me</b></h4>
      <form action='/action_page.php' target='_blank'>
        <div class='w3-group'>
          <label>Name</label>
          <input class='w3-input w3-border' type='text' name='Name' required>
        </div>
        <div class='w3-group'>
          <label>Email</label>
          <input class='w3-input w3-border' type='text' name='Email' required>
        </div>
        <div class='w3-group'>
          <label>Message</label>
          <input class='w3-input w3-border' type='text' name='Message' required>
        </div>
        <button type='submit' class='w3-button w3-block w3-black w3-margin-bottom'>Send Message</button>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer class='w3-container w3-padding-32 w3-grey'>  
    <div class='w3-row-padding'>
      <div class='w3-third'>
        <h3>INFO</h3>
        <p>#info</p>      
      </div>
    
      <div class='w3-third'>
        <h3>BLOG POSTS</h3>
        <ul class='w3-ul'>
          <li class='w3-padding-16 w3-hover-black'>
            <span class='w3-large'>Lorem</span><br>
            <span>Sed mattis nunc</span>
          </li>
          <li class='w3-padding-16 w3-hover-black'>
            <span class='w3-large'>Ipsum</span><br>
            <span>Praes tinci sed</span>
          </li> 
        </ul>
      </div>

      <div class='w3-third'>
        <h3>POPULAR TAGS</h3>
        <p>
          <span class='w3-tag w3-black w3-margin-bottom'>Travel</span> <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>New York</span> <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>London</span>
          <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>IKEA</span> <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>NORWAY</span> <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>DIY</span>
          <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>Ideas</span> <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>Baby</span> <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>Family</span>
          <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>News</span> <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>Clothing</span> <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>Shopping</span>
          <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>Sports</span> <span class='w3-tag w3-dark-grey w3-small w3-margin-bottom'>Games</span>
        </p>
      </div>
    </div>
  </footer>
  
  <div class='w3-black w3-center w3-padding-24'>Josh Black Estate</a></div>

<!-- End page content -->
</div>




</div>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];