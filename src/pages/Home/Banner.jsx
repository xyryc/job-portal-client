import { easeInOut, motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";
import bannerIconTop from "../../assets/team/icon-top-banner.png";
import bannerIconBottom from "../../assets/team/icon-bottom-banner.png";
// import team3 from "../../assets/team/team3.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center lg:gap-10 md:h-[80vh] pt-16">
      <div className="space-y-5 lg:w-[450px] py-6">
        <h1 className="sm:text-5xl text-4xl font-bold">
          The Easiest Way to Get Your New Job
        </h1>
        <p className="sm:text-lg text-gray-500">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>
        <a href="#latestjobs" className="btn btn-info text-white">
          Get Started
        </a>
      </div>

      <div className="hidden lg:block relative">
        <motion.img
          animate={{ y: [10, 0, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: easeInOut }}
          className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-b-8 border-l-8 border-blue-400"
          src={team1}
          alt="banner image"
        />

        <motion.img
          initial={{ x: 180, y: -50 }}
          animate={{ x: [180, 190, 180], y: -50 }}
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

        <motion.img
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: easeInOut }}
          src={bannerIconTop}
          className="absolute right-5 top-10"
          alt="banner image"
        />

        <motion.img
          animate={{ x: [100, 110, 100], y: [-20, -30, -20] }}
          transition={{ duration: 5, repeat: Infinity, ease: easeInOut }}
          src={bannerIconBottom}
          className="absolute bottom-28"
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
