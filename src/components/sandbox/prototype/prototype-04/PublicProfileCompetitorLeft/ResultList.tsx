import profile1 from "../assets/horse-pic-1.png";
import profile2 from "../assets/horse-pic-2.png";
import profile3 from "../assets/horse-pic-3.png";
import profile4 from "../assets/horse-pic-4.png";
import profile5 from "../assets/horse-pic-5.png";
import profile6 from "../assets/horse-pic-6.png";
import ResultCard from "../global/ResultCard";

const FormHeader: React.FC<{ title: string }> = ({ title }) => (
    <h3 className="text-[16px] text-[#122B46] font-normal my-6">{title}</h3>
);

const ResultList: React.FC = () => {
    return (
        <div>
            <FormHeader title="RESULTS" />
            <ResultCard
                title="HITS Winter Festival 2022"
                description="Licensed • AA Rated • Zone 7"
                image={profile1}
                rate={1}
            />
            <ResultCard
                title="HITS Spring Festival 2022"
                description="Licensed • A Rated • Zone 7"
                image={profile2}
                rate={8}
            />
            <ResultCard
                title="Rocking Horse Schooling Event"
                description="Unlicensed • Not Rated • Zone 3"
                image={profile3}
                rate={3}
            />
            <ResultCard
                title="WEF Circuit 2022 IX"
                description="Licensed • Ab Rated • Zone 2"
                image={profile4}
                rate={4}
            />
            <ResultCard
                title="WEF Circuit 2022 VI"
                description="Licensed • A Rated • Zone 2"
                image={profile5}
                rate={2}
            />
            <ResultCard
                title="Majestic Oaks Dec 21"
                description="Clinic • Not Rated • Zone 6"
                image={profile6}
                rate={5}
            />
        </div>
    );
};
export default ResultList;
