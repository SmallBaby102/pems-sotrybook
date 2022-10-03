import React from "react";
import Profile1 from "./assets/Staff/profile-pic-1.png";
import Profile2 from "./assets/Staff/profile-pic-2.png";
import Profile3 from "./assets/Staff/profile-pic-3.png";
import Profile4 from "./assets/Staff/profile-pic-4.png";
import Profile5 from "./assets/Staff/profile-pic-5.png";
import Profile6 from "./assets/Staff/profile-pic-6.png";
import Profile7 from "./assets/Staff/profile-pic-7.png";
import Profile8 from "./assets/Staff/profile-pic-8.png";
import Profile9 from "./assets/Staff/profile-pic-9.png";
import Profile10 from "./assets/Staff/profile-pic-10.png";
import Profile11 from "./assets/Staff/profile-pic-11.png";
import Profile12 from "./assets/Staff/profile-pic-12.png";

import ArrowIcon from "./assets/more-icon.svg";
import Management from "./assets/Staff/management.svg";
import Judges from "./assets/Staff/judges.svg";
import Stewards from "./assets/Staff/stewards.svg";
import Veterinarians from "./assets/Staff/veterinarians.svg";
import Volunteers from "./assets/Staff/volunteers.svg";
import { useEffect, useState } from "react";

const breakPoint = 768;

const Prototype01ProfileCart : React.FC<{picture: string, title: string, name: string}> = ({picture, title, name})=>(
    <div className="grid grid-cols-[44px_calc(100%_-_44px)] gap-2 ml-[-30px] md:ml-0">
        <div>
            <img src={picture} alt="Profile Picture" className="rounded-full border-2 border-solid border-white" />
        </div>
        <div className="flex-col hidden md:flex">
            <span className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden">{title}</span>
            <span className="text-[12px] text-[#3C4B7199] whitespace-nowrap text-ellipsis overflow-hidden">{name}</span>
        </div>
    </div>
)

const Prototype01ProfileCartPlaceholder : React.FC<{howMany: number}> = ({ howMany })=>{
    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(()=>{
        const resizer = ()=>{
            setWindowWidth(window.innerWidth)
        }
        resizer();
        window.addEventListener("resize", resizer, true);
        return ()=>
        window.removeEventListener("resize", resizer, true);

    }, [])
    return(
    <>
    {
        windowWidth > breakPoint &&
        Array(howMany).fill(0).map(r=>(
            <div className="hidden md:block">&nbsp;</div>
        ))
    }
    </>
    )
}



const Prototype01StaffSectionManagement : React.FC<{allStaffsModal: ()=>void}> = ({allStaffsModal})=>{

    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(()=>{
        const resizer = ()=>{
            setWindowWidth(window.innerWidth)
        }
        resizer();
        window.addEventListener("resize", resizer, true);
        return ()=>
        window.removeEventListener("resize", resizer, true);

    }, [])

    return (
        <div onClick={allStaffsModal} className="grid grid-cols-2 items-center md:block border-[1px] border-gray-300 border-solid rounded-xl py-4 px-4 md:px-10">
            <div className="flex gap-2 items-center md:mb-4 flex-1">
                <img src={Management} alt="management" />
                <div>Management</div>
            </div>
            <div className="flex md:grid ml-auto grid-cols-[repeat(5,20%)] md:gap-x-2 md:gap-y-6 ">
                <Prototype01ProfileCart
                    picture={Profile1}
                    title="Show Manager"
                    name="Jennifer Tankel"
                />
                
                <Prototype01ProfileCartPlaceholder howMany={4}/>
                
                <Prototype01ProfileCart
                    picture={Profile2}
                    title="Secretary"
                    name="Cindy Holmes"
                />
                <Prototype01ProfileCart
                    picture={Profile3}
                    title="Course Designer"
                    name="Lori Barton"
                />
                {
                    windowWidth > breakPoint &&
                    <>
                        <Prototype01ProfileCart
                            picture={Profile4}
                            title="Technical Delegate"
                            name="Jason Smith"
                        />
                        <Prototype01ProfileCart
                            picture={Profile5}
                            title="Announcer"
                            name="James Macavy"
                        />
                    </>
                }
                <img src={ArrowIcon} alt="more" className="md:hidden"/>
                
            </div>
        </div>
    )
}

const Prototype01StaffSectionJudges : React.FC<{allStaffsModal: ()=>void}> = ({allStaffsModal})=>{
    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(()=>{
        const resizer = ()=>{
            setWindowWidth(window.innerWidth)
        }
        resizer();
        window.addEventListener("resize", resizer, true);
        return ()=>
        window.removeEventListener("resize", resizer, true);

    }, [])
    
    return (
        <div onClick={allStaffsModal} className="grid grid-cols-2 items-center md:block border-[1px] border-gray-300 border-solid rounded-xl py-4 px-4 md:px-10">
            <div className="flex gap-2 items-center md:mb-4 flex-1">
                <img src={Judges} alt="Judges" />
                <div>Judges & scorers</div>
            </div>
            <div className="flex md:grid ml-auto grid-cols-[repeat(5,20%)] md:gap-x-2 md:gap-y-6 ">
                <Prototype01ProfileCart
                    picture={Profile1}
                    title="Judge"
                    name="Annie Woods"
                />
                <Prototype01ProfileCart
                    picture={Profile2}
                    title="Judge"
                    name="Melanie Wyoming"
                />
                <Prototype01ProfileCart
                    picture={Profile3}
                    title="Judge"
                    name="Jacinta Burman"
                />
                {
                    windowWidth > breakPoint &&
                    <>
                        <Prototype01ProfileCart
                            picture={Profile4}
                            title="Judge"
                            name="Tom Williams"
                        />
                        <Prototype01ProfileCartPlaceholder howMany={1}/>
                        <Prototype01ProfileCart
                            picture={Profile5}
                            title="Scorer"
                            name="Jennifer Butts"
                        />
                        <Prototype01ProfileCart
                            picture={Profile6}
                            title="Scorer"
                            name="Emily Spanner"
                        />
                    </>
                }
                <img src={ArrowIcon} alt="more" className="md:hidden"/>
            </div>
        </div>
    )
}

const Prototype01StaffSectionStewards : React.FC<{allStaffsModal: ()=>void}> = ({allStaffsModal})=>{
    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(()=>{
        const resizer = ()=>{
            setWindowWidth(window.innerWidth)
        }
        resizer();
        window.addEventListener("resize", resizer, true);
        return ()=>
        window.removeEventListener("resize", resizer, true);

    }, [])
    
    return (
        <div onClick={allStaffsModal} className="grid grid-cols-2 items-center md:block border-[1px] border-gray-300 border-solid rounded-xl py-4 px-4 md:px-10">
            <div className="flex gap-2 items-center md:mb-4">
                <img src={Stewards} alt="Stewards" />
                <div>Stewards & ingates</div>
            </div>
            <div className="flex md:grid ml-auto grid-cols-[repeat(5,20%)] md:gap-x-2 md:gap-y-6 ">
                <Prototype01ProfileCart
                    picture={Profile1}
                    title="Steward"
                    name="Kate Wilcocks"
                />
                <Prototype01ProfileCart
                    picture={Profile2}
                    title="Steward"
                    name="Nacy Bets"
                />
                <Prototype01ProfileCart
                    picture={Profile3}
                    title="Steward"
                    name="Rease Yukolo"
                />
                <Prototype01ProfileCartPlaceholder howMany={2}/>
                {
                    windowWidth > breakPoint &&
                    <>
                        <Prototype01ProfileCart
                            picture={Profile4}
                            title="Ingate"
                            name="Kaleigh Jants"
                        />
                        <Prototype01ProfileCart
                            picture={Profile5}
                            title="Ingate"
                            name="Samantha Hurts"
                        />
                    </>
                }
                <img src={ArrowIcon} alt="more" className="md:hidden"/>

            </div>
        </div>
    )
}

const Prototype01StaffSectionVeterinarians : React.FC<{allStaffsModal: ()=>void}> = ({allStaffsModal})=>{
    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(()=>{
        const resizer = ()=>{
            setWindowWidth(window.innerWidth)
        }
        resizer();
        window.addEventListener("resize", resizer, true);
        return ()=>
        window.removeEventListener("resize", resizer, true);

    }, [])
    
    return (
        <div onClick={allStaffsModal} className="grid grid-cols-2 items-center md:block border-[1px] border-gray-300 border-solid rounded-xl py-4 px-4 md:px-10">
            <div className="flex gap-2 items-center md:mb-4">
                <img src={Veterinarians} alt="Veterinarians" />
                <div>Veterinarians & farriers</div>
            </div>
            <div className="flex md:grid ml-auto grid-cols-[repeat(5,20%)] md:gap-x-2 md:gap-y-6 ">
                <Prototype01ProfileCart
                    picture={Profile1}
                    title="Farrier"
                    name="Jacinta Woods"
                />
                <Prototype01ProfileCart
                    picture={Profile2}
                    title="Veterinarian"
                    name="Damian Nurol"
                />
               
               <img src={ArrowIcon} alt="more" className="md:hidden"/>

            </div>
        </div>
    )
}

const Prototype01StaffSectionVolunteers : React.FC<{allStaffsModal: ()=>void}> = ({allStaffsModal})=>{
    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(()=>{
        const resizer = ()=>{
            setWindowWidth(window.innerWidth)
        }
        resizer();
        window.addEventListener("resize", resizer, true);
        return ()=>
        window.removeEventListener("resize", resizer, true);
        
    }, [])
    
    return (
        <div onClick={allStaffsModal} className="grid grid-cols-2 items-center md:block border-[1px] border-gray-300 border-solid rounded-xl py-4 px-4 md:px-10">
            <div className="flex gap-2 items-center md:mb-4">
                <img src={Volunteers} alt="Volunteers" />
                <div>Volunteers</div>
            </div>
            <div className="flex md:grid ml-auto grid-cols-[repeat(5,20%)] md:gap-x-2 md:gap-y-6 ">
                <Prototype01ProfileCart
                    picture={Profile1}
                    title="Volunteer"
                    name="Jenny Williams"
                />
                <Prototype01ProfileCart
                    picture={Profile2}
                    title="Volunteer"
                    name="Katherine Nute"
                />
                <Prototype01ProfileCart
                    picture={Profile3}
                    title="Volunteer"
                    name="Jennifer Butts"
                />
                {
                    windowWidth > breakPoint &&
                    <>
                        <Prototype01ProfileCart
                            picture={Profile4}
                            title="Volunteer"
                            name="Emily Spanner"
                        />
                        <Prototype01ProfileCart
                            picture={Profile5}
                            title="Volunteer"
                            name="Samantha Jinda"
                        />
                        <Prototype01ProfileCart
                            picture={Profile6}
                            title="Volunteer"
                            name="Giorgia Handy"
                        />
                        <Prototype01ProfileCart
                            picture={Profile7}
                            title="Volunteer"
                            name="Wilci Yang"
                        />
                        <Prototype01ProfileCart
                            picture={Profile8}
                            title="Volunteer"
                            name="Jesse Harper"
                        />
                        <Prototype01ProfileCart
                            picture={Profile9}
                            title="Volunteer"
                            name="henry Carr"
                        />
                        <Prototype01ProfileCart
                            picture={Profile10}
                            title="Volunteer"
                            name="Liam Yella"
                        />
                        <Prototype01ProfileCart
                            picture={Profile11}
                            title="Volunteer"
                            name="Jason Smith"
                        />
                        <Prototype01ProfileCart
                            picture={Profile12}
                            title="Volunteer"
                            name="James Burman"
                        />
                    </>
                }
               
               <img src={ArrowIcon} alt="more" className="md:hidden"/>

            </div>
        </div>
    )
}

const Prototype01StaffSection : React.FC<{allStaffsModal: ()=>void}> = ({allStaffsModal})=>{
    return (
        <div className="grid grid-cols-1 gap-4">
            <Prototype01StaffSectionManagement allStaffsModal={allStaffsModal}/>
            <Prototype01StaffSectionJudges allStaffsModal={allStaffsModal}/>
            <Prototype01StaffSectionStewards allStaffsModal={allStaffsModal}/>
            <Prototype01StaffSectionVeterinarians allStaffsModal={allStaffsModal}/>
            <Prototype01StaffSectionVolunteers allStaffsModal={allStaffsModal}/>
        </div>
    )
}

export default Prototype01StaffSection;