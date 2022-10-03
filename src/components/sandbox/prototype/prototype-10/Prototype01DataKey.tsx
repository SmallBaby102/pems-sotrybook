import Competition from "./assets/DataKey/competition.svg";
import License from "./assets/DataKey/license.svg";
import Dates from "./assets/DataKey/dates.svg";
import Registrations from "./assets/DataKey/registrations.svg";

const Prototype01DataKeyElement : React.FC<{logo: any, title:string, row1:Array<string>, row2:Array<string>}> = ({logo, title, row1, row2})=>(
    <div>
        <div className="flex items-center gap-2">
            <img src={logo} alt="logo" />
            <h3 className="text-[16px]">{title}</h3>
        </div>
        <div className="grid grid-cols-[70px_auto] gap-2">
            <div className="text-[14px] text-[#3C4B71]">{row1[0]}</div><div className="text-[14px] text-[#3C4B71] opacity-70">{row1[1]}</div>
            <div className="text-[14px] text-[#3C4B71]">{row2[0]}</div><div className="text-[14px] text-[#3C4B71] opacity-70">{row2[1]}</div>
        </div>
    </div>
)


const Prototype01DataKey : React.FC = ()=>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            <Prototype01DataKeyElement 
                logo={Competition}
                title="Competition"
                row1={["Discipline", "Hunter Jumper"]}
                row2={["Zone", "8"]}
            />
            <Prototype01DataKeyElement 
                logo={License}
                title="License"
                row1={["Manager", "Jennifer Tankel"]}
                row2={["Rating", "Grand Prix"]}
            />
            <Prototype01DataKeyElement 
                logo={Dates}
                title="Dates"
                row1={["Start", "January 8th, 2023"]}
                row2={["End", "January 12, 2023"]}
            />
            <Prototype01DataKeyElement 
                logo={Registrations}
                title="Registrations"
                row1={["Open", "November 6th, 2022"]}
                row2={["Close", "January 5th, 2023"]}
            />
        </div>
    )
}
export default Prototype01DataKey;