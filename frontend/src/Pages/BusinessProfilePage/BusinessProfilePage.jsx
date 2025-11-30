import "./BusinessProfilePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import {
  ShieldExclamationIcon,
  CheckBadgeIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

export default function BusinessProfilePage() {
  const [isVerified, setIsVerified] = useState(true); 
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const [businesses, setBusinesses] = useState([
    {
      id: 1,
      name: "Кавʼярня Aroma",
      address: "вул. Лесі Українки, 7",
      status: "verified",
      images: [],
      features: ["Пандус", "Широкі двері", "Тактильні позначки"]
    },
    {
      id: 2,
      name: "Аптека 24",
      address: "вул. Басейна, 9",
      status: "pending",
      images: [],
      features: ["Пандус"]
    }
  ]);

  const [complaints, setComplaints] = useState([
    {
      id: 1,
      businessId: 1,
      text: "Пандус занадто крутий.",
      handled: false
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    address: "",
    latitude: "",
    longitude: "",
    features: "",
  });

  const [updates, setUpdates] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addBusiness = () => {
    setBusinesses([
      ...businesses,
      {
        id: Date.now(),
        name: form.name,
        address: form.address,
        status: "pending",
        images: [],
        features: form.features.split(",").map(f => f.trim()),
      }
    ]);

    setForm({ name: "", address: "", latitude: "", longitude: "", features: "" });
  };

  const deleteBusiness = (id) => {
    setBusinesses(businesses.filter(b => b.id !== id));
  };

  const updateBusiness = () => {
    setBusinesses(businesses.map(b => {
      if (b.id === selectedBusiness.id) {
        return selectedBusiness;
      }
      return b;
    }));

    setSelectedBusiness(null);
  };

  const addUpdate = (text) => {
    setUpdates([...updates, { id: Date.now(), text }]);
  };

  const handleComplaint = (id) => {
    setComplaints(complaints.map(c =>
      c.id === id ? { ...c, handled: true } : c
    ));
  };

  return (
    <div className="business-page">
      <Navbar />

      <div className="business-content">
        
        {!isVerified && (
          <div className="verify-warning">
            <ShieldExclamationIcon className="warning-icon" />
            <h2>Ваш акаунт не верифікований</h2>
            <p>Подайте заявку на верифікацію, щоб керувати бізнесами.</p>
            <button className="verify-button">Подати заявку</button>
          </div>
        )}

        {isVerified && (
          <>
            <h2 className="section-title">Додати бізнес</h2>

            <div className="business-form">
              <input type="text" name="name" placeholder="Назва бізнесу" value={form.name} onChange={handleChange} />
              <input type="text" name="address" placeholder="Адреса" value={form.address} onChange={handleChange} />

              <textarea name="features" placeholder="Параметри інклюзивності (через кому)" value={form.features} onChange={handleChange}></textarea>

              <button className="add-business-btn" onClick={addBusiness}>
                <PlusIcon className="add-icon" /> Додати бізнес
              </button>
            </div>

            <h2 className="section-title">Мої бізнеси</h2>

            <div className="business-list">
              {businesses.map((b) => (
                <div key={b.id} className={`business-item ${b.status}`}>
                  <h3>{b.name}</h3>
                  <p>{b.address}</p>

                  <p className={`status ${b.status}`}>
                    {b.status === "verified" ? "Верифіковано" : "На модерації"}
                  </p>

                  <div className="business-actions">
                    <button onClick={() => setSelectedBusiness(b)}>
                      <PencilIcon className="edit-icon" /> Редагувати
                    </button>

                    <button className="delete-btn" onClick={() => deleteBusiness(b.id)}>
                      <TrashIcon className="delete-icon" /> Видалити
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="section-title">Скарги та пропозиції</h2>

            <div className="complaints-box">
              {complaints.length === 0 && <p>Немає скарг</p>}

              {complaints.map((c) => (
                <div key={c.id} className="complaint-item">
                  <p>{c.text}</p>
                  {!c.handled ? (
                    <button className="handle-btn" onClick={() => handleComplaint(c.id)}>
                      Опрацьовано
                    </button>
                  ) : (
                    <span className="done-label">Опрацьовано</span>
                  )}
                </div>
              ))}
            </div>

            <h2 className="section-title">Оновлення</h2>

            <div className="updates-box">
              <textarea id="update-text" placeholder="Опис нового оновлення"></textarea>
              <button className="update-btn" onClick={() => addUpdate(document.getElementById("update-text").value)}>
                Додати оновлення
              </button>
            </div>

            <div className="updates-list">
              {updates.map((u) => (
                <div key={u.id} className="update-item">{u.text}</div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
