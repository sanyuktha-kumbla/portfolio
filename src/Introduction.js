import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div id="introduction" className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 pb-20 pt-12">
        <div className="lg:flex lg:pt-20 lg:pl-20 lg:justify-end lg:items-center">
        <div className="text-xl text-center lg:text-4xl  lg:items-center">
         <div>
         <h1 className="lg:pl-20 lg:pr-20">
          Hi, I'm{" "}
          <span className="text-pink-900 font-bold ">Sanyuktha Kumbla</span>
        </h1>
        <h1>
          {" "}and
          <span className="text-pink-300 font-bold text-xl lg:text-4xl ">
            <TypeAnimation
              sequence={[
                " I am a Software Engineer",
                1050,
                " I convert green tea into code",
                1050,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        {/* <h1>Currently in</h1> */}
        <h1 className="text-pink-300 font-bold">📍Chicago, Illinois</h1>
            </div>   
    
      </div>
        </div>
      
      <div className="hidden lg:flex md:block lg:justify-end"><img src={require('./assets/Cherry-Blossom-PNG-File.png')} alt="Logo" /></div>
    </div>
  );
};

export default Introduction;
