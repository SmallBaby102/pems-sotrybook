import Prototype04Button from "../global/Prototype04Button";

import backIcon from "../assets/arrow-left.svg";
import emailIcon from "../assets/email.svg";

const HorseUSEFNumberVerify: React.FC = () => {
    return (
        <div className="p-6">
            <div className="text-[24px] flex items-center gap-2">
                <button>
                    <img src={backIcon} alt="back" />
                </button>
                Add horse
            </div>
            <div className="mt-10 flex gap-4 items-center border-gray-300 border-solid border-[1px] bg-white p-3 rounded-xl">
                <div className="min-w-[25px]">
                    <img src={emailIcon} alt="email" className="w-full" />
                </div>
                <div className="text-[#777E85]">
                    A verification email was sent to the email address on file
                    with the USEF for the membership number you entered.
                </div>
            </div>
            <div className="w-[70%] mt-[180px] mx-auto">
                <Prototype04Button caption="OPEN MAIL APP" type={1} />
            </div>
            <div className="text-center text-[#777E85] mt-10">OR</div>
            <div className="text-[#120D26] my-10 text-center">
                Don’t have a USEF number?{" "}
                <a className="text-[#F7074F]">Continue &gt;</a>
            </div>
        </div>
    );
};

export default HorseUSEFNumberVerify;
