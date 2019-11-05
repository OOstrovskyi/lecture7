import React from "react";

export default class Counter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            score: 0,
        }
    }
    
    incScore = () => {
        if (this.state.score === 10)
            this.setState({score: 0})
        else      
            this.setState(prevState => {
                return {score: prevState.score + 1}
      })
    }
    
    render() {
      let result='';
      const score = this.state.score;
      
      if (score>=1 && score<=4) result='poor';
      if (score>=5 && score<=7) result='average';
      if (score>=8 && score<=10) result='good';
      
    return (
      <div>
        <button onClick={this.incScore}>Score +1</button>
        <p>Your score is: {result}</p>
        <p>{score}</p>
      </div>
    )
  }
}