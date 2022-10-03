import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import sliderImage from "./assets/news-header-img.png";
import lookupIcon from "./assets/lookup-icon.svg";
import Prototype04Button from "./../prototype-04/global/Prototype04Button";
const Img: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="h-[50vh] overflow-hidden">
        <img src={src} alt={alt} className="h-full object-cover" />
    </div>
);
const NewsSinglePage: React.FC = () => {
    const carouselInlineDotCustomCss =
        ".control-dots { bottom: 30px!important; }";
    return (
        <div>
            <Carousel
                showArrows={false}
                swipeable={true}
                emulateTouch={true}
                showThumbs={false}
                showStatus={false}
                dynamicHeight={true}
            >
                <Img src={sliderImage} alt="slide" />
                <Img src={sliderImage} alt="slide" />
                <Img src={sliderImage} alt="slide" />
                <Img src={sliderImage} alt="slide" />
            </Carousel>
            <style>{carouselInlineDotCustomCss}</style>
            <div className="bg-white rounded-2xl px-4 py-6 -mt-6 z-[10000] relative">
                <div className="flex gap-3 items-center">
                    <div className="text-[24px] font-semibold text-[#122B46]">
                        Beth Cross signing at Ariat tent today!
                    </div>
                    <div className="min-w-[30px]">
                        <button>
                            <img src={lookupIcon} alt="button" />
                        </button>
                    </div>
                </div>

                <p className="text-sm text-[#3C4B71] mt-6">
                    Introducing...the essential riding top in the favorite
                    EQUESTRIAN design! The design wraps around the tee, and
                    includes fun contrast stitching on the body, and our motto
                    "good rides only" runs up the sleeve in script font.
                    includes fun contrast stitching on the body, and our motto
                    "good rides only" runs up the sleeve in script font.
                </p>
                <Prototype04Button
                    caption="MORE"
                    arrowIcon={true}
                    type={1}
                    className="mt-6 mx-auto max-w-[280px] block"
                />
            </div>
        </div>
    );
};
export default NewsSinglePage;
