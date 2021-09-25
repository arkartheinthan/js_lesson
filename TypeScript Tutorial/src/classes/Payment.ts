import { HasFormatter } from '../interface/HasFormatter.js';

//class
export class Payment implements HasFormatter{ 
    constructor(
      readonly recipient: string,
      private details: string,
      public amount: number,
    ){}
  
    format(){
      return `${this.recipient} is owes ${this.amount} for ${this.details}`;
    }
  }