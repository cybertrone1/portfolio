const Home = () => {
    return ( 
        <div className="home-content">
            <div className="intro">
                <p className="p">
                    developer
                </p>
                
                <div className="sub-intro">

                    <section className="intro-display">
                            <div className="img">

                            </div>
                            <p>github</p>
                            <ol>
                                <li>reactjs</li>
                                <li>html</li>
                                <li>scss</li>
                            </ol>

                            <a href="https://github.com/cybertrone1">
                                <button>
                                    click me <span  className="button-img"><div></div></span>
                                </button>
                            </a>
                    </section>

                    <section className="intro-details">
                        <h1>
                            hey, i'm
                            <span> hamzat abdulaleem i.</span>
                        </h1>
                        <h3>frontend web developer</h3>
                        <h4>
                        my experience with JavaScript, Html, and SCSS has equipped me with a robust toolkit for building modern, scalable, and maintainable web applications.
                        </h4>
                    </section>

                    <div className="intro-img">

                    </div>
                </div>
            </div>

            <div className="about">
                <a href="/about">
                    <div className="name">
                        about me
                    </div>
                </a>
                <section className="content">
                    <p>
                        I have extensive experience with JavaScript and SCSS, which I have applied in various projects, including developing dynamic interfaces for Pmsystem, creating a seamless movie search and booking experience for Movie Box, handling user input for Webpast Question, and designing responsive layouts for the Worldpeal Fruit website.
                    </p>
                    <div className="img">
                        
                    </div>
                </section>
            </div>

            <div className="skills">
                <h3>skills</h3>

                <section className="skills-img">
                    <div className="html">

                    </div>
                    <div className="js">

                    </div>
                    <div className="css">

                    </div>
                    <div className="react">

                    </div>
                    <div className="tailwind">
                        
                    </div>
                    <div className="responsive">
                        
                    </div>
                </section>
            </div>
        </div>
     );
}
 
export default Home;