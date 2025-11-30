import "./MapPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Map from "../../Components/Map/Map";
import SidePanel from "../../Components/SidePanel/SidePanel";
import { useState } from "react";

function MapPage() {
  // СТАН: який елемент вибраний
  const [selectedId, setSelectedId] = useState(null);

  // СТАН: карта та маркери (отримаємо їх із Map.jsx)
  const [mapInstance, setMapInstance] = useState(null);
  const [markers, setMarkers] = useState({});

  const places = [
    {
      id: 1,
      name: "Магазин 'Рампа+'",
      address: "вул. Хрещатик, 1",
      comments: [],
      rating: 0,
      position: { lat: 50.4501, lng: 30.5234 },
      accessibility: {
        ramp: { hasRamp: true, slope: 8, width: 100, handrails: true, surface: true },
        door: { width: 85, threshold: 3 },
        elevator: { hasElevator: false, cabinSize: null },
        tactile: { hasTactileTiles: true, notes: "плитка біля входу" },
        toilet: { accessible: false, notes: "санвузол недоступний" },
        parking: { accessibleSpaces: 1, distanceToEntrance: 15 }
      }
    },
    {
      id: 2,
      name: "Аптека 'Здоров'я'",
      address: "вул. Сагайдачного, 12",
      comments: [],
      rating: 0,
      position: { lat: 50.4583, lng: 30.519 },
      accessibility: {
        ramp: { hasRamp: true, slope: 5, width: 110, handrails: true, surface: true },
        door: { width: 92, threshold: 1 },
        elevator: { hasElevator: false, cabinSize: null },
        tactile: { hasTactileTiles: false, notes: null },
        toilet: { accessible: true, notes: "широкі двері, поручні" },
        parking: { accessibleSpaces: 0, distanceToEntrance: null }
      }
    },
    {
      id: 3,
      name: "Кав'ярня 'Боба & Кава'",
      address: "вул. Антоновича, 44",
      comments: [],
      rating: 0,
      position: { lat: 50.4365, lng: 30.5168 },
      accessibility: {
        ramp: { hasRamp: false, slope: null, width: null, handrails: null, surface: null },
        door: { width: 78, threshold: 6 },
        elevator: { hasElevator: false, cabinSize: null },
        tactile: { hasTactileTiles: false, notes: null },
        toilet: { accessible: false, notes: "немає можливості заїхати" },
        parking: { accessibleSpaces: 0, distanceToEntrance: null }
      }
    },
    {
      id: 4,
      name: "ТЦ 'Глобус'",
      address: "Майдан Незалежності, 1",
      comments: [],
      rating: 0,
      position: { lat: 50.4508, lng: 30.522 },
      accessibility: {
        ramp: { hasRamp: true, slope: 6, width: 120, handrails: true, surface: true },
        door: { width: 100, threshold: 0 },
        elevator: { hasElevator: true, cabinSize: 140 },
        tactile: { hasTactileTiles: true, notes: "тактильні елементи всередині" },
        toilet: { accessible: true, notes: "доступний на -1 поверсі" },
        parking: { accessibleSpaces: 4, distanceToEntrance: 8 }
      }
    },
    {
      id: 5,
      name: "Лікарня №3",
      address: "вул. Пимоненка, 10",
      comments: [],
      rating: 0,
      position: { lat: 50.4652, lng: 30.5031 },
      accessibility: {
        ramp: { hasRamp: true, slope: 7, width: 130, handrails: true, surface: true },
        door: { width: 95, threshold: 1 },
        elevator: { hasElevator: true, cabinSize: 160 },
        tactile: { hasTactileTiles: false, notes: "відсутні всередині будівлі" },
        toilet: { accessible: true, notes: "є на кожному поверсі" },
        parking: { accessibleSpaces: 3, distanceToEntrance: 5 }
      }
    }
  ];

  return (
    <div className="map-page">
      <Navbar />

      <div className="map-page-content">

        {/* Бокова панель */}
        <SidePanel
          points={places}
          map={mapInstance}
          markers={markers}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        {/* Мапа */}
        <Map 
          points={places}
          setMarkers={setMarkers}
          setMapInstance={setMapInstance}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

      </div>
    </div>
  );
}

export default MapPage;
