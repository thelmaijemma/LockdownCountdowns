
     var Date1 = new Date('March 8, 2021 00:00:00').getTime();
      
      function newDay1(){
      var now = new Date().getTime();
      var gap = Date1-now;
      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;

      var d = Math.floor(gap / (day));
      var h = Math.floor((gap % (day))/ (hour));
      var m = Math.floor((gap % (hour)) / (minute));
      var s = Math.floor((gap % (minute)) / second);

  
     
     $( ".day1").html( "<p>"+ d +"</p>" );
         $( ".hour1").html( "<p>"+ h +"</p>" );
         $( ".minute1").html( "<p>"+ m +"</p>" );
         $( ".second1").html( "<p>"+ s +"</p>" );
        
      }
  var Date2 = new Date('March 29, 2021 00:00:00').getTime();
      
      function newDay2(){
      var now = new Date().getTime();
      var gap = Date2-now;
      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;

      var d = Math.floor(gap / (day));
      var h = Math.floor((gap % (day))/ (hour));
      var m = Math.floor((gap % (hour)) / (minute));
      var s = Math.floor((gap % (minute)) / second);

  
     
     $( ".day2").html( "<p>"+ d +"</p>" );
         $( ".hour2").html( "<p>"+ h +"</p>" );
         $( ".minute2").html( "<p>"+ m +"</p>" );
         $( ".second2").html( "<p>"+ s +"</p>" );
        
      }
var Date3 = new Date('April 12, 2021 00:00:00').getTime();
      
      function newDay3(){
      var now = new Date().getTime();
      var gap = Date3-now;
      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;

      var d = Math.floor(gap / (day));
      var h = Math.floor((gap % (day))/ (hour));
      var m = Math.floor((gap % (hour)) / (minute));
      var s = Math.floor((gap % (minute)) / second);

  
     
     $( ".day3").html( "<p>"+ d +"</p>" );
         $( ".hour3").html( "<p>"+ h +"</p>" );
         $( ".minute3").html( "<p>"+ m +"</p>" );
         $( ".second3").html( "<p>"+ s +"</p>" );
        
      }
      var Date4 = new Date('May 17, 2021 00:00:00').getTime();
      
      function newDay4(){
      var now = new Date().getTime();
      var gap = Date4-now;
      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;

      var d = Math.floor(gap / (day));
      var h = Math.floor((gap % (day))/ (hour));
      var m = Math.floor((gap % (hour)) / (minute));
      var s = Math.floor((gap % (minute)) / second);

  
     
     $( ".day4").html( "<p>"+ d +"</p>" );
         $( ".hour4").html( "<p>"+ h +"</p>" );
         $( ".minute4").html( "<p>"+ m +"</p>" );
         $( ".second4").html( "<p>"+ s +"</p>" );
        
      }
    var Date5 = new Date('June 21, 2021 00:00:00').getTime();
      
      function newDay5(){
      var now = new Date().getTime();
      var gap = Date5-now;
      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;

      var d = Math.floor(gap / (day));
      var h = Math.floor((gap % (day))/ (hour));
      var m = Math.floor((gap % (hour)) / (minute));
      var s = Math.floor((gap % (minute)) / second);

  
     
     $( ".day5").html( "<p>"+ d +"</p>" );
         $( ".hour5").html( "<p>"+ h +"</p>" );
         $( ".minute5").html( "<p>"+ m +"</p>" );
         $( ".second5").html( "<p>"+ s +"</p>" );
        
      }
      setInterval(function(){
      // OKAY, I am commenting out countdowns as they progress but obviously, this can also be automated
        //newDay1();
        //newDay2();
        newDay3();
        newDay4();
        newDay5();
      }, 1000)
      

    


