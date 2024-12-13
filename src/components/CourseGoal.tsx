import { FC, type ReactNode } from "react";

type courseGoalType = {
  title: string;
  children: ReactNode;
};
const CourseGoal: FC<courseGoalType> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2 className="text-2xl">Title : {title} </h2>
        <p>Description:{children}</p>
      </div>
      <button className="btn"> Delete</button>
    </article>
  );
};

export default CourseGoal;
