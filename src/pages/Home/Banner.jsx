import { easeInOut, motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";
// import team3 from "../../assets/team/team3.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:h-[80vh]">
      <div className="space-y-3 lg:w-[450px]">
        <h1 className="text-5xl font-bold">
          The Easiest Way to Get Your New Job
        </h1>
        <p className="text-lg text-gray-500">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>
        <button className="btn btn-info text-white">Get Started</button>
      </div>

      <div>
        <motion.img
          animate={{ y: [30, 0, 30] }}
          transition={{ duration: 5, repeat: Infinity, ease: easeInOut }}
          className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-b-8 border-l-8 border-blue-400"
          src={team1}
          alt="banner image"
        />

        <motion.img
          initial={{ x: 170 }}
          animate={{ x: [170, 200, 170] }}
          transition={{
            duration: 7,
            delay: 0.5,
            repeat: Infinity,
            ease: easeInOut,
          }}
          className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-b-8 border-l-8 border-blue-400"
          src={team2}
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
