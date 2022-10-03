import Universal from "./assets/Paperwork/universal.png";
import USEF from "./assets/Paperwork/USEF.png";
import USHJA from "./assets/Paperwork/USHJA.png";

const Prototype01PaperworkElement : React.FC<{icon: string, title: string, description: string}> = ({icon, title, description}) => (
    <div>
        <img src={icon} alt="icon" />
        <h3 className="m-0 text-[14px] font-normal">{title}</h3>
        <p className="md:mt-2 text-[14px] text-[#3C4B7199]">{description}</p>
    </div>
)


const Prototype01Paperwork : React.FC = ()=>{
    return (
        <div>
            <p className="mt-0 text-[14px] text-[#3C4B7199]">All paperwork will be completed online during registration</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-x-10 gap-y-4 mt-6">
                <Prototype01PaperworkElement
                    icon={Universal}
                    title="Universal Entry Waiver"
                    description="Exhibitor, Trainer, Owner, Coach, Spectator"
                />
                <Prototype01PaperworkElement
                    icon={USEF}
                    title="USEF Waiver & Release of Liability"
                    description="Exhibitor, Trainer, Owner, Coach"
                />
                <Prototype01PaperworkElement
                    icon={USEF}
                    title="Universal Entry Waiver"
                    description="Exhibitor, Trainer, Owner, Coach"
                />
                <Prototype01PaperworkElement
                    icon={USHJA}
                    title="USHJA Waiver & Release of Liablity "
                    description="Exhibitor, Trainer, Owner, Coach"
                />
            </div>
        </div>
    )
}

export default Prototype01Paperwork;