import Box from "../shared/Box";

const TimeLineBox = () => {
  return (
    <div className="w-full lg:w-[80%] flex flex-col lg:flex-row justify-center items-center gap-14">
      <Box heading="Education" />
      <Box heading="Work Experience" />
    </div>
  );
};

export default TimeLineBox;
