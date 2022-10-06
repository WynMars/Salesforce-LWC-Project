import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
isVisible = false
handleClick(){
    this.isVisible = true

}


  changeHandler(event) {
    this.name = event.target.value
  }


name 
get helloMethod(){
    return this.name =='Hello' 
}

}