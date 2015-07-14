var cards = [ 'heart',
              'spade',
              'club',
              'diamond',
              'heart',
              'spade',
              'club',
              'diamond',
              'heart',
              'spade',
              'club',
              'diamond',
              'heart',
              'spade',
              'club',
              'diamond'
            ];

var table = document.getElementById('table');

          function shuffle(array) {
              var currentIndex = array.length, temporaryValue, randomIndex ;

              // While there remain elements to shuffle...
              while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
              }

              return array;
            };


shuffle(cards);
console.log(shuffle(cards));


cards.forEach(function(suit){
  var card = document.createElement('div');
  card.classList.add('card');
  card.classList.add(suit);
  card.innerHTML = '<div class="front"><div class="suit"></div></div><div class="back"></div>';
  table.appendChild(card);
});


/*clicks add class .card.flip transform documentgetElementByClassName('flip'),
need to see if the class's are the same - if they arent flip back over. class list contains on ClassList */
