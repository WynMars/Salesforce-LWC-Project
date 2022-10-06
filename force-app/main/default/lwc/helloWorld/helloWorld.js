import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
    // data binding example
  fullname = "zero to hero";
  title = "auro";

  changeHandler(event) {
    this.title = event.target.value
  }

    // @track binding example(import track)
@track address={
    city:'Bangkok',
    postcode:1234,
    country:'Thailand'
}

trackHandler(event) {
    this.address.city=event.target.value
}

    // getter example
    users = ['Jenny','Kory','David']
    num1=10
    num2=20
    
    
get multiply() {
    return this.num1*this.num2
}

get firstUser() {
    return this.users[0].toLocaleUpperCase()
}




}
