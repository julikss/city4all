import {
  ArrowTrendingUpIcon,
  BuildingOffice2Icon,
  EyeDropperIcon,
  UserIcon,
  ArrowsRightLeftIcon,
  MinusSmallIcon,
  TruckIcon
} from "@heroicons/react/24/solid";
import "./AccessibilityList.css";

export default function AccessibilityList({ acc }) {
  const list = [
    {
      label: `Пандус: ${acc.ramp.hasRamp ? "є" : "немає"}`,
      icon: <ArrowTrendingUpIcon className="icon" />,
      ok: acc.ramp.hasRamp
    },
    {
      label: `Ліфт: ${acc.elevator.hasElevator ? "є" : "немає"}`,
      icon: <BuildingOffice2Icon className="icon" />,
      ok: acc.elevator.hasElevator
    },
    {
      label: `Тактильна плитка: ${
        acc.tactile.hasTactileTiles ? "є" : "немає"
      }`,
      icon: <EyeDropperIcon className="icon" />,
      ok: acc.tactile.hasTactileTiles
    },
    {
      label: `Санвузол: ${acc.toilet.accessible ? "є" : "немає"}`,
      icon: <UserIcon className="icon" />,
      ok: acc.toilet.accessible
    },
    {
      label: `Паркувальні місця: ${acc.parking.accessibleSpaces ?? "—"}`,
      icon: <TruckIcon className="icon" />,
      ok: acc.parking.accessibleSpaces > 0
    },
    {
      label: `Ширина дверей: ${acc.door.width ?? "—"} см`,
      icon: <ArrowsRightLeftIcon className="icon" />,
      ok: acc.door.width >= 90
    },
    {
      label: `Поріг: ${acc.door.threshold ?? "—"} см`,
      icon: <MinusSmallIcon className="icon" />,
      ok: acc.door.threshold <= 2
    }
  ];

  return (
    <ul className="features-list">
      {list.map((f, i) => (
        <li key={i} className={`feature-row ${f.ok ? "status-yes" : "status-no"}`}>
          {f.icon}
          <span>{f.label}</span>
        </li>
      ))}
    </ul>
  );
}
