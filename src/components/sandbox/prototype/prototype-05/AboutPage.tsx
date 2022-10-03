import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import slider1 from "./assets/slider/1.svg";
import websiteIcon from "./assets/website-icon.svg";
import facebookIcon from "./assets/facebook-icon.svg";
import instaIcon from "./assets/instagram-icon.svg";
import twitterIcon from "./assets/twitter-icon.svg";
import pinterestIcon from "./assets/pinterest-icon.svg";

const AboutPage: React.FC = () => {
    const [more, setMore] = useState(false);
    const [about, setAbout] = useState(
        `Ariat is committed to building a different breed of company, one that reflects our core values as a team and those of our consumers. Our company values have shaped our success since 1993 Ariat is committed to building a different breed of company, one that reflects our core values as a team and those of our consumers. Our company values have shaped our success since 1993`
    );
    return (
        <div>
            <Carousel
                showArrows={false}
                swipeable={true}
                emulateTouch={true}
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <img src={slider1} />
                </div>
                <div>
                    <img src={slider1} />
                </div>
                <div>
                    <img src={slider1} />
                </div>
            </Carousel>
            <h1 className="text-[24px] text-[#122B46] font-bold">
                About Ariat
            </h1>
            <p className="text-[#122B46]">
                {more ? about : about.substring(0, 200)}
                {!more && (
                    <>
                        <span>...</span>
                        <span
                            className="text-[#F7074F] cursor-pointer"
                            onClick={() => setMore(true)}
                        >
                            {" "}
                            More &gt;
                        </span>
                    </>
                )}
                <div className="flex items-center border-y-2 border-solid border-[#777E8526] py-2 mt-2">
                    <div className="flex-1">Website</div>
                    <div className="flex gap-2">
                        <button className="bg-[#777E8526] rounded-full p-2 group hover:bg-[#F7074F]">
                            <img
                                src={websiteIcon}
                                alt="icon"
                                className="group-hover:invert"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex items-center border-b-2 border-solid border-[#777E8526] py-2">
                    <div className="flex-1">Follow us</div>
                    <div className="flex gap-2">
                        <button className="bg-[#777E8526] rounded-full p-2 group hover:bg-[#F7074F]">
                            <img
                                src={facebookIcon}
                                alt="icon"
                                className="group-hover:invert"
                            />
                        </button>
                        <button className="bg-[#777E8526] rounded-full p-2 group hover:bg-[#F7074F]">
                            <img
                                src={instaIcon}
                                alt="icon"
                                className="group-hover:invert"
                            />
                        </button>
                        <button className="bg-[#777E8526] rounded-full p-2 group hover:bg-[#F7074F]">
                            <img
                                src={twitterIcon}
                                alt="icon"
                                className="group-hover:invert"
                            />
                        </button>
                        <button className="bg-[#777E8526] rounded-full p-2 group hover:bg-[#F7074F]">
                            <img
                                src={pinterestIcon}
                                alt="icon"
                                className="group-hover:invert"
                            />
                        </button>
                    </div>
                </div>
            </p>
        </div>
    );
};

export default AboutPage;
