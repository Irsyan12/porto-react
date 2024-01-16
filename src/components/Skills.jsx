import Skill from "./Fragments/Skill";

const Skills = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-zinc-600 justify-center mt-10 text-center">
        Skills
      </h1>
      {/* <div className="flex  md:flex-row w-full justify-center space-x-36 mt-10">
        <div className="flex flex-col w-2/6">
          <Skill skillName="Python" percentage={90} />
          <Skill skillName="JavaScript" percentage={90} />
          <Skill skillName="PHP" percentage={90} />
        </div>

        <div className="flex flex-col w-2/6">
          <Skill skillName="ReactJS" percentage={85} />
          <Skill skillName="Flutter" percentage={80} />
        </div>
      </div> */}
      <div className="justify-center items-center mt-10 w-4/6 mx-auto md:flex md:flex-row md:w-full md:justify-center md:space-x-36">
        <div className="md:flex md:flex-col md:w-4/12 lg:w-2/6">
          <Skill skillName="Python" percentage={90} />
          <Skill skillName="JavaScript" percentage={90} />
          <Skill skillName="PHP" percentage={90} />
        </div>

        <div className="md:flex md:flex-col md:w-4/12 lg:w-2/6">
          <Skill skillName="ReactJS" percentage={85} />
          <Skill skillName="Flutter" percentage={80} />
        </div>
      </div>
    </>
  );
};

export default Skills;
