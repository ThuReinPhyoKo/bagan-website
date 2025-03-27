'use client'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon } from "leaflet"
import 'leaflet/dist/leaflet.css'

export const mapData = [
    {
        id: 1,
        name: "Ananda Temple",
        lat: 21.170806, 
        lan: 94.867856,
        img: '/assets/formap/ananda.jpg'
    },
    {
        id: 2,
        name: "Shwezigon Pagoda",
        lat: 21.195278, 
        lan: 94.893889,
        img: '/assets/formap/shwezigon.jpg'
    },
    {
        id: 3,
        name: "Dhammayangyi Temple",
        lat: 21.161975,
        lan: 94.872919,
        img: '/assets/formap/dhammayangyi.jpg'
    },
    {
        id: 4,
        name: "Thatbyinnyu Temple",
        lat: 21.16875,
        lan: 94.86295,
        img: '/assets/formap/thatbyinnyu.jpg'
    },
    {
        id: 5,
        name: "Sulamani Temple",
        lat: 21.164722,
        lan: 94.881667,
        img: '/assets/formap/sulamani.jpg'
    },
    {
        id: 6,
        name: "Gubyaukgyi Temple",
        lat: 21.157222,
        lan: 94.860833,
        img: '/assets/formap/gubyaukgyi.jpg'
    }
]

const center: [number, number] = [21.1725, 94.86];

const icon = new Icon({
    iconUrl: '/assets/svg/location-pin-svgrepo-com.svg',
    iconSize: [38,38]
})

export default function Map () {

    
    return (
        <>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "500px"}} className="rounded-xl border-4 z-40 border-blue-700 dark:border-white">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mapData.map(data => (
                    <Marker key={data.id} position={[data.lat, data.lan]} icon={icon}>
                        <Popup autoPan={true}>
                            <img src={data.img} alt="image" className="w-72 h-auto rounded-md mb-2" />
                            {data.name}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    )
}