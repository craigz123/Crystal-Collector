
var crystals = ["assets/images/ruby.png","assets/images/ice.png", "assets/images/violet.png", "assets/images/amber.png" ];
var total = 0;
//Computer random number variable
var compRand; 
var wins = 0;
var losses = 0;


function populateCrystals(){
    $('#crystals').empty();
    RandomCrystals();
    $("#losses").text('losses :' + losses);
    $("#wins").text('wins :' + wins);
    for( var i = 0; i < crystals.length; i ++){
        var crystalValue = Math.floor(Math.random() * 12) + 1
        $('#crystals').append(
            `<button type="button" data-value=${crystalValue} class="btn btn-secondary crystal"><img src=${crystals[i]}  width="75px"
         height="75px"></button>`)
    }
   $('.crystal').on('click', function(){
      var crystalValue =  $(this).attr('data-value');
      total += parseInt(crystalValue);
      $('#score').text(total);
      
      if( total > compRand) {
          alert('You lose')
          losses++
          $("#losses").text('losses :' + losses);
          RandomCrystals();
      } 
      else if( total == compRand){
          alert('You win')
          wins++
          $("#wins").text('wins :' + wins);
          RandomCrystals();
        
      }
      
   })
}

populateCrystals();

function RandomCrystals(){
    compRand = Math.floor(Math.random() * 120) + 19;
    $('#comp').html(`<p>The Number: ${compRand} </p>`);
    total = 0;
    $('#score').text(total);

}