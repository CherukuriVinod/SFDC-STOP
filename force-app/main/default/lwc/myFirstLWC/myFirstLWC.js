import { LightningElement } from 'lwc';

export default class MyFirstLWC extends LightningElement {
    name='';

    changeHandler(event){
        this.name=event.target.value;
    }

}