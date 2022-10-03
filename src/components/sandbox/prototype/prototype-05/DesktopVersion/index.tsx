import HeaderSection from "./HeaderSection";
import SponsersVendors from "./SponsersVendors";
import PrimaryButton from "./global/PrimaryButton";
import HorizantalDivider from "./global/HorizantalDivider";
import { useState } from "react";
import IconTab from "./IconTab";
import newsIcon from "./../assets/news-icon.svg";
import dealIcon from "./../assets/deal-icon.svg";
import productIcon from "./../assets/products-icon.svg";
import aboutIcon from "./../assets/about-icon.svg";
import messageIcon from "./../assets/message-icon-black.svg";
import ariatIcon from "./../assets/sponsers/ariat.png";
import NewsTab from "./NewsTab";
import DealsTab from "./DealsTab";
import ProductsTab from "./ProductTab";
import AboutTab from "./AboutTab";
import EditProfileModal from "./Modals/EditProfileModal";

const DesktopVersion: React.FC = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [editProfileModalShow, setEditProfileModalShow] = useState<boolean>(false);
    return (
        <div className="relative bg-white pt-5 px-4  sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
             <EditProfileModal
                show={editProfileModalShow}
                onHide={() => setEditProfileModalShow(false)}
            />
            <HeaderSection />
            <div className="grid grid-cols-1 lg:grid-cols-[60%_calc(40%_-_24px)] xl:grid-cols-[68%_calc(32%_-_24px)] 2xl:grid-cols-[72%_calc(28%_-_24px)] gap-6 pb-4">
                <div>
                    <div className="flex gap-2 items-center">
                        <div className="overflow-hidden rounded-full w-[80px] h-[80px]">
                            <img
                                src={ariatIcon}
                                alt="profile"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div>
                            <h1 className="m-0 text-[40px] text-[#122B46] font-bold">
                                Ariat
                            </h1>
                            <p className="m-0 opacity-50">Apparel</p>
                        </div>
                    </div>
                    <IconTab
                        captions={[
                            "News",
                            "Deals",
                            "Products",
                            "About",
                            "Message",
                        ]}
                        icons={[
                            newsIcon,
                            dealIcon,
                            productIcon,
                            aboutIcon,
                            messageIcon,
                        ]}
                        selected={currentTab}
                        onChange={(index) => setCurrentTab(index)}
                        onEditProfile={() => setEditProfileModalShow(true)}
                        className="mt-6"
                    />
                    <HorizantalDivider />
                    {currentTab === 0 && <NewsTab />}
                    {currentTab === 1 && <DealsTab />}
                    {currentTab === 2 && <ProductsTab />}
                    {currentTab === 3 && <AboutTab />}
                </div>

                <div className="hidden md:block">
                    <div className="rounded-xl mt-[100px] shadow-[0_0_10px_rgba(0,0,0,.3)] p-6">
                        <SponsersVendors />
                        <PrimaryButton
                            caption="MORE"
                            className="m-auto w-[80%] block mt-4"
                        />
                    </div>
                    <div className="rounded-xl shadow-[0_0_10px_rgba(0,0,0,.3)] p-6 mt-6">
                        <SponsersVendors />
                        <PrimaryButton
                            caption="MORE"
                            className="m-auto w-[80%] block mt-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopVersion;
