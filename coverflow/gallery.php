<!doctype html>  

<html lang="en">

<head>


  <meta charset="utf-8">

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">


  <title>html5 coverflow</title>


  <meta name="author" content="Tyler Cipriani">

  <meta name="viewport" content="width=960">

  <link rel="stylesheet" href="/css/coverflow.css">

  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>

</head>


<body>


  <div id="container">


      <ul id="html5coverflow">


        <li><img src="img/floyds_cover.jpg" alt="Floyd's 99"></li>

        <li><img src="img/wholefoods_cover.jpg" alt="Whole Foods"></li>

        <li><img src="img/chipotle_cover.jpg" alt="Chipotle"></li>

        <li><img src="img/bonnaroo_cover.jpg" alt="Bonnaroo"></li>

        <li><img src="images/grin_cover.jpg" alt="Soul Daddy - America's Next Great Restaurant"></li>

  
      </ul>


	</div> <!-- end of #container -->

<script type="text/javascript">


$(document).ready(function(){


  var $rotator = $("ul.clientRotator > li");


  $rotator.each(function(i){
      $(this).addClass(bg);
  });


  //$rotator.click(clicked);
      
  /*function clicked(){

      if ($(this).prev().prev().length != 0)
      {
      var $first = $(this).prev().prev();
      } else {
          switch ($rotator.index($(this))){
              case 0:
                  var $first = $rotator.eq(3)
                  break;
              case 1:
                  var $first = $rotator.eq(4)
                  break;
          }
      }
      var i = $rotator.index($first);
      for (var c=0; c<5; c++)
      {
          if ($rotator.eq(i).next().length == 0)
          {
              $rotator.eq(i).removeClass();
              $rotator.eq(i).addClass(arr[c]);
              i=0;
           } else {
              $rotator.eq(i).removeClass();
              $rotator.eq(i).addClass(arr[c]);
              i++   
           }
      }
  }*/

});
</script>

<?php get_footer();?>
