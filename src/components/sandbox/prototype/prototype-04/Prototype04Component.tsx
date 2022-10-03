import { VariableIcon } from "@heroicons/react/outline";
import EditProfilePage from "./EditProfilePage";
import AddCard from "./EditProfilePage/AddCard";
import CardSettings from "./EditProfilePage/CardSettings";
import EventPage from "./EventPage";
import HorseProfileCompetitorLeft from "./HorseProfileCompetitorLeft";
import PublicProfileCompetitorLeft from "./PublicProfileCompetitorLeft";
import ManagePassword from "./EditProfilePage/ManagePassword";
import Notifications from "./EditProfilePage/Notifications";
import AddHorseUSEFNumber from "./EditProfilePage/AddHorseUSEFNumber";
import HorseUSEFNumberVerify from "./EditProfilePage/HorseUSEFNumberVerify";
import EditHorseProfilePage from "./EditHorseProfilePage";
import PublicProfileCompatitorDesktop from "./PublicProfileCompatitorDesktop";
import "./GlobalStyles.css";
import EditProfileCompatitorDesktop from "./EditProfileCompatitorDesktop/index";
import EventDetail from "./EventDetail";
import EditHorseProfileDesktop from "./EditHorseProfilePage/EditHorseProfileDesktop";

export interface Prototype04ComponentProps {
    id: string;
    icon: any;
    name: string;
    mainMetric: any;
    subMetric: any;
}

const Prototype04Component: React.FC<Prototype04ComponentProps> = (props) => {
    return (
        <div>
            {/* <PublicProfileCompetitorLeft /> */}
            {/* <HorseProfileCompetitorLeft /> */}
            {/* <EventPage /> */}
            {/* <EventDetail /> */}
            <EditProfilePage />
            {/* <CardSettings /> */}
            {/* <AddCard /> */}
            {/* <ManagePassword /> */}
            {/* <Notifications /> */}
            {/* <AddHorseUSEFNumber /> */}
            {/* <HorseUSEFNumberVerify /> */}
            {/* <EditHorseProfilePage /> */}
            {/* <PublicProfileCompatitorDesktop /> */}
            {/* <EditProfileCompatitorDesktop /> */}
            {/* <EditHorseProfileDesktop /> */}
        </div>
    );
};

Prototype04Component.defaultProps = {
    id: "",
    icon: VariableIcon,
    name: "",
    mainMetric: "",
    subMetric: "",
};

export default Prototype04Component;
