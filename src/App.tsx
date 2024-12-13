import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import profile from "./assets/profile.jpg";

function App() {
  return (
    <>
      <Header image={{ src: profile, alt: "image" }}>
        <h1>Your course goal</h1>
      </Header>
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
