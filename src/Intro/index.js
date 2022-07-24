import React from "react";
import "./Intro.css";

const url_dapp = 'https://diplomatics-dapp.vercel.app/';
const url_form = 'https://forms.gle/Fh5eAsaRqqaaKm5b6';

function Intro () {
    return (
        <section className="Intro">
            <div>
            <div className="IntroDescriptionContainer">
                <h1 className="IntroTitle">DIPLOMATICS. <br /> Build your <br /> reputation.</h1>
                <p className="IntroText">
                    Diplomatics is the simplest way to reward your students with nontransferable On-Chain certifications.
                </p>
                <p className="IntroText">
                    We check manually with our Curation Team, which institutions are allowed to generate Diplomas. Those certifications are important, only validated institutions should be able to issue them.
                </p>
                <div className="IntroButtonContainer">
                    <button 
                    className="IntroContactButton"
                    onClick={() => window.open(url_form, "_blank")}
                    >
                        <img
                            src="contact-us.png" 
                            alt="Contact Us Illustration"
                            className="ButtonImg"
                            >
                        </img>
                        <p className="Text1Contact">
                            Are you <br />interested?
                        </p>
                        <p className="Text2Contact">
                            Contact Us
                        </p>
                    </button>
                    <button 
                    className="IntroDappButton"
                    onClick={() => window.open(url_dapp, "_blank")}
                    >
                        <img
                            src="dapp.png" 
                            alt="Go To Dapp Illustration"
                            className="ButtonImg"
                            >
                        </img>
                        <p className="Text1Dapp">
                            Already <br />curated?
                        </p>
                        <p className="Text2Dapp">
                            Go To Dapp
                        </p>
                    </button>
                </div>
            </div>
            </div>
            <div className="IntroLogoContainer">
                <img 
                    src="diplomatic-logo.png"
                    alt="Diplomatic Logo"
                    className="IntroLogo"
                >
                </img>
            </div>
        </section>
    );
}

export { Intro };
