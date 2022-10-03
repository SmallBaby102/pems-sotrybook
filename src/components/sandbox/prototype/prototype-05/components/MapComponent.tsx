import L from "leaflet";

import { MapContainer, TileLayer, useMap, Popup } from "react-leaflet";
import marker from "leaflet/dist/images/marker-icon.png";
import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import "./MapComponentCustomStyles.css";
const ResizeMap = () => {
    const map = useMap();
    setTimeout(() => map.invalidateSize(), 100);
    return null;
};

delete L.Icon.Default.prototype["_getIconUrl" as any as keyof L.Icon.Default];

L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x,
    iconUrl: marker,
    shadowUrl: markerShadow,
});

const MapComponent: React.FC<{
    popups: { position: [number, number]; icon: string; bg?: string }[];
}> = ({ popups }) => {
    return (
        <div className="overflow-hidden">
            <div className="overflow-hidden rounded-xl">
                <MapContainer
                    center={[51.505, -0.01]}
                    zoom={13}
                    scrollWheelZoom={false}
                    style={{ height: window.innerHeight - 70 }}
                    closePopupOnClick={false}
                >
                    <ResizeMap />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {popups.map((popup, index) => (
                        <Popup
                            key={"pop-" + index}
                            position={popup.position}
                            closeButton={false}
                            className={`full-map-content ${
                                popup.bg ? popup.bg : ""
                            }`}
                            maxWidth={20}
                            closeOnClick={false}
                            autoClose={false}
                        >
                            <img src={popup.icon} alt="icon" />
                        </Popup>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default MapComponent;
