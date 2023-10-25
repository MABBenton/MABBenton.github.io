//When a user hovers over .card it triggers a vertical bouncing animation of the card elememt
//which stops after two rounds of the animation.

//create variable storing .card (card)
const cards = document.getElementsByClassName('card');
const cardBounce = [
  {transform: "translate(0, 0)"},
  {transform: "translate(0, -2rem)"},
  {transform: "translate(0, 0)"}    
]

const cardTiming = {
  duration: 1100,
  iterations: 1
}


for (let card of cards) {
    card.addEventListener('mouseover', () => {
        card.animate(cardBounce, cardTiming);
      });
}

