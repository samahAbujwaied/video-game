alert('welcome in our games');
console.log('this is from js file');


var game = prompt('please enter a game that you play pubg or  freefire  or click ok without typing ')

if(game =='pubg')
{
  var game1 = '<img src="https://i.ytimg.com/vi/v-7XAgT1Z1w/maxresdefault.jpg" alt= "bupg"/>';
  var text1='<h1> Welcome in Pubg Game</h1></br>'
  var game2 = '<img src="https://kw.arab-24.net/wp-content/uploads/2020/12/933055-pubg-2.jpg" alt= "pubg"/>';
  
  document.write(game1);
  document.write(text1);
  document.write(game2);
  
}else if(game =='freefire'){
  
  var game3 = '<img src="https://3.bp.blogspot.com/-kTK4W2v-7hs/Xq4PM_0XP0I/AAAAAAAACvA/O-_eE0SqHXwZCOWyhwBdPNuilMCU3uN_ACK4BGAYYCw/s1600/1575630098-7585-card.jpg"/>';
  var text2='<h1> Welcome in freefire Game</h1></br>'
  var game4='<img src="https://i.pinimg.com/736x/84/59/f7/8459f773907b5c51aa3a720ca1c7a13b.jpg"'

  document.write(game3);
  document.write(text2);
  document.write(game4);
}
else
{
  var text4='welcome in pubg and freefire';
var game1 = '<img src="https://i.ytimg.com/vi/v-7XAgT1Z1w/maxresdefault.jpg" alt= "bupg"/>';
var game3 = '<img src="https://3.bp.blogspot.com/-kTK4W2v-7hs/Xq4PM_0XP0I/AAAAAAAACvA/O-_eE0SqHXwZCOWyhwBdPNuilMCU3uN_ACK4BGAYYCw/s1600/1575630098-7585-card.jpg"/>';
document.write(text4);
document.write(game1);
document.write(game3);

}


var color = prompt('please enter a color that you prefer ( red ) or ( green ) try click ok without typing ')

if (color=='red')
{
document.body.style.backgroundColor = "red";

}
else if (color== 'green'){
document.body.style.backgroundColor = "green";

}
else
{
  document.body.style.backgroundColor="blue";
}




