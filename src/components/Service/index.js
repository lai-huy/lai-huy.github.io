import "./service.scss";

const Service = () => {
    return (<>
        <header>Community Service</header>
        <script src="script.js"></script>

        <div id="flex_serv">
            <div id="cls">
                <img class="left_wrap" src="Images/CLS.jpg" />
                <p class="cls">
                    During most of high school, I was entrusted to become a instructor assistant at the local buddhist
                    temple.
                    Here, I assisted the instructors with teaching new students a Traditional Vietnamese Martial Art.
                    I needed to be able to breakdown complex ideas into smaller, more easily understood concepts.<br />
                    Learn about Linh Son Temple <a href="http://www.linhsonaustin.org/">here</a>.
                </p>
            </div>

            <div id="lifeguard">
                <img class="left_wrap" src="Images/Austin Parks and Rec.png" />
                <p class="lifeguard">
                    Throughout varrious summers during high school, I worked for the City of Austin as a Lifeguard.
                    Here, I was entrusted with the welbeing and safety of patrons.<br />
                    Learn about becoming a lifeguard for the City of Austin <a
                        href="https://www.austintexas.gov/department/lifeguarding-austin">here</a>.
                </p>
            </div>
        </div>
    </>);
};

export default Service;
