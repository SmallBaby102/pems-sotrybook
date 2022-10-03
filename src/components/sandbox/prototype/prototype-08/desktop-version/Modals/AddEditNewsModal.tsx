import Prototype04DrawerComponent from "../../../prototype-04/global/Prototype04DrawerComponent";
import Prototype04Input from "../../../prototype-04/global/Prototype04Input";
import ExpandableSelector from "../../components/ExpandableSelector";
import newsIcon from "./../../assets/news-icon.svg";
import webIcon from "./../../assets/web-icon-big.svg";
import addImageIcon from "./../../assets/add-image-icon.svg";
import Prototype04Button from "./../../../prototype-04/global/Prototype04Button";
import { useEffect, useState } from "react";
import statusIcon from "./../../assets/status-icon.svg";
import CameraRoleModal from "../../components/CameraRoleModal";
import ImageContainer from "../../components/ImageContainer";

interface dataType {
    status: string;
    title: string;
    description: string;
    url: string;
    productImages: [{ id: number; image: string }] | [];
}

const AddEditNewsModal: React.FC<{
    show: boolean;
    onHide: () => void;
    data?: dataType;
}> = ({ show, onHide, data }) => {
    const [form, setForm] = useState<dataType>({
        status: "",
        title: "",
        description: "",
        url: "",
        productImages: [],
    });
    useEffect(() => {
        if (data) setForm(data);
        else
            setForm({
                status: "",
                title: "",
                description: "",
                url: "",
                productImages: [],
            });
    }, [data]);

    const [cameraRoleModal, setCameraRoleModal] = useState(false);
    const cameraRoleModalValueHandle = (value: any) => {
        setForm({ ...form, productImages: value });
    };
    return (
        <Prototype04DrawerComponent
            show={show}
            onHide={onHide}
            title={data ? "Edit news item" : "Add news item"}
            maxWidth={640}
        >
            <CameraRoleModal
                show={cameraRoleModal}
                onHide={() => setCameraRoleModal(false)}
                onChange={(value) => cameraRoleModalValueHandle(value)}
                value={form.productImages}
                multiple={true}
            />
            <div>
                <ExpandableSelector
                    placeholder="Status"
                    options={[
                        { caption: "Live", value: "1" },
                        { caption: "Draft", value: "2" },
                    ]}
                    onChange={(status) => setForm({ ...form, status })}
                    value={form.status}
                    icon={statusIcon}
                />
                <Prototype04Input
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                    }
                    icon={newsIcon}
                />
                <Prototype04Input
                    type="textarea"
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                    }
                    icon={newsIcon}
                    className="mt-4"
                />
                {form.productImages.length === 0 ? (
                    <button
                        onClick={() => setCameraRoleModal(true)}
                        className="border border-solid border-[#D3DAEE] h-[83px] mt-4 flex gap-2 w-full items-center rounded-xl text-[#777E85] justify-center"
                    >
                        <img src={addImageIcon} alt=" icon" className="-ml-6" />
                        <span>Add images</span>
                    </button>
                ) : (
                    <ImageContainer
                        value={form.productImages.map((item) => item.image)}
                        onClick={() => setCameraRoleModal(true)}
                    />
                )}

                <Prototype04Input
                    type="text"
                    placeholder="Link"
                    value={form.url}
                    onChange={(e) => setForm({ ...form, url: e.target.value })}
                    icon={webIcon}
                    className="mt-4"
                />
                <div className="mt-6 flex gap-2 flex-col">
                    <Prototype04Button caption="SAVE" type={1} />
                    <Prototype04Button caption="DISCARD" type={3} />
                </div>
            </div>
        </Prototype04DrawerComponent>
    );
};
export default AddEditNewsModal;
