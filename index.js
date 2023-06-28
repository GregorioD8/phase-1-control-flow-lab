function scuberGreetingForFeet(ride){
  
  // gives customers a free sample if the ride is less than or equal to 400 feet
  if (ride <= 400) {
    return 'This one is on me!'
  }
  
  // charges 20 dollars for a distance between 400 and 2000 feet
  if (ride > 400 && ride < 2000) {
    return 'That will be twenty bucks.'
  }

  // charges 30 dollars for a distance over 2000 feet
  if (ride > 2000 && ride < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (ride && ride > 2500) {
      return 'No can do.'
    }
      
  }



// returns "Ok, sounds good." when the city is NYC
function ternaryCheckCity(city){
  
  return (city === 'NYC'? 'Ok, sounds good.' : 'No go.')
}
  
// returns "Thank you so much." if the tip is generous
// returns "Thank you." if the tip is not as generous
// returns "Bye." if anything else
function switchOnCharmFromTip(tip){

 switch (tip) {
  case 'generous':
    return 'Thank you so much.'
  case 'not as generous':
    return 'Thank you.'
  default:
    return 'Bye.'

 }
}