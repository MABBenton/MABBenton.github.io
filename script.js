//When a user hovers over .card it triggers a vertical bouncing animation of the card elememt
//which stops after one iteration of the animation.

const cards = document.getElementsByClassName('card');
const cardBounce = [
  {transform: "translate(0, 0)"},
  {transform: "translate(0, -1rem)"},
  {transform: "translate(0, .4rem)"},
  {transform: "translate(0, 0)"}    
];

const cardTiming = {
  duration: 1000,
  iterations: 1
};


for (let card of cards) {
    card.addEventListener('mouseover', () => {
        card.animate(cardBounce, cardTiming);
      });
}