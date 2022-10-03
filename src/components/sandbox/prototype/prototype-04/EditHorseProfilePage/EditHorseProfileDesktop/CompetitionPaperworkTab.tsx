import DesktopFormBlock from "./../../global/DesktopFormBlock";
import rulerIcon from "./../../assets/ruler.svg";
import { useState } from "react";
import Prototype04Input from "./../../global/Prototype04Input";
import CardLink from "./../../global/CardLink";
import MeasurementCardTypeModal from "./../Modals/MeasurementCardTypeModal";
import LeftHeelMeasurementModal from "./../Modals/LeftHeelMeasurementModal";
import RightHeelMeasurementModal from "./../Modals/RightHeelMeasurementModal copy";
import ShodStatusModal from "./../Modals/ShodStatusModal";
import closeIcon from "./../../assets/close-icon.svg";
import plusIcon from "./../../assets/plus-icon-color.svg";
import certificateIcon from "./../../assets/certificate.svg";
import ExpandableSelector from "./../../global/ExpandableSelector";
import uploadIcon from "./../../assets/upload-icon.svg";
import ButtonElement from "../../../../../elements/buttons/button/ButtonElement";
import ImageContainer from "./../../global/ImageContainer";
import Prototype04Button from "./../../global/Prototype04Button";
import syncIconGray from "./../../assets/sync-icon-gray.svg";

interface paperworkFormTypes {
    measurementCardType: [{ id: number; caption: string }] | [];
    measurmentDate: string;
    measurementHeight: string;
    leftHeelMeasurement: [{ id: number; caption: string }] | [];
    rightHeelMeasurement: [{ id: number; caption: string }] | [];
    shodStatus: [{ id: number; caption: string }] | [];
    coggingDate: [{ id: number; caption: string }] | [];
    coggingCert: [{ id: number; image: string }] | [];
    month: string;
    day: string;
    year: string;
}

const CompetitionPaperworkTab: React.FC = () => {
    const [measurementCardTypeModal, setMeasurementCardTypeModal] =
        useState(false);
    const [leftHeelMeasurementModal, setLeftHeelMeasurementModal] =
        useState(false);
    const [rightHeelMeasurementModal, setRightHeelMeasurementModal] =
        useState(false);
    const [shodStatusModal, setShodStatusModal] = useState(false);
    const [syncModalHelp, setSyncHelpModal] = useState(false);
    const [cameraRoleModal, setCameraRoleModal] = useState(false);

    const [paperworkForm, setPaperworkForm] = useState<paperworkFormTypes>({
        measurementCardType: [],
        measurmentDate: "",
        measurementHeight: "",
        leftHeelMeasurement: [],
        rightHeelMeasurement: [],
        shodStatus: [],
        coggingDate: [],
        coggingCert: [],
        month: "",
        day: "",
        year: "",
    });
    const measurementCardTypeModalValueHandle = (value: any) => {
        setPaperworkForm({ ...paperworkForm, measurementCardType: value });
    };
    const leftHeelMeasurementModalValueHandle = (value: any) => {
        setPaperworkForm({ ...paperworkForm, leftHeelMeasurement: value });
    };
    const rightHeelMeasurementModalValueHandle = (value: any) => {
        setPaperworkForm({ ...paperworkForm, rightHeelMeasurement: value });
    };
    const shodStatusModalValueHandle = (value: any) => {
        setPaperworkForm({ ...paperworkForm, shodStatus: value });
    };
    const cameraRoleModalValueHandle = (value: any) => {
        setPaperworkForm({ ...paperworkForm, coggingCert: value });
    };
    return (
        <div>
            <MeasurementCardTypeModal
                show={measurementCardTypeModal}
                onHide={() => setMeasurementCardTypeModal(false)}
                onChange={(value) => measurementCardTypeModalValueHandle(value)}
                value={paperworkForm.measurementCardType}
            />
            <LeftHeelMeasurementModal
                show={leftHeelMeasurementModal}
                onHide={() => setLeftHeelMeasurementModal(false)}
                onChange={(value) => leftHeelMeasurementModalValueHandle(value)}
                value={paperworkForm.leftHeelMeasurement}
            />
            <RightHeelMeasurementModal
                show={rightHeelMeasurementModal}
                onHide={() => setRightHeelMeasurementModal(false)}
                onChange={(value) =>
                    rightHeelMeasurementModalValueHandle(value)
                }
                value={paperworkForm.rightHeelMeasurement}
            />
            <ShodStatusModal
                show={shodStatusModal}
                onHide={() => setShodStatusModal(false)}
                onChange={(value) => shodStatusModalValueHandle(value)}
                value={paperworkForm.shodStatus}
            />
            <div className="flex flex-col divide-y mt-4">
                <div className="pb-8">
                    <h1 className="text-[20px] font-bold m-0">
                        Competition Paperwork
                    </h1>
                    <p className="text-[#122B4680] mt-2">
                        Add, edit or remove horses competition paperwork
                    </p>
                </div>

                <DesktopFormBlock
                    caption="Measurement card"
                    icon={rulerIcon}
                    className="py-2"
                >
                    <div className="flex gap-2 flex-wrap">
                        <CardLink
                            type="dropdown"
                            caption={
                                paperworkForm.measurementCardType.length === 0
                                    ? "Select type..."
                                    : paperworkForm.measurementCardType[0]
                                          .caption
                            }
                            onClick={() => setMeasurementCardTypeModal(true)}
                            className="!w-auto flex-1 min-w-[170px]"
                        />
                        <Prototype04Input
                            type="date"
                            value={paperworkForm.measurmentDate}
                            onChange={(e) =>
                                setPaperworkForm({
                                    ...paperworkForm,
                                    measurmentDate: e.target.value,
                                })
                            }
                            placeholder="Measurement date...."
                            className="mt-4 !w-auto flex-1 min-w-[170px]"
                        />
                        <Prototype04Input
                            type="text"
                            value={paperworkForm.measurementHeight}
                            onChange={(e) =>
                                setPaperworkForm({
                                    ...paperworkForm,
                                    measurementHeight: e.target.value,
                                })
                            }
                            placeholder="Height measured..."
                            className="mt-4 w-auto flex-1 min-w-[170px]"
                        />
                        <CardLink
                            type="dropdown"
                            caption={
                                paperworkForm.leftHeelMeasurement.length === 0
                                    ? "Left heel size..."
                                    : paperworkForm.leftHeelMeasurement[0]
                                          .caption
                            }
                            onClick={() => setLeftHeelMeasurementModal(true)}
                            className="w-auto flex-1 min-w-[170px]"
                        />
                        <CardLink
                            type="dropdown"
                            caption={
                                paperworkForm.rightHeelMeasurement.length === 0
                                    ? "Right heel size..."
                                    : paperworkForm.rightHeelMeasurement[0]
                                          .caption
                            }
                            onClick={() => setRightHeelMeasurementModal(true)}
                            className="w-auto flex-1 min-w-[170px]"
                        />
                        <div className="flex flex-1 gap-2 items-center">
                            <CardLink
                                type="dropdown"
                                caption={
                                    paperworkForm.shodStatus.length === 0
                                        ? "Shod status"
                                        : paperworkForm.shodStatus[0].caption
                                }
                                onClick={() => setShodStatusModal(true)}
                                className="w-auto flex-1 min-w-[170px]"
                            />
                            <button className="min-w-[24px] block mt-4">
                                <img
                                    src={closeIcon}
                                    alt="close"
                                    className="grayscale opacity-70"
                                />
                            </button>
                        </div>
                    </div>
                </DesktopFormBlock>
                <button className="flex gap-2 items-center text-[#F7074F] text-[12px]">
                    <span>
                        <img src={plusIcon} alt="icon" />
                    </span>
                    <span>Add horse</span>
                </button>
                <DesktopFormBlock
                    caption="Coggins inspection date"
                    icon={certificateIcon}
                    className="pt-6 overflow-visible my-0"
                >
                    <div
                        className={`flex gap-2 items-start relative h-[56px] z-10`}
                    >
                        <ExpandableSelector
                            options={[
                                { caption: "January", value: "1" },
                                { caption: "February", value: "2" },
                                { caption: "March", value: "3" },
                                { caption: "April", value: "4" },
                                { caption: "May", value: "5" },
                                { caption: "June", value: "6" },
                                { caption: "July", value: "7" },
                                { caption: "August", value: "8" },
                                { caption: "September", value: "9" },
                                { caption: "October", value: "10" },
                                { caption: "November", value: "11" },
                                { caption: "December", value: "12" },
                            ]}
                            onChange={(value) =>
                                setPaperworkForm({
                                    ...paperworkForm,
                                    month: value,
                                })
                            }
                            placeholder="Month..."
                            value={paperworkForm.month}
                            className="w-[200px]"
                            hasBackdrop={true}
                        />
                        <ExpandableSelector
                            options={Array(31)
                                .fill(0)
                                .map((item, index) => ({
                                    caption: index + 1,
                                    value: index + 1,
                                }))}
                            onChange={(value) =>
                                setPaperworkForm({
                                    ...paperworkForm,
                                    day: value,
                                })
                            }
                            placeholder="Day..."
                            value={paperworkForm.day}
                            className="w-[200px]"
                            hasBackdrop={true}
                        />
                        <ExpandableSelector
                            options={[
                                { caption: "2021", value: "1" },
                                { caption: "2020", value: "2" },
                            ]}
                            onChange={(value) =>
                                setPaperworkForm({
                                    ...paperworkForm,
                                    year: value,
                                })
                            }
                            placeholder="Year..."
                            value={paperworkForm.year}
                            className="w-[200px]"
                            hasBackdrop={true}
                        />
                    </div>
                </DesktopFormBlock>
                <DesktopFormBlock
                    caption="Upload coggins certificate"
                    icon={uploadIcon}
                    className="py-2 border-none my-0"
                >
                    {paperworkForm.coggingCert.length === 0 ? (
                        <ButtonElement Text="Upload image" />
                    ) : (
                        <ImageContainer
                            value={paperworkForm.coggingCert.map(
                                (item) => item.image
                            )}
                            onClick={() => {}}
                            className="!w-[200px] pl-0"
                        />
                    )}
                </DesktopFormBlock>
                <div className="py-5">
                    <DesktopFormBlock
                        caption="Save all updates"
                        icon={syncIconGray}
                    >
                        <Prototype04Button
                            caption="Save"
                            type={2}
                            className="w-auto px-12"
                        />
                    </DesktopFormBlock>
                </div>
            </div>
        </div>
    );
};

export default CompetitionPaperworkTab;
