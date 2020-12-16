import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
class ParentComponent extends Component {
   

   constructor(props){
       super(props)

       this.changeChild=React.createRef()

   }
    
   handlechange=()=>{
    this.changeChild.current.changeopen()
   }
      render() {
        return (
          <div>
            <button onClick={this.handlechange}>
              Toggle Menu from Parent
            </button>
            <ChildComponent ref={this.changeChild} />
          </div>
        );
      }
    }

    export default ParentComponent;