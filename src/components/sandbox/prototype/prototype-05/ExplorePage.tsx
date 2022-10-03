import MapComponent from "./components/MapComponent";
import FooterSection from "./components/FooterSection";
import coffeeIcon from "./assets/coffee-icon.svg";
import foodIcon from "./assets/food-icon.svg";
import horseIcon from "./assets/horse-icon.svg";
import drinkIcon from "./assets/drink-icon.svg";
import noteIcon from "./assets/note-icon.svg";
import arrowIcon from "./assets/arrow.svg";
import centerIcon from "./assets/location-center-icon.svg";
import buttonTackIcon from "./assets/button-tack-icon.svg";
import buttonCoffeeIcon from "./assets/button-coffee-icon.svg";
import buttonFoodIcon from "./assets/button-food-icon.svg";
import locationIcon from "./assets/location-icon.svg";
import thumbIcon from "./assets/thumb-icon-1.png";
import bookmarkIcon from "./assets/bookmark-icon.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HorizantalButton: React.FC<{ caption: string; icon: string }> = ({
    caption,
    icon,
}) => (
    <button className="bg-white rounded-lg flex items-center justify-center gap-2 p-3 min-w-fit">
        <img src={icon} alt="center" />
        <span>{caption}</span>
    </button>
);

const SliderCard: React.FC<{
    image: string;
    date: string;
    title: string;
    location: string;
    isMarked: boolean;
    onMark: () => void;
}> = ({ date, title, location, isMarked, onMark, image }) => (
    <div className="bg-white rounded-xl p-4 flex gap-2 mx-1">
        <div className="w-[79px] min-w-[79px] h-[91px] overflow-hidden">
            <img
                src={image}
                alt="image"
                className="w-full h-full object-cover"
            />
        </div>
        <div>
            <div className="flex gap-2">
                <div className="text-[#F7074F] text-xs text-left flex-1">
                    {date}
                </div>
                <button onClick={onMark}>
                    <img
                        src={bookmarkIcon}
                        alt="bookmark"
                        className={`${isMarked ? "" : "grayscale opacity-50"}`}
                    />
                </button>
            </div>
            <div className="text-[15px] font-semibold text-left">{title}</div>
            <div className="flex gap-2">
                <div>
                    <img
                        src={locationIcon}
                        alt="location"
                        className="!w-[20px] h-auto"
                    />
                </div>
                <div className="opacity-70 whitespace-nowrap overflow-hidden text-ellipsis text-xs">
                    {location}
                </div>
            </div>
        </div>
    </div>
);

const ExplorePage: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 h-[calc(100vh_-_90px)] overflow-hidden relative">
                <div className="absolute left-0 right-0 top-10 z-[10000] flex gap-4 px-6">
                    <div className="flex gap-6 flex-1 bg-white rounded-lg items-center px-4">
                        <div>
                            <img
                                src={arrowIcon}
                                alt="arrow"
                                className="brightness-0 scale-x-[-1]"
                            />
                        </div>
                        <div>
                            <input
                                placeholder="Around the show..."
                                className="outline-none border-none"
                            />
                        </div>
                    </div>

                    <button className="bg-white rounded-lg w-[51px] h-[51px] flex items-center justify-center">
                        <img src={centerIcon} alt="center" />
                    </button>
                </div>
                <div className="absolute left-0 right-0 top-28 z-[10000] flex gap-2 px-6 overflow-auto scrollbar-hide">
                    <HorizantalButton icon={buttonTackIcon} caption="Tack" />
                    <HorizantalButton icon={buttonFoodIcon} caption="Food" />
                    <HorizantalButton
                        icon={buttonCoffeeIcon}
                        caption="Coffee"
                    />
                    <HorizantalButton icon={buttonTackIcon} caption="Tack" />
                    <HorizantalButton icon={buttonFoodIcon} caption="Food" />
                    <HorizantalButton
                        icon={buttonCoffeeIcon}
                        caption="Coffee"
                    />
                </div>
                <MapComponent
                    popups={[
                        {
                            position: [51.505, -0.09],
                            icon: coffeeIcon,
                        },
                        {
                            position: [51.515, -0.08],
                            icon: foodIcon,
                        },
                        {
                            position: [51.509, -0.08],
                            icon: horseIcon,
                        },
                        {
                            position: [51.5, -0.08],
                            icon: drinkIcon,
                        },
                        {
                            position: [51.5, -0.07],
                            icon: noteIcon,
                            bg: "red",
                        },
                    ]}
                />
                <div className="absolute left-0 right-0 bottom-2 z-[10000]">
                    <div>
                        <Carousel
                            showArrows={false}
                            swipeable={true}
                            emulateTouch={true}
                            showThumbs={false}
                            showStatus={false}
                            centerMode={true}
                            showIndicators={false}
                        >
                            <SliderCard
                                image={thumbIcon}
                                date="Wed, Apr 28 • 5:30 PM"
                                title="Wellington Coffee Roasters"
                                location="Saddle Square • Wellington, FL"
                                isMarked={true}
                                onMark={() => {}}
                            />

                            <SliderCard
                                image={thumbIcon}
                                date="Wed, Apr 28 • 5:30 PM1"
                                title="Wellington Coffee Roasters"
                                location="Saddle Square • Wellington, FL"
                                isMarked={false}
                                onMark={() => {}}
                            />

                            <SliderCard
                                image={thumbIcon}
                                date="Wed, Apr 28 • 5:30 PM2"
                                title="Wellington Coffee Roasters"
                                location="Saddle Square • Wellington, FL"
                                isMarked={false}
                                onMark={() => {}}
                            />
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="">
                <FooterSection selected="explore" />
            </div>
        </div>
    );
};
export default ExplorePage;
