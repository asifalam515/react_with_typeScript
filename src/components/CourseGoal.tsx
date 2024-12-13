type courseGoalType = {
  title: string;
  description: string;
};
const CourseGoal = ({ title, description }: courseGoalType) => {
  return (
    <article>
      <div>
        <h2 className="text-2xl">Title : {title} </h2>
        <p>Description:{description}</p>
      </div>
      <button className="btn"> Delete</button>
    </article>
  );
};

export default CourseGoal;
