import profile1 from "../assets/horse-pic-1.png";
import profile2 from "../assets/horse-pic-2.png";
import profile3 from "../assets/horse-pic-3.png";
import profile4 from "../assets/horse-pic-4.png";
import profile5 from "../assets/horse-pic-5.png";
import profile6 from "../assets/horse-pic-6.png";

const HorseCard: React.FC<{
    title: string;
    description: string;
    image: string;
}> = ({ title, description, image }) => (
    // To be changed to Reace router link
    <a className="flex gap-2 items-center my-4">
        <div>
            <img
                src={image}
                alt="profile picture"
                className="w-[45px] h-[45px] object-cover rounded-full"
            />
        </div>
        <div>
            <div className="text-[#122B46] text-[14px]">{title}</div>
            <div className="text-[#122B46] text-[12px] opacity-70">
                {description}
            </div>
        </div>
    </a>
);

const FormHeader: React.FC<{ title: string }> = ({ title }) => (
    <h3 className="text-[16px] text-[#122B46] font-normal my-6">{title}</h3>
);

const HorseList: React.FC = () => {
    return (
        <div>
            <FormHeader title="HORSES" />
            <HorseCard
                title="Skippy"
                description="Jumping • AA Show • Zone 4"
                image={profile1}
            />
            <HorseCard
                title="Socks"
                description="Jumping • AA Show • Zone 4"
                image={profile2}
            />
            <HorseCard
                title="Mary-William"
                description="Jumping • A Show • Zone 3"
                image={profile3}
            />
            <HorseCard
                title="Jenny James"
                description="Dressage • Test 1 • Zone 4"
                image={profile4}
            />
            <HorseCard
                title="WillGo"
                description="Eventing • Prelim • Zone 6 "
                image={profile5}
            />
            <HorseCard
                title="Jumping Jax"
                description="Eventing • CCI5* • Zone 4"
                image={profile6}
            />
        </div>
    );
};
export default HorseList;
