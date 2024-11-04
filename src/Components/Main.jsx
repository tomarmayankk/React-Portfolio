import React from "react";
const Main = () => {
  return (
    <div className="pb-4 flex items-center justify-center h-screen">
      <div>
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-6xl text-yellow-50 font-semibold">
            MAYANK TOMAR
          </h1>
        </div>
        <div className="flex items-center justify-center mb-2 ">
          <label className="text-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text neon-gradient">
            Full Stack Developer
          </label>
        </div>
        <div className="flex items-center justify-center w-auto mt-10">
          <p className="text-white text-center selection:bg-cyan-900 text-lg">
            A passionate web developer thrives on crafting dynamic,
            user-friendly websites that bring ideas to life. With an eye for
            design and a knack for problem-solving, they blend creativity with
            technical skills to create seamless digital experiences. Driven by
            curiosity and a commitment to excellence, they continuously learn
            and adapt to the latest industry trends and technologies. For them,
            every project is an opportunity to innovate, pushing the boundaries
            of what’s possible on the web.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
