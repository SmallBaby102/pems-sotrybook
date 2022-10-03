import User from "./assets/PointOfContact/user.svg";
import Phone from "./assets/PointOfContact/phone.svg";

const Prototype01PointOfContactElement : React.FC<{icon: string, title: string}> = ({icon, title}) => (
    <div className="flex items-center gap-10 md:block">
        <img src={icon} alt="icon" />
        <p className="md:mt-4 whitespace-nowrap">{title}</p>
    </div>
)


const Prototype01PointOfContact : React.FC = ()=>{
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-x-10 gap-y-4 mt-6">
            <Prototype01PointOfContactElement
                icon={User}
                title="Jennifer Tankel"
            />
            <Prototype01PointOfContactElement
                icon={Phone}
                title="+1 202 309 9809"
            />
        </div>
    )
}

export default Prototype01PointOfContact;