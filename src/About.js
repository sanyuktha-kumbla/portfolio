const About = () => {
  return (
    <div id="about">
      <h1 className="text-4xl text-center pt-20 pb-10">ABOUT ME</h1>
      <div className="flex items-center justify-center">
        <div className="grid md:grid-cols-2 w-3/5 gap-8">
          <div>
            {" "}
            <img alt="My Profile" src={require("./assets/me.jpeg")} />
          </div>
          <div>
            <p className="pb-3 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui
              lectus, feugiat ut arcu sed, porttitor tempor nulla. Quisque non
              nibh eu nisl malesuada bibendum ullamcorper at dui. Proin at
              congue dui, vitae maximus nibh. Proin dapibus erat eu mauris
              finibus, non mattis elit vehicula. Donec auctor ipsum elementum
              nunc auctor consequat. Vestibulum velit neque, imperdiet nec nulla
              sit amet, posuere laoreet mi. Aliquam pellentesque sagittis
              tempus. Aliquam a gravida nunc. Fusce id erat sed nulla luctus
              fringilla. Quisque lobortis sit amet purus pretium consectetur.
              Duis ullamcorper, ex vel venenatis condimentum, felis odio mollis
              justo, et molestie neque arcu ut metus. Sed erat sem, scelerisque
              pretium tincidunt in, volutpat et sapien. Donec fermentum nec
              ipsum non
            </p>
            <div className="flex justify-center pt-10 gap-8 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="pink"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="pink"
                viewBox="0 0 24 24"
       
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>

              <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="pink"
            viewBox="0 0 24 24"
       
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
