import { Link } from "react-router-dom";
import { CucumberPlain, RspecOriginal } from "devicons-react";
import "./portfolio.scss";

const chess: string = "https://github.com/lai-huy-075/Chess";
const forge: string =
    "https://files.minecraftforge.net/net/minecraftforge/forge/";
const github: string = "https://github.com/TAMU-Robomasters/Simulation";
const skyblock: string = "https://wiki.hypixel.net/Introduction";
const skyblock_gh: string = "https://github.com/MrPineapple070/SkyBlock-1.19.2";
const tamu_rm: string = "https://tamurobomasters.com/";

const Portfolio = () => {
    return (
        <div>
            <header className="portfolio">
                <h1>Technical Portfolio</h1>
            </header>

            <a href="#bvcog" className="skip-link">
                Skip to BVCOG CMS
            </a>
            <div className="h2" role="heading" aria-level={2}>
                Brazos Valley Council of Governments Contract Management System
            </div>
            <div id="bvcog">
                <img
                    className="left_wrap"
                    src={process.env.PUBLIC_URL + "/assets/images/BVCOG.png"}
                    alt="Brazos Valley Council of Governments"
                />
                <p className="bvcog">
                    A full stack application to serve as a contract management
                    system for Brazos Valley Council of Governments.
                    <br />
                    BVCOG sent contracts electronically to the
                    contracts@bvcog.org email address, with very little
                    description as to what the contract was about, who it was
                    with, when it expired, and whether it could be renewed.
                    <br />
                    Sometimes contracts would expire without them taking the
                    appropriate action, or they would continue perpetually on a
                    month-to-month basis resulting in disallowed costs.
                    <br />
                    <br />
                    Some features include an Amazon-style review system for
                    vendors. Users can review vendors based on how previous
                    contracts went so that better vendors can be selected in the
                    future.
                    <br />
                    Highly-customizable reports can be generated in Portable
                    Document Format for both users and contracts.
                    <br />
                    Uses RSpec and Cucumber to ensure test-driven development
                    and behavior-driven development.
                    <br />
                    <CucumberPlain size="100" />
                    <RspecOriginal size="100" />
                </p>
            </div>
            <div id="bvcog">
                <p className="bvcog">
                    You can view the source code for this project{" "}
                    <a href="https://github.com/BVCOG-Contract-Management/BVGOG-Contract-Manager">
                        here
                    </a>
                    .<br />
                    You can watch this video below that demonstrates the product
                    that a team of students and I worked on.
                </p>
            </div>
            
            <p className="youtube">
                <iframe
                    className="youtube"
                    src="https://www.youtube-nocookie.com/embed/txoTtKQXOrc?si=3Iyv0pE6UJm_2G2r"
                    title="BVCOG CMS Final Presentation & Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </p>
            
            <a href="#robomasters" className="skip-link">
                Skip to TAMU RoboMasters
            </a>
            <div className="h2" role="heading" aria-level={2}>
                TAMU RoboMasters
            </div>
            <div id="robomasters">
                <img
                    className="left_wrap"
                    src={
                        process.env.PUBLIC_URL +
                        "/assets/images/RoboMastersFullTeam.jpg"
                    }
                    alt="TAMU RoboMasters"
                />
                <p className="tamu_rm">
                    A project that I have been apart of is the Simulation
                    subteam. This subteam was a part of the Computer Vision
                    team, which was, intern, part of TAMU RoboMasters.
                    <br />
                    Some of the work I did on this project can be found on the
                    team's GitHub page found <Link to={github}>here</Link>.
                    <br />
                    <br />
                    The purpose of the simulation was to be able to emulate the
                    robots developed by the team along with their control
                    capabilities.
                    <br />
                    Certain robots would be manually controlled while others
                    were automated.
                    <br />
                    At times, the physical robots were unavailable to the
                    Computer Vision team as the Hardware team were working on
                    the robots to make them better.
                    <br />
                    <br />
                    To solve this problem, the CV Team created the Simulation
                    SubTeam to create a simulation.
                    <br />
                    With this Simulation, they would hope to be able to test
                    their new algorithms.
                    <br />
                    Some of these algorithms include, new de-noise algorithms,
                    more optimal armor plate detector.
                    <br />
                    Learn more about TAMU RoboMasters{" "}
                    <Link to={tamu_rm}>here</Link>.
                </p>
            </div>

            <p className="youtube">
                <iframe
                    title="About TAMU RoboMasters"
                    className="youtube"
                    src="https://www.youtube.com/embed/U1AJqZkFVnw"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </p>

            <a href="#pos" className="skip-link" aria-level={2}>
            <div className="h2" role="heading" aria-level={2}>
                Point of Sale System
            </div>

            <a href="#chess" className="skip-link">
                Skip to chess
            </a>
            <div className="h2" role="heading" aria-level={2}>
                Chess
            </div>
            <div id="chess">
                <img
                    className="left_wrap"
                    src="https://repository-images.githubusercontent.com/488395489/22d1519c-feda-4238-8fce-e01b690b5094"
                    alt="Chess"
                />
                <p className="chess">
                    A personal project I developed was a Java Chess program.
                    <br />
                    This project assisted me in learning the build-in Java GUI
                    Libraries such as Java Swing.
                    <br />
                    External libraries such as JavaFX were not used for this
                    project.
                    <br />
                    <br />
                    Additionally, this projeect helped me learn about the
                    software design process.
                    <br />
                    Software engineering tasks such as Design, Implementation,
                    Testing and Maintanence.
                    <br />
                    This also assisted me alot in learning about bug testing and
                    determining the origin of bugs.
                    <br />
                    <br />
                    Future plans for this software include:
                    <br />
                    Connecting the program to the internet to allow users to
                    play on this software remotely
                    <br />
                    Add security to ensure only moves are sent and processed.
                    <br />
                    Training a Machine Learning algorithm to play chess.
                    <br />
                    Implementing other variants of Chess such as Chess960, Fog
                    of War, or Duck Chess.
                    <br />
                    <br />
                    The source code for this project can be found{" "}
                    <Link to={chess}>here</Link>.
                </p>
            </div>

            <a href="#skyblock" className="skip-link">
                Skip to Hypixel SkyBlock
            </a>
            <div className="h2" role="heading" aria-level={2}>
                SkyBlock Minecraft Mod
            </div>
            <div id="skyblock">
                <img
                    className="left_wrap"
                    src={process.env.PUBLIC_URL + "/assets/images/SkyBlock.jpg"}
                    width="33%"
                    alt="Hypixel SkyBlock"
                />
                <p className="sb">
                    Another personal project I developed was a Minecraft Mod.
                    <br />
                    This projects attempts to emulate the functionality seen in
                    Hypixel's SkyBlock.
                    <br />
                    This project assisted me in learning about working with
                    existing code and adding modifications ontop of it.
                    <br />
                    This also assisted me in learning client-side and
                    server-side programming and allocate tasks to each
                    accordingly.
                    <br />
                    <br />
                    This mod was developed using Forge as a framework.
                    <br />
                    Learn more about Minecraft Forge{" "}
                    <Link to={forge}>here</Link>.<br />
                    <br />
                    This project also helped me understand maintaining a
                    standard already established.
                    <br />
                    For example image file formats, renduring of models, and the
                    generation of loot tables were standardized within the code.
                    <br />
                    <br />
                    More information about SkyBlock can be found{" "}
                    <Link to={skyblock}>here</Link>.<br />
                    The source code for this can be found{" "}
                    <Link to={skyblock_gh}>here</Link>.<br />
                    <br />
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/images/Forge_logo.jpg"
                        }
                        width="128px"
                        height="128px"
                        alt="Minecraft Forge"
                    />
                </p>
            </div>
        </div>
    );
};

export default Portfolio;
