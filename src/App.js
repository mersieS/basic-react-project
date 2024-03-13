import React from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import './App.css';


// const App = () => {
//   return <h1 title="Freestyle atarım polisin sirenine">Mahallede <span>(mıdi tenyo)</span> bir olay var deli mi ne?</h1>; // => React.createElement('h1', {title: 'bla bla'}, "...");
// };

// class App extends React.Component {
//   render() {
//     return <h1 title="Freestyle atarım polisin sirenine">Mahallede bir olay var deli mi ne?</h1>;
//   }
// }

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Kursu bitir'},
    {id: 'cg2', text: 'Kurs hakkında her şeyi öğren'},
    {id: 'cg3', text: 'Kurstaki diğer öğrencilere yardım et'}
  ];

  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal);
    console.log(courseGoals);
  };

  return (
    <div className="course-goals">
    <h2>Kurs Hedefleri</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals} />
  </div>
  );
};

export default App;
