import { useState, useEffect } from "react";
import { query, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

import { db } from "../../../../../utils/firebase";

import Competition from "./../assets/dataKey/competition.svg";
import License from "./../assets/dataKey/license.svg";
import Dates from "./../assets/dataKey/dates.svg";
import Registrations from "./../assets/dataKey/registrations.svg";
import twitterIcon from "./../assets/twitter-icon.svg";
import instagramIcon from "./../assets/instagram-icon.svg";
import facebookIcon from "./../assets/facebook-icon.svg";
import HorizantalDivider from "./global/HorizantalDivider";

const DataKeyElement: React.FC<{
    logo: any;
    title: string;
    row1: string[];
    row2?: string[];
    row3?: string[];
    icon?: boolean;
}> = ({ logo, title, row1, row2, row3, icon }) => (
    <div>
        <div className="flex items-center gap-2">
            <img src={logo} alt="logo" />
            <h3 className="text-[16px]">{title}</h3>
        </div>
        <div
            className={`grid ${
                row1.length === 1
                    ? "grid-cols-1"
                    : icon
                    ? "grid-cols-[25px_auto]"
                    : "grid-cols-[70px_auto]"
            } gap-2`}
        >
            {row1.length === 1 ? (
                <>
                    <div className="text-[14px] text-[#3C4B71] opacity-70">
                        {row1[0]}
                    </div>
                    {row2 && (
                        <div className="text-[14px] text-[#3C4B71] opacity-70">
                            {row2[0]}
                        </div>
                    )}
                    {row3 && (
                        <div className="text-[14px] text-[#3C4B71] opacity-70">
                            {row3[0]}
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className="text-[14px] text-[#3C4B71]">
                        {icon ? <img src={row1[0]} alt="icon" /> : row1[0]}
                    </div>
                    <div
                        className={`text-[14px] text-[#3C4B71] opacity-70 ${
                            icon ? "underline" : ""
                        }`}
                    >
                        {row1[1]}
                    </div>
                    {row2 && (
                        <>
                            {" "}
                            <div className="text-[14px] text-[#3C4B71]">
                                {icon ? (
                                    <img src={row2[0]} alt="icon" />
                                ) : (
                                    row2[0]
                                )}
                            </div>
                            <div
                                className={`text-[14px] text-[#3C4B71] opacity-70 ${
                                    icon ? "underline" : ""
                                }`}
                            >
                                {row2[1]}
                            </div>
                        </>
                    )}

                    {row3 && (
                        <>
                            <div className="text-[14px] text-[#3C4B71]">
                                {icon ? (
                                    <img src={row3[0]} alt="icon" />
                                ) : (
                                    row3[0]
                                )}
                            </div>
                            <div
                                className={`text-[14px] text-[#3C4B71] opacity-70 ${
                                    icon ? "underline" : ""
                                }`}
                            >
                                {row3[1]}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    </div>
);


const DataKey: React.FC<{values?: any[]}> = ({values=[]}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
             {
                values?.length && values.map((item, index) => {
                    return  <DataKeyElement
                                key={index}
                                logo={item.logo}
                                title={item.title}
                                row1={item.row1}
                                row2={item.row2}
                                row3={item.row3}
                                icon={item.icon}
                            />
                })
            }
        </div>
    );
};
const P: React.FC = ({ children }) => (
    <p className="text-[#3C4B71] opacity-70 leading-[25px] mt-4 text-sm">
        {children}
    </p>
);
const AboutTab: React.FC = () => {
    const [desc1, setDesc1] = useState(`Growing up on a working horse farm in Pennsylvania, I was one of
        eight kids and spent my childhood surrounded by animals –
        horses, sheep, pigs, chickens, dogs and cats. I have a special
        memory of sitting in front of the TV in 1973, watching
        Secretariat win the Kentucky Derby. He went on to win the Triple
        Crown, setting records that still stand today. Secretariat’s big
        heart and competitive spirit were the motivations behind naming
        our company Ariat.`);
    const [desc2, setDesc2] = useState(`Ariat was founded as “The New Breed of Boot.” We were the first
        to integrate athletic footwear technology into boots for
        equestrian athletes. Today, our world-class product team builds
        innovative and award-winning performance products for all types
        of outdoor and work environments. We are honored to be a part of
        your story and thank you for being part of ours.`);
        const [values, setValues] = useState([
            {
                logo:Competition,
                title:"Contact",
                row1:["Phone", "+1 202 387 9798"],
                row2:["Email", "contact@ariat.com"]
            },
            {
                logo:License,
                title:"Location",
                row1:["123 Smith St"],
                row2:["MIddlebrug VA 20117"],
                row3:["United States"]
            },
            {
                logo:Dates,
                title:"Website",
                row1:["ariat.com"]
            },
            {
                logo:Registrations,
                title:"Socials",
                row1:[facebookIcon, "facebook.com/ariatapparel"],
                row2:[instagramIcon, "@ariatapparl"],
                row3:[twitterIcon, "@ariatweets"],
                icon:true
            }
    
        ])
    
        useEffect(() => {
            try {
                setDoc(doc(db, "prototype_05", "about"), {data: values, 
                            desc1,
                            desc2
                        });
              } catch (err) {
                    console.log(err)
              }
        }, [])
    return (
        <div>
            <DataKey values={values}/>
            <HorizantalDivider />
            <h2>About</h2>
            <P>
                {desc1}
            </P>
            <P>
                {desc2}
            </P>
        </div>
    );
};

export default AboutTab;
