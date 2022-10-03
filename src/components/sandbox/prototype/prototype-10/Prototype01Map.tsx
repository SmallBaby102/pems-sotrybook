import L from 'leaflet';

import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import marker from 'leaflet/dist/images/marker-icon.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

const ResizeMap = () => {
    const map = useMap();
    setTimeout(()=>map.invalidateSize(), 100);
    return null;
};

delete L.Icon.Default.prototype['_getIconUrl' as any as keyof L.Icon.Default];

L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x,
    iconUrl: marker,
    shadowUrl: markerShadow
});

const Prototype01Map = ()=>{

    return (
        <div className='overflow-hidden'>
            <div className='overflow-hidden rounded-xl'>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height:400}}>
                    <ResizeMap />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}></Marker>
                </MapContainer>
            </div>
            <h4 className='text-[#3C4B71] text-[14px]'>Directions</h4>
            <p className='text-[#3C4B7199] text-[14px] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqa...More</p>
        </div>
    )
}

export default Prototype01Map;