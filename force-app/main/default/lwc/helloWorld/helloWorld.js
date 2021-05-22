import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  name = '';

  changeHandler(event) {
    this.name= event.target.value;
  }
}