import React from "react";

class App extends React.Component {
 state = {
    tasks: ["make coffee", "make notes", "go for a jog", "new task"],
    currInput: "",
  };

  render = () => {
    return (
      <ul>
        {
          this.state.tasks.map((el)=>{
           return <li>{el}</li>
        })}
      </ul>
     
    );
  };
}
export default App