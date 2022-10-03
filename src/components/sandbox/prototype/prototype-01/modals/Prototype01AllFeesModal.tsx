// ############################################################
/**
 * @todo Document this
 */
// ############################################################


import ModalComponent from '../global/modalComponent';
import Stalls from "../assets/Fees/stalls.svg"
import Governance from "../assets/Fees/governance.svg"
import Refunds from "../assets/Fees/refunds.svg"
import Other from "../assets/Fees/other.svg"

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 */

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/**
 * @todo Document this
 * 
 */

 const Prototype01FeeCart : React.FC<{icon: string, title: string, data:Array<any>}> = ({icon, title, data})=>{
    return (
        <div className="border-transparent border-gray-300 border-[1px] border-solid rounded-md p-4 relative">
            <div className="flex gap-2 text-[#122B46]">
                <img src={icon} alt="icon" />
                <div>{title}</div>
            </div>
            <div className="mt-8 grid grid-cols-[90px_auto] gap-4 mb-0">
                {
                data.map(row=>(
                    <>
                        <div className="mt-4 text-[14px]">{row.title}</div>
                        <div className="mt-4 text-[#3C4B71AA] text-[14px]">
                            {
                                row?.data.map((items:string)=>(
                                    <div className="text-ellipsis overflow-hidden">{items}</div>
                                ))
                            }
                        </div>
                    </>
                ))
                }
            </div>
        </div>
    )
}

const Prototype01AllFeesModal: React.FC<{show: boolean, onHide: ()=>void}> = ({show, onHide}) => {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    return ( 
            <ModalComponent 
                show={show}
                onHide={onHide}
                type="full-modal"
                title="All fees"
            >
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
            </div>
            </ModalComponent>
    );
};

export default Prototype01AllFeesModal;
