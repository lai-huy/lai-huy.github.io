import React from "react";
import { Link } from "react-router-dom";
import "./service.scss";

const Service = () => {
    return (
        <>
            <header className="service">
                <h1>Community Service</h1>
            </header>

            <a href="#cls" className="skip-link">
                Skip to Chùa Linh Sơn
            </a>
            <div id="cls">
                <img
                    className="left_wrap"
                    alt="Chùa Linh Sơn"
                    src="../../assets/images/CLS.jpg"
                />
                <p className="cls">
                    During most of high school, I was entrusted to become a
                    instructor assistant at the local buddhist temple. Here, I
                    assisted the instructors with teaching new students a
                    Traditional Vietnamese Martial Art. I needed to be able to
                    breakdown complex ideas into smaller, more easily understood
                    concepts.
                    <br />
                    Learn about Linh Son Temple{" "}
                    <Link to="http://www.linhsonaustin.org/">here</Link>.
                </p>
            </div>

            <a href="#lifeguard" className="skip-link">
                Skip to Lifeguarding
            </a>
            <div id="lifeguard">
                <img
                    className="left_wrap"
                    alt="City of Austin Department of Parks and Recreation"
                    src="../../assets/images/Austin Parks and Rec.png"
                />
                <p className="lifeguard">
                    Throughout varrious summers during high school, I worked for
                    the City of Austin as a Lifeguard. Here, I was entrusted
                    with the welbeing and safety of patrons.
                    <br />
                    Learn about becoming a lifeguard for the City of Austin{" "}
                    <Link to="https://www.austintexas.gov/department/lifeguarding-austin">
                        here
                    </Link>
                    .
                </p>
            </div>
        </>
    );
};

export default Service;
