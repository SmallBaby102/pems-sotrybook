import Image1 from "../assets/HeaderSection/header-img-1.png";
import Image2 from "../assets/HeaderSection/header-img-2.png";
import Image3 from "../assets/HeaderSection/header-img-3.png";
import Image4 from "../assets/HeaderSection/header-img-4.png";
import Image5 from "../assets/HeaderSection/header-img-5.png";
import Image6 from "../assets/HeaderSection/header-img-6.png";
import Image7 from "../assets/HeaderSection/header-img-7.png";

const ImageComponent: React.FC<{ src: any; alt: string; className?: string }> =
    ({ src, alt, className }) => (
        <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${className}`}
        />
    );

const HeaderSection: React.FC = () => {
    return (
        <div className="relative mb-10">
            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[2fr_1fr_2fr_1fr_2fr] gap-2 rounded-xl overflow-hidden">
                <ImageComponent src={Image1} alt="header image" />
                <div className="grid-rows-2 gap-2 hidden xl:grid">
                    <ImageComponent src={Image2} alt="header image" />
                    <ImageComponent src={Image3} alt="header image" />
                </div>
                <ImageComponent
                    src={Image4}
                    alt="header image"
                    className="hidden md:block"
                />
                <div className="grid-rows-2 gap-2 hidden xl:grid">
                    <ImageComponent src={Image5} alt="header image" />
                    <ImageComponent src={Image6} alt="header image" />
                </div>
                <ImageComponent
                    src={Image7}
                    alt="header image"
                    className="hidden md:block"
                />
            </div>
        </div>
    );
};
export default HeaderSection;
