JQuery(function($){

  var launch = new Date(2014,03,10,10,0,0);
  setDate();

    function setDate(){
      var now = Date();
      var s = (launch.getTime() - now.getTime())/1000;
      var d = Math.floor(s/86400);
      $('#days').html('<strong>'+d+'</strong>');
    }

})

});


































})();
