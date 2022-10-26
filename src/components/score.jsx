import React, { Component } from 'react';

class Score extends Component {
    state = { 
        count: this.props.count
     } 

     //define handleIncrement function
/* constructor(props){
    super();
    console.log(this);
    this.handleIncrement = this.handleIncrement.bind(this);
}
     handleIncrement(){
        console.log("Event happend")
        console.log(this);
        // this.state.count +=1;
     } */

     handleIncrement = (name)=>{
      /*   console.log("Event happend")
        console.log(this); */
        console.log(name)
        this.setState({count: this.state.count + 1})
        
     }

    render() { 
        // const {count} = this.props;

        

        return (<div>
            <span style={{fontSize: '12px', color: 'darkblue', padding: '1em'}}>{this.testScore()}</span>
            <button onClick={()=>{this.handleIncrement("name")}} className='btn btn-primary btn-sm'>Increment</button>
            <img src={require('../images/Penguins.jpg')} alt="Penguins Image" height = '200' width='300'></img>
            <img src={'https://cdn.pixabay.com/photo/2017/07/27/18/45/view-2546328_960_720.png'} alt="Penguins Image" height = '200' width='300'></img>
        </div>);
    }

    testScore() {
        const { count } = this.state;
        return count === 0 ? "It can't be zero" : count;
    }
}
 
export default Score;
   