import "./qualifications.scss";

const Qualifications = () => {
    return (<>
        <header>Technical Qualifications</header>
        <script src="script.js"></script>

        <h2>Resume</h2>
        <div>
            <p class="resume">
                <iframe class="resume" src="https://drive.google.com/file/d/1RPcuAaha0OvmkaqKLNcUz6VR9HenJvZ0/preview"
                    allow="autoplay"></iframe>
            </p>
            <p>
                Read a more in-depth version of my resume <a href="resume.html">here</a>.<br />
                If the resume failed to load, download it <a
                    href="https://drive.google.com/file/d/1RPcuAaha0OvmkaqKLNcUz6VR9HenJvZ0/preview"
                    download="HuyLaiResume.pdf">here</a>.<br />
            </p>
        </div>

        <div id="flex_qual">
            <div id="skills">
                <h2>Technical Skills</h2>
                <p>
                    Software Engineering<br />
                    Software Development<br />
                    <img src="Images/Java Logo.svg" alt="Java" width="200px" height="200px" />
                    <img src="Images/Cpp Logo.svg" alt="c++" width="200px" height="200px" />
                    <img src="Images/Python Logo.svg" alt="Python" width="200px" height="200px" /><br />
                    Teamwork<br />
                    Decision Making<br />
                    Customer Service<br />
                </p>
            </div>

            <div id="interest">
                <h2>Technical Interests</h2>
                <p>
                    I am interested in learning more about Cybersecurity.<br />
                    As more of our world becomes digitized, technology and its capabilities will become increasingly
                    intertwined
                    with our lives.<br />
                    As a result, Cybersecurity will be criticalin ensuring that these devices cannot be compromised by
                    malicious
                    attackers.<br />
                    Additionally, an increasing amount of personal data about users will be more readily available as more
                    of
                    these
                    devices begin to communicate with one another.<br />
                    It is essentual that these systems cannot be compromised.
                </p>

                <p>
                    Additionally, I am intereted in Machine Learning.<br />
                    With the need for increased automation with in our new digitized word, machine learning will help is
                    ensuring
                    that these automated systems can respond to potential problems.<br />
                    We have seen the capabilities of Machine Learning with DeepMind's AlphaGo.<br />
                    Learn more about AlphaGo <a
                        href="https://www.deepmind.com/research/highlighted-research/alphago">here</a>.
                </p>
            </div>
        </div>
    </>);
};

export default Qualifications;;