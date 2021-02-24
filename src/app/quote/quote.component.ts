
import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,"If you're always trying to be normal, you will never know how amazing you can be.",'Maya Angelou','Fidela',0,0,new Date(2021,2,21)),
   new Quote(2,"Do the best you can until you know better. Then when you know better, do better.",'Maya Angelou','Fidela',0,0,new Date(2021,2,18)),
    new Quote(3,"Nothing will work unless you do",'Maya Angelou','Fidela',0,0,new Date(2000,2,14)),
    new Quote(4,"Try to be a rainbow in someone’s cloud.",'Maya Angelou','Fidela',0,0,new Date(2009,4,30)),
   new Quote(5,"If you don't like something, change it. If you can't change it, change your attitude.",'Maya Angelou','Fidela',0,0,new Date(2015,9,31)),
  ];
  toggleDetails(index:number){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}