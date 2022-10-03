import Prototype04DrawerComponent from "../../../prototype-04/global/Prototype04DrawerComponent";
import Prototype04Input from "../../../prototype-04/global/Prototype04Input";
import ExpandableSelector from "../../components/ExpandableSelector";
import webIcon from "./../../assets/web-icon-big.svg";
import addImageIcon from "./../../assets/add-image-icon.svg";
import Prototype04Button from "./../../../prototype-04/global/Prototype04Button";
import { useEffect, useState } from "react";
import CameraRoleModal from "../../components/CameraRoleModal";
import ImageContainer from "../../components/ImageContainer";
import tagIcon from "./../../assets/tag-icon.svg";
import statusIcon from "./../../assets/status-icon.svg";
import percentIcon from "./../../assets/percent-icon-big.svg";

interface dataType {
    status: string;
    title: string;
    description: string;
    url: string;
    productImages: [{ id: number; image: string }] | [];
    category: string;
    tags: string;
    price: string;
    coupon: string;
}

const AddEditProductModal: React.FC<{
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
        category: "",
        tags: "",
        price: "",
        coupon: "",
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
                category: "",
                tags: "",
                price: "",
                coupon: "",
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
            title={data ? "Edit product" : "Add product"}
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
                    placeholder="Product title"
                    value={form.title}
                    onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                    }
                    icon={tagIcon}
                />
                <Prototype04Input
                    type="textarea"
                    placeholder="Product description"
                    value={form.description}
                    onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                    }
                    icon={tagIcon}
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
                    placeholder="Category"
                    value={form.category}
                    onChange={(e) =>
                        setForm({ ...form, category: e.target.value })
                    }
                    icon={tagIcon}
                    className="mt-4"
                />
                <Prototype04Input
                    type="text"
                    placeholder="Tags"
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    icon={tagIcon}
                    className="mt-4"
                />
                <Prototype04Input
                    type="text"
                    placeholder="Price"
                    value={form.price}
                    onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                    }
                    icon={tagIcon}
                    className="mt-4"
                />
                <Prototype04Input
                    type="text"
                    placeholder="Coupon Code (optional)"
                    value={form.coupon}
                    onChange={(e) =>
                        setForm({ ...form, coupon: e.target.value })
                    }
                    icon={percentIcon}
                    className="mt-4"
                />
                <Prototype04Input
                    type="text"
                    placeholder="Link to product"
                    value={form.url}
                    onChange={(e) => setForm({ ...form, url: e.target.value })}
                    icon={webIcon}
                    className="mt-4"
                />
                <div className="mt-6 flex gap-2">
                    <Prototype04Button caption="PUBLISH" type={1} />
                    <Prototype04Button caption="SAVE" type={2} />
                </div>
            </div>
        </Prototype04DrawerComponent>
    );
};
export default AddEditProductModal;
