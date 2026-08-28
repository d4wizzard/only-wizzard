const imageUpgrades=[
  ['.chess','assets/spieleabend.png','Zwei erwachsene Zaubernde bei einem eleganten Schachduell'],
  ['.quote-card','assets/salon-gespraech.png','Zwei erwachsene Salongäste bei einem vertraulichen Gespräch'],
  ['.rules-card','assets/akademie-etikette.png','Erwachsener Mentor und erwachsene Schülerin bei einer freiwilligen Zeremonie'],
  ['.topic-grid','assets/magische-ausdauer.png','Erwachsener Zauberer übt konzentriert Ausdauer und Stabtechnik'],
  ['.mirror-card','assets/spiegelkammer.png','Erwachsene Magierin betrachtet sich in einem verzauberten Spiegel'],
  ['.duel-card','assets/mitternachtsduell.png','Zwei erwachsene Zaubernde bei einem kontrollierten Mitternachtsduell']
];
imageUpgrades.forEach(([selector,src,alt])=>{const card=document.querySelector(selector);if(!card)return;const existing=card.innerHTML;card.classList.add('photo-upgraded');card.innerHTML=`<img src="${src}" alt="${alt}"><div class="photo-copy">${existing}</div>`});
