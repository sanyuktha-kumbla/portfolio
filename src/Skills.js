const Skills = () => {
  return (
    <div id="skills">
        {/* <br></br> */}
      <h1 className="text-4xl text-center pt-20">SKILLS</h1>
      <div className="flex items-center justify-center mt-10">
        <div className="grid md:grid-cols-2 gap-6 w-7/12">
          <div>
            <div className="p-4">
              <label className="text-2xl">HTML</label>
              <div className="w-full  bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-pink-900 h-2.5 rounded-full"
                  style={{ width: `${98}%` }}
                ></div>
              </div>
            </div>

            <div className="p-4">
              <label className="text-2xl">CSS</label>
              <div className="w-full  bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-pink-900 h-2.5 rounded-full"
                  style={{ width: `${90}%` }}
                ></div>
              </div>
            </div>

            <div className="p-4">
              <label className="text-2xl">Javascript</label>
              <div className="w-full  bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-pink-900 h-2.5 rounded-full"
                  style={{ width: `${85}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div>
           
          <div className="p-4">
              <label className="text-2xl">Angular</label>
              <div className="w-full  bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-pink-900 h-2.5 rounded-full"
                  style={{ width: `${85}%` }}
                ></div>
              </div>
            </div>

           
            <div className="p-4">
              <label className="text-2xl">React</label>
              <div className="w-full  bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-pink-900 h-2.5 rounded-full"
                  style={{ width: `${85}%` }}
                ></div>
              </div>
            </div>

            
            <div className="p-4">
              <label className="text-2xl">Node</label>
              <div className="w-full  bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-pink-900 h-2.5 rounded-full"
                  style={{ width: `${85}%` }}
                ></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
