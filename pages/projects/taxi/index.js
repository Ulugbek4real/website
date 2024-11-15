import React, { useState, useEffect } from "react";
import { Circle, Car } from "lucide-react";

const MAX_WIDTH = 600;
const MAX_HEIGHT = 400;
const MAX_GROUP_DISTANCE = 50; // Pixels, representing 2.0 units in algorithm
const GROUP_COLORS = ["#ef4444", "#f97316", "#84cc16", "#06b6d4"];

const TaxiMatchingViz = () => {
  const [passengers, setPassengers] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [groups, setGroups] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const generateRandomPosition = () => ({
    x: Math.floor(Math.random() * (MAX_WIDTH - 60) + 30),
    y: Math.floor(Math.random() * (MAX_HEIGHT - 60) + 30),
  });

  const distance = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));

  const initializeData = () => {
    const newPassengers = Array.from({ length: 12 }, (_, i) => ({
      id: `P${i + 1}`,
      ...generateRandomPosition(),
      matched: false,
      group: null,
    }));

    const newDrivers = Array.from({ length: 5 }, (_, i) => ({
      id: `D${i + 1}`,
      ...generateRandomPosition(),
      capacity: 3,
      passengers: [],
    }));

    setPassengers(newPassengers);
    setDrivers(newDrivers);
    setMatches([]);
    setGroups([]);
  };

  const findEfficientGroups = () => {
    const availablePassengers = [...passengers].filter((p) => !p.matched);
    const groups = [];
    const used = new Set();

    for (const p1 of availablePassengers) {
      if (used.has(p1.id)) continue;

      const compatiblePassengers = availablePassengers.filter(
        (p2) => p2.id !== p1.id && !used.has(p2.id) && distance(p1, p2) <= MAX_GROUP_DISTANCE
      );

      if (compatiblePassengers.length >= 1) {
        // Sort by distance to form most efficient groups
        compatiblePassengers.sort((a, b) => distance(p1, a) - distance(p1, b));

        const group = [p1];
        used.add(p1.id);

        // Try to form groups of 3
        for (const p of compatiblePassengers) {
          if (group.length >= 3) break;
          if (group.every((existing) => distance(existing, p) <= MAX_GROUP_DISTANCE)) {
            group.push(p);
            used.add(p.id);
          }
        }

        if (group.length >= 2) {
          const centroid = {
            x: group.reduce((sum, p) => sum + p.x, 0) / group.length,
            y: group.reduce((sum, p) => sum + p.y, 0) / group.length,
          };
          groups.push({ passengers: group, centroid });
        }
      }
    }

    return groups;
  };

  const findNearestDriver = (point, availableDrivers) => {
    let minDist = Infinity;
    let nearestDriver = null;

    availableDrivers.forEach((driver) => {
      const dist = distance(driver, point);
      if (dist < minDist && driver.capacity > driver.passengers.length) {
        minDist = dist;
        nearestDriver = driver;
      }
    });

    return nearestDriver;
  };

  const matchPassengers = async () => {
    setIsRunning(true);
    const newMatches = [];
    const updatedDrivers = [...drivers];
    const updatedPassengers = [...passengers];

    // Find and match groups first
    const groups = findEfficientGroups();
    setGroups(groups);

    for (const group of groups) {
      const driver = findNearestDriver(group.centroid, updatedDrivers);

      if (driver && driver.capacity >= group.passengers.length) {
        group.passengers.forEach((passenger) => {
          const updatedPassenger = updatedPassengers.find((p) => p.id === passenger.id);
          updatedPassenger.matched = true;
          updatedPassenger.group = groups.indexOf(group);

          newMatches.push({
            driver,
            passenger: updatedPassenger,
            startTime: Date.now(),
          });

          driver.passengers.push(updatedPassenger.id);
        });

        await new Promise((resolve) => setTimeout(resolve, 500));
        setMatches([...newMatches]);
      }
    }

    // Match remaining singles
    for (const passenger of updatedPassengers) {
      if (!passenger.matched) {
        const driver = findNearestDriver(passenger, updatedDrivers);
        if (driver && driver.capacity > driver.passengers.length) {
          passenger.matched = true;
          newMatches.push({
            driver,
            passenger,
            startTime: Date.now(),
          });
          driver.passengers.push(passenger.id);

          await new Promise((resolve) => setTimeout(resolve, 500));
          setMatches([...newMatches]);
        }
      }
    }

    setPassengers(updatedPassengers);
    setDrivers(updatedDrivers);
    setIsRunning(false);
  };

  useEffect(() => {
    initializeData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          onClick={initializeData}
          disabled={isRunning}
        >
          Reset
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          onClick={matchPassengers}
          disabled={isRunning}
        >
          Match Passengers
        </button>
      </div>

      <div className="relative border border-gray-300 rounded-lg" style={{ width: MAX_WIDTH, height: MAX_HEIGHT }}>
        {/* Draw group boundaries */}
        {groups.map((group, idx) => (
          <svg key={`group-${idx}`} className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {group.passengers.map((p1, i) =>
              group.passengers
                .slice(i + 1)
                .map((p2, j) => (
                  <line
                    key={`${p1.id}-${p2.id}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke={GROUP_COLORS[idx % GROUP_COLORS.length]}
                    strokeWidth="1"
                    strokeOpacity="0.5"
                  />
                ))
            )}
          </svg>
        ))}

        {/* Draw drivers */}
        {drivers.map((driver) => (
          <div
            key={driver.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: driver.x, top: driver.y }}
          >
            <Car size={24} className="text-blue-500" />
            <div className="text-xs text-center">
              {driver.id}
              <div className="text-gray-500">
                {driver.passengers.length}/{driver.capacity}
              </div>
            </div>
          </div>
        ))}

        {/* Draw passengers */}
        {passengers.map((passenger) => (
          <div
            key={passenger.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: passenger.x, top: passenger.y }}
          >
            <Circle
              size={20}
              fill={passenger.matched ? "#22c55e" : "#ef4444"}
              className={passenger.matched ? "text-green-500" : "text-red-500"}
            />
            <div className="text-xs text-center">
              {passenger.id}
              {passenger.group !== null && <div className="text-gray-500">G{passenger.group + 1}</div>}
            </div>
          </div>
        ))}

        {/* Draw matching lines */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {matches.map(({ driver, passenger }, i) => (
            <line
              key={`${driver.id}-${passenger.id}`}
              x1={driver.x}
              y1={driver.y}
              x2={passenger.x}
              y2={passenger.y}
              stroke="#9ca3af"
              strokeWidth="1"
              strokeDasharray="4"
            />
          ))}
        </svg>
      </div>

      <div className="text-sm text-gray-600">
        <div>🔵 Drivers (current/max passengers)</div>
        <div>🔴 Unmatched Passengers</div>
        <div>🟢 Matched Passengers</div>
        <div>Colored lines show grouped passengers</div>
      </div>
    </div>
  );
};

export default TaxiMatchingViz;
