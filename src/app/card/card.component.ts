import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  

  constructor() { }
  //static array to load cards instead of using an API
  cardsArr = [
    {id: 25, name: "Idea Summary", imagesrc: "../../assets/image.png" },
    {id: 24, name: "Idea Summary", imagesrc: "../../assets/image.png" }
  ];

  allCards;
  notScrolly = true;

  //Load first two cards
  ngOnInit() {  
    this.loadInitpost();  
  }

  loadInitpost(){
    this.allCards = this.cardsArr;
  }

  //Infite on scroll method
  onScroll(){
    if(this.notScrolly == true){
      this.notScrolly = false;
      this.loadNextCard();
    }
  };

  //Infinitely pushing objects into the array to render new cards 
  loadNextCard(){
    const currentCard = this.allCards[0];
    const name = currentCard.name;
    const img = currentCard.imagesrc;
    const newCard = {id : 0, name : name, imagesrc : img}
    this.cardsArr.push(newCard);
    this.notScrolly = true;
  }

}
