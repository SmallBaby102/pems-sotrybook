import profile1 from "../assets/profile-pic-1.png";
import profile2 from "../assets/profile-pic-2.png";
import profile3 from "../assets/profile-pic-3.png";
import profile4 from "../assets/profile-pic-4.png";
import profile5 from "../assets/profile-pic-5.png";
import profile6 from "../assets/profile-pic-6.png";

const TeamCard: React.FC<{
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

const TeamList: React.FC = () => {
    return (
        <div>
            <FormHeader title="TEAM" />
            <TeamCard
                title="Alex Lee"
                description="Trainer • Oakland, CA"
                image={profile1}
            />
            <TeamCard
                title="Micheal Ulasi"
                description="Exhibitor • Middleburg, VA"
                image={profile2}
            />
            <TeamCard
                title="Cristofer"
                description="Owner • West Palm Beach, FL"
                image={profile3}
            />
            <TeamCard
                title="David Silbia"
                description="Owner • Marshall, VA"
                image={profile4}
            />
            <TeamCard
                title="Ashfak Sayem"
                description="Owner • Lexington, KT"
                image={profile5}
            />
            <TeamCard
                title="Rocks Velkeinjen "
                description="Coach • Greenwich, CT"
                image={profile6}
            />
        </div>
    );
};
export default TeamList;
