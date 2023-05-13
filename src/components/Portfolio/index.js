import "./portfolio.scss";

const Portfolio = () => {
    return (<>
        <header>Technical Portfolio</header>
        <script src="script.js"></script>

        <div id="flex_port">
            <div id="RoboMasters">
                <h2>TAMU RoboMasters</h2>
                <div>
                    <img class="left_wrap" src="Images/RoboMastersFullTeam.jpg" alt="TAMU RoboMasters" />
                </div>
                <p class="tamu_rm">
                    A project that I have been apart of is the Simulation subteam.
                    This subteam was a part of the Computer Vision team, which was, intern, part of TAMU RoboMasters.<br />
                    Some of the work I did on this project can be found on the team's GitHub page found <a
                        href="https://github.com/TAMU-Robomasters/Simulation">here</a>.<br />

                </p>

                <p class="tamu_rm">
                    The purpose of the simulation was to be able to emulate the robots developed by the team along with
                    their
                    control capabilities.
                </p>

                <p class="tamu_rm">
                    Certain robots would be manually controlled while others were automated.
                    At times, the physical robots were unavailable to the Computer Vision team as the Hardware team were
                    working
                    on the robots to make them better.
                </p>

                <p class="tamu_rm">
                    To solve this problem, the CV Team created the Simulation SubTeam to create a simulation. With this
                    Simulation, they would hope to be able to test their new algorithms.
                    Some of these algorithms include, new de-noise algorithms, more optimal armor plate detector.
                </p>

                <p class="tamu_rm">
                    Learn more about TAMU RoboMasters <a href="https://tamurobomasters.com/">here</a>.
                </p>

                <p class="tamu_rm">
                    <iframe class="TAMURM_YT" src="https://www.youtube.com/embed/U1AJqZkFVnw" title="About TAMU RoboMasters"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </p>
            </div>

            <div id="Chess">
                <h2>Chess</h2>
                <div>
                    <img class="left_wrap"
                        src="https://repository-images.githubusercontent.com/488395489/22d1519c-feda-4238-8fce-e01b690b5094"
                        alt="Chess" />
                </div>
                <p class="chess">
                    A personal project I developed was a Java Chess program.<br />
                    This project assisted me in learning the build-in Java GUI Libraries such as Java Swing.<br />
                    External libraries such as JavaFX were not used for this project.
                </p>

                <p class="chess">
                    Additionally, this projeect helped me learn about the software design process.<br />
                    Software engineering tasks such as Design, Implementation, Testing and Maintanence.<br />
                    This also assisted me alot in learning about bug testing and determining the origin of bugs.
                </p>

                <p class="chess">
                    Future plans for this software include:<br />
                    Connecting the program to the internet to allow users to play on this software remotely<br />
                    Add security to ensure only moves are sent and processed.<br />
                    Training a Machine Learning algorithm to play chess.<br />
                    Implementing other variants of Chess such as Chess960, Fog of War, or Duck Chess.
                </p>

                <p class="chess">
                    The source code for this project can be found <a
                        href="https://github.com/MrPineapple065/Chess">here</a>.
                </p>
            </div>

            <div id="skyblock">
                <h2>SkyBlock Minecraft Mod</h2>
                <div>
                    <img class="left_wrap" src="Images/SkyBlock.jpg" width="33%" />
                </div>
                <p class="sb">
                    Another personal project I developed was a Minecraft Mod.<br />
                    This projects attempts to emulate the functionality seen in Hypixel's SkyBlock.<br />
                    This project assisted me in learning about working with existing code and adding modifications ontop of
                    it.<br />
                    This also assisted me in learning client-side and server-side programming and allocate tasks to each
                    accordingly.<br />
                </p>

                <p class="sb">
                    This mod was developed using Forge as a framework.<br />
                    Learn more about Minecraft Forge <a
                        href="https://files.minecraftforge.net/net/minecraftforge/forge/">here</a>.<br />
                </p>

                <p class="sb">
                    This project also helped me understand maintaining a standard already established.<br />
                    For example image file formats, renduring of models, and the generation of loot tables were standardized
                    within the code.
                </p>

                <p class="sb">
                    More information about SkyBlock can be found <a
                        href="https://wiki.hypixel.net/Introduction">here</a>.<br />
                    The source code for this can be found <a
                        href="https://github.com/MrPineapple070/SkyBlock-1.19.2">here</a>.<br />
                </p>
                <p class="sb">
                    <img src="Images/Forge Logo.jpg" width="128px" height="128px" />
                </p>
            </div>
        </div>
    </>);
};

export default Portfolio;
