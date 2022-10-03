import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import TabSection from "./components/TabSection";
import { useState } from "react";
import NewsPageCard from "./components/NewsPageCard";

import thumbImage1 from "./assets/thumb-image-1.png";
import thumbImage2 from "./assets/thumb-image-2.png";
import thumbImage3 from "./assets/thumb-image-3.png";
import noNews from "./assets/no-news.svg";
import DeleteConfirmationModal from "./components/DeleteConfirmationModal";

const NewsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    return (
        <>
            <DeleteConfirmationModal
                show={deleteConfirmation}
                onHide={() => setDeleteConfirmation(false)}
                onDelete={() => {}}
            />
            <div className="flex flex-col h-screen">
                <div className="">
                    <HeaderSection
                        title="News"
                        onAdd={() => {}}
                        onMenu={() => {}}
                    />
                    <TabSection
                        selected={activeTab}
                        onChange={setActiveTab}
                        tabs={["LIVE", "DRAFTS"]}
                    />
                </div>
                <div className="flex-1 m-4 overflow-auto pr-2 gap-4">
                    {activeTab === 0 && (
                        <>
                            {
                                // <div className="flex flex-col items-center gap-10 h-full min-h-[300px] justify-center">
                                //     <div> You have no news items.</div>
                                //     <img
                                //         src={noNews}
                                //         alt="No Product"
                                //         className="max-w-[192px]"
                                //     />
                                // </div>
                            }
                            <NewsPageCard
                                category="NEWS"
                                title="Beth Cross Signing..."
                                description="Ariat CEO Beth Cross signing at Ariat tent at 12:..."
                                url="Ariat CEO Beth Cross signing at Ariat tent at 12:..."
                                image={thumbImage1}
                                onDelete={() => setDeleteConfirmation(true)}
                            />
                            <NewsPageCard
                                category="NEWS"
                                title="Ariat’s not yet release..."
                                description="Never before seen boots are on display at the Aria..."
                                url="ariat.com/apparel/showa..."
                                image={thumbImage2}
                                onDelete={() => setDeleteConfirmation(true)}
                            />
                        </>
                    )}
                    {activeTab === 1 && (
                        <NewsPageCard
                            category="NEWS"
                            title="Boyd Martin signing a..."
                            description="Boyd Martin, Rolex Champion signing at Aria..."
                            url="ariat.com/apparel/showa..."
                            image={thumbImage3}
                            onDelete={() => setDeleteConfirmation(true)}
                        />
                    )}
                </div>
                <div className="">
                    <FooterSection selected="vendors" />
                </div>
            </div>
        </>
    );
};
export default NewsPage;
