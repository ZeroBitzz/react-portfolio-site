// removes the loading page
setTimeout(() => {
  document.getElementById("loader-wrapper").style.visibility = "hidden"
}, 3000);

// clock for the website
setInterval(() => {
  const timeDisplay = document.getElementById("time");
  timeDisplay.textContent = new Date().toLocaleString().replace(", ", " - ");
}, 1000);

function App() {
  return (
    <div className="App">
    <div id="crt"> 
        <div class="scanline"></div>
    </div>
    <div class="scanline"></div>

    <header>
        <span>VERSION 3.0 (2002-2505)</span>
        <div class="dropdown">
            <button class="dropbtn">CONTACT ME</button>
            <div class="dropdown-content">
            <a href="https://www.linkedin.com/in/broderick-howell-43b0161a4/" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="https://github.com/ZeroBitzz" target="_blank" rel='noreferrer'>GITHUB</a>
            </div>
        </div>
    </header>

    <section id="main-content-section">
        <section class="subsection">
            <h2 class="subsection-h2">ABOUT ME</h2>
            <p>I am Broderick, a novice physicist/engineer, I like to build and design all sorts of gadgets and the like. Learning
              is my passion.
            </p>
        </section>

        <section class="subsection">
            <h2 class="subsection-h2">TECH SKILLS</h2>
            <ol>
                <li>Javascript</li>
                <li>React</li>
                <li>Node JS</li>
                <li>MongoDB</li>
                <li>EXPRESS</li>
                <li>CSS</li>
                <li>PYTHON</li>
                <li>HTML</li>
                <li>JEST</li>
                <li>SQL</li>
                <li>ARDUINO</li>
            </ol>
        </section>

        <section class="subsection">
            <h2 class="subsection-h2">PROJECT LINKS</h2>
            <ul>
                <li><a href="https://unique-froyo-495763.netlify.app/" target="_blank" rel='noreferrer'>password-generator</a></li>
                <li><a href="https://serene-narwhal-b92afd.netlify.app/" target="_blank" rel='noreferrer'>weather-finder</a></li>
                <li><a href="https://eloquent-haupia-e71754.netlify.app/" target="_blank" rel='noreferrer'>javascript-quiz</a></li>
                <li><a href="https://precious-nougat-884d79.netlify.app/" target="_blank" rel='noreferrer'>work-scheduler</a></li>
                <li><a href="https://github.com/ZeroBitzz/read-me-generator" target="_blank" rel='noreferrer'>read-me-generator</a></li>
            </ul>
        </section>
    </section>

    <footer>
        <span id="status-span">STATUS=[CONNECTED]</span>
        <span id="time"></span>
    </footer>

    <section id="loader-wrapper">
        <div id="loading-container">
        <span id="loading-span">LOADING...</span>
        <span class="loader"><span class="loader-inner"></span></span>
        </div>
    </section>
    
    </div>
  );
}

export default App;
