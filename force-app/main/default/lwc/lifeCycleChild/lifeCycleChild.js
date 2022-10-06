import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {    
    
    constructor(){
        super()
        console.log("chiled constructor called")
    }

    connectedCallback(){
        console.log("child connectedCallback called")
        throw new Error('Loading of child coponent failed')
    }

    renderedCallback(){
        console.log("child renderedCallback called")
    }


    disconnectedCallback(){
        alert('child disconnectedCallback called!!')
    }
}