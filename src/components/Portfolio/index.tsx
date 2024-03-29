import { Link } from "react-router-dom";

import {
    CucumberPlain,
    JupyterOriginalWordmark,
    NodejsOriginal,
    NumpyOriginal,
    PandasOriginal,
    PythonOriginal,
    ReactOriginal,
    RspecOriginal,
} from "devicons-react";
import "./portfolio.scss";

const bvcog: string =
    "https://github.com/BVCOG-Contract-Management/BVGOG-Contract-Manager";
const chess: string = "https://github.com/lai-huy-075/Chess";
const forge: string =
    "https://files.minecraftforge.net/net/minecraftforge/forge/";
const mpm: string = "https://github.com/lai-huy/CSCE-421-Final-Project/";
const rm_github: string = "https://github.com/TAMU-Robomasters/Simulation";
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
                    <CucumberPlain color="#00A818" size="100" />
                    <RspecOriginal size="100" />
                </p>
            </div>
            <div id="bvcog">
                <p className="bvcog">
                    You can view the source code for this project{" "}
                    <a href={bvcog}>here</a>
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
                    className="right_wrap"
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
                    team's GitHub page found <Link to={rm_github}>here</Link>.
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

            <a href="#pos" className="skip-link">
                Skip to point of sale system
            </a>
            <div className="h2" role="heading" aria-level={2}>
                Point of Sale System
            </div>
            <div id="pos">
                <img
                    className="left_wrap"
                    src={process.env.PUBLIC_URL + "/assets/images/CFA_MSC.jpg"}
                    alt="Chick-fil-A at the Memorial Student Center"
                />
                <p className="pos">
                    A Node.js and React project that creates a Point-of-Sale
                    webpage for a Restaurant located at the Memorial Student
                    Center at Texas A&M University. Our specific restaurant was
                    Chick-fil-A.
                    <br />
                    Using Google OAuth to authenticate administrator logins,
                    adequate role-based access control is enforced.
                    <br />
                    This project also uses a Google Translate API to ensure
                    proper internationalization.
                    <br />
                    Finally, this project uses a weather API to display weather
                    information as well as recomend certain items during cooler
                    weather.
                    <br />
                    A custom REST API to communicate between the front-end and
                    the back-end of the application.
                    <br />
                    <br />
                    You can view the source code for this project{" "}
                    <a href="https://github.com/CSCE315-Spring23/Team_44_Project_3">
                        here
                    </a>
                    .
                    <br />
                    <ReactOriginal size="100" />
                    <NodejsOriginal size="100" />
                </p>
            </div>

            <a href="#mpm" className="skip-link">
                Skip to Mortality Prediction Model
            </a>
            <div className="h2" role="heading" aria-level={2}>
                Mortality Prediction Model
            </div>
            <div id="mpm">
                <img
                    className="mpm"
                    src="https://raw.githubusercontent.com/dmlc/dmlc.github.io/master/img/logo-m/xgboost.png"
                    alt="Mortality Prediction Model"
                />
                <p className="mpm">
                    Developed a predictive in-hospital mortality model utilizing
                    a dataset of several thousand patients.
                    <br />
                    Experimented with three different training methods and
                    compared their perforce.
                    <br />
                    Used Logistic Regression, Random Forest, and Extreme
                    Gradient Boosting to compare against the Professor’s Model.
                    <br />
                    The model had a final Area Under the Receiver Operating
                    Characteristic curve (AUC-ROC) Score of 0.89288 which was 5%
                    better than the Professor’s Model.
                    <br />
                    <NumpyOriginal size="100" />
                    <PandasOriginal size="100" />
                    <PythonOriginal size="100" />
                    <JupyterOriginalWordmark size="100" />
                </p>
            </div>
            <p className="youtube">
                <iframe
                    className="youtube"
                    src={process.env.PUBLIC_URL + "/assets/MPM_Report.pdf"}
                    title="Mortality Prediction Model Report"
                />
            </p>

            <a href="#chess" className="skip-link">
                Skip to chess
            </a>
            <div className="h2" role="heading" aria-level={2}>
                Chess
            </div>
            <div id="chess">
                <img
                    className="right_wrap"
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
