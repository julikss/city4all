import { useState, useEffect, useRef } from "react";
import "./SidePanel.css";

import LocationDisplay from "./LocationDisplay";
import CommentForm from "./Comments/CommentForm";

export default function SidePanel({
  points,
  map,
  markers,
  selectedId,
  setSelectedId
}) {
  const [openItem, setOpenItem] = useState(null);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [currentPoint, setCurrentPoint] = useState(null);

  const itemsRef = useRef({});

  useEffect(() => {
    if (selectedId) {
      setOpenItem(selectedId);
      const el = itemsRef.current[selectedId];
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedId]);

  const openCommentForm = (point) => {
    setCurrentPoint(point);
    setShowCommentBox(true);
  };

  const goToPoint = (p) => {
    if (!map) return;
    map.flyTo([p.position.lat, p.position.lng], 18, { duration: 1 });
    markers[p.id]?.openPopup();
  };

  return (
    <div className="side-panel">
      <div className="side-panel-inner">

        <h2>Місця інклюзивності</h2>
        <hr />

        <div className="items-list">
          {points.map((p) => (
            <LocationDisplay
              key={p.id}
              point={p}
              ref={(el) => (itemsRef.current[p.id] = el)}
              openItem={openItem}
              setOpenItem={setOpenItem}
              setSelectedId={setSelectedId}
              goToPoint={goToPoint}
              openCommentForm={openCommentForm}
            />
          ))}
        </div>
      </div>

      {showCommentBox && (
        <CommentForm
          point={currentPoint}
          onClose={() => setShowCommentBox(false)}
        />
      )}
    </div>
  );
}
