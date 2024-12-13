import "./App.css";
import CourseGoal from "./components/CourseGoal";

function App() {
  return (
    <>
      <div className="border-2 border-sky-500">
        <CourseGoal title="Learn React with TS">
          {" "}
          "learning for the improvement"
        </CourseGoal>
      </div>
    </>
  );
}

export default App;
