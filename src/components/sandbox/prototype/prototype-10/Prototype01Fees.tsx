import Stalls from "./assets/Fees/stalls.svg"
import Governance from "./assets/Fees/governance.svg"
import Refunds from "./assets/Fees/refunds.svg"
import Other from "./assets/Fees/other.svg"
import MoreButton from "./global/MoreButton"

const Prototype01FeeCart : React.FC<{icon: string, title: string, data:Array<any>}> = ({icon, title, data})=>{
    return (
        <div className="border-transparent sm:border-gray-300 border-[1px] border-solid rounded-md py-4 sm:p-4 relative">
            <div className="flex gap-2 items-center text-[#122B46] items-center">
                <img src={icon} alt="icon" />
                <div>{title}</div>
            </div>
            <div className="mt-8 sm:mt-0 grid grid-cols-[70px_auto] sm:grid-cols-[150px_auto] gap-4 mb-0 sm:mb-10 items-center">
                {
                data.map(row=>(
                    <>
                        <div className="mt-4 text-[14px]">{row.title}</div>
                        <div className="mt-4 text-[#3C4B71AA] text-[14px] grid grid-cols-2 sm:block gap-2">
                            {
                                row?.data.map((items:string)=>(
                                    <div className="last:hidden sm:last:block whitespace-nowrap last:whitespace-normal text-ellipsis overflow-hidden">{items}</div>
                                ))
                            }
                        </div>
                    </>
                ))
                }
            </div>
            <div className="absolute bottom-4 hidden sm:block"><MoreButton /></div>
        </div>
    )
}

const Prototype01FeeSection : React.FC<{onOverallMore: ()=>void}> = ({onOverallMore})=>{
    

    return (
        <div className="grid grid-2 md:grid-cols-2 gap-2">
            <Prototype01FeeCart
                icon={Stalls}
                title="Stalls"
                data={[
                    {title: "Temporary", data: ["30 available", "$600 per day", "First come first served. No reserving. Must pay up front."]},
                    {title: "Permanent", data: ["0 available", "$N/A", "Rubber matting. Heated. Cloase to rings."]},
                    {title: "Private", data: ["10 available", "$2000 per week", "Rubber matting. Heated. Cloase to rings."]},
                    {title: "Circuit", data: ["0 available", "$N/A", "No notes."]}
                ]}
            />
            <Prototype01FeeCart
                icon={Governance}
                title="Governance"
                data={[
                    {title: "USEF fee", data: ["$8", "Required payment by all exhibitors in USEF licensed events to fund USEF governance operations."]},
                    {title: "USEF drug fee", data: ["$15", "Required payment by all exhibitors in USEF licensed events to fund USEF drug testing operations."]},
                    {title: "USEF show pass", data: ["$45", "Required payment by all exhibitors in USEF licensed events that do not have a USEF membership."]},
                    {title: "USHJA horse fee", data: ["$7", "Required payment by all exhibitors registered for USHJA classes in the event to fund USHJA operations."]}
                ]}
            />
            <Prototype01FeeCart
                icon={Refunds}
                title="Refunds"
                data={[
                    {title: "Pre-close", data: ["100% refunded", "Cancellations prior to or on the closing date will be refunded less $50 cancellation fee and office fee."]},
                    {title: "Post-close", data: ["50% refunded", "50% of funds will be refuneded post closing date only if proof of medical issues can be provided to show management."]},
                    {title: "Weather", data: ["0%", "No refunds will be paid due to interuption of events due to weather."]},
                    {title: "Biosecurity", data: ["0%", "No refunds will be paid due to interuption of events due to biosecurity issues."]}
                ]}
            />
            <Prototype01FeeCart
                icon={Other}
                title="Other"
                data={[
                    {title: "Paddock", data: ["50 available", "$20 per day", "First come first served. No reserving. Must pay up front."]},
                    {title: "RV Hookup", data: ["23 available", "$50 per day", "We usually have permanent stall. We do not this weekend."]},
                    {title: "Ship in / Ground fee", data: ["N/A", "$24 per day", "No notes."]},
                    {title: "Internet access", data: ["N/A", "$10 per day", "No notes."]}
                ]}
            />
            <div className="sm:hidden"><MoreButton onClick={onOverallMore}/></div>
        </div>
    )
}
export default Prototype01FeeSection;
