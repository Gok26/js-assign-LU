var quotes = [
    'Don\'t let anyone manhandle you at any instance, if so screw them up',
    'Staggering you makes unorthodox me!!',
    'If not you, then no one else, it\'s not greed, it\'s destiny!!',
    'Calm in my chaos',
    'You strive me to become the best version of myself',
    'Trust is meaningless in front of time and space',
    'Don\'t let your vulnerabilities to get exploit by trespassers',
    'One heart meant for one becomes a superstition',
    'Smile until life gets tired of upsetting you',
    'Desperate move has to be taken at desperate time!',
    'Critiques owes the sign of enhancement to the next level',
    'Trust the process is the best thing that one can ever do',
    'Art of human deception is something as \"swallowed it hook, line and sinker\"',
    'Neither overwhelm nor compromise at any instance!',
    'Constant has no value amidst of variables',

]
function generate(){
 let randomNumber = Math.floor(Math.random()*quotes.length);
 document.getElementById('quoteGenerator').innerHTML = quotes[randomNumber];
}