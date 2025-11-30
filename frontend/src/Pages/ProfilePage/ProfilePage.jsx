import "./ProfilePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import { UserIcon, StarIcon, MapPinIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function ProfilePage() {
  const savedPlaces = [
    { id: 1, name: "Ліфт", address: "вул. Городецького, 10" },
    { id: 2, name: "Пандус", address: "вул. Хрещатик, 1" },
  ];

  const visitedPlaces = [
    { id: 3, name: "Доступний туалет", address: "вул. Прорізна, 5" },
  ];

  return (
    <div className="profile-page">
      <Navbar />

      <div className="profile-content">
        <div className="profile-header">
          <UserCircleIcon className="avatar avatar-picture" />

          <div>
            <h1 className="profile-name">Юлія</h1>
            <p className="profile-email">example@gmail.com</p>
          </div>
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <StarIcon className="stat-icon" />
            <p className="stat-number">{savedPlaces.length}</p>
            <p className="stat-label">Збережені</p>
          </div>

          <div className="stat-card">
            <MapPinIcon className="stat-icon" />
            <p className="stat-number">{visitedPlaces.length}</p>
            <p className="stat-label">Відвідані</p>
          </div>
        </div>

        <h2 className="section-title">Збережені місця</h2>
        <div className="list-container">
          {savedPlaces.map((p) => (
            <div key={p.id} className="place-item">
              <p className="place-title">{p.name}</p>
              <p className="place-address">{p.address}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title">Відвідані місця</h2>
        <div className="list-container">
          {visitedPlaces.map((p) => (
            <div key={p.id} className="place-item">
              <p className="place-title">{p.name}</p>
              <p className="place-address">{p.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
