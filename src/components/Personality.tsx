import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import React, { useState } from "react";
import {
  Radar
} from "react-chartjs-2";
import { playerPersonality } from "../data/playerData";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Personality: React.FC = () => {
  const [selectedTrait, setSelectedTrait] = useState<keyof typeof playerPersonality | null>(null);

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const renderRadarData = () => {
    if (!selectedTrait) return null;

    const { facets, color } = playerPersonality[selectedTrait];
    const labels = Object.values(facets).map((facet) => facet.label);
    const data = Object.values(facets).map((facet) => facet.value);

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: hexToRgba(color, 0.3), // Tailwind blue-500 with alpha
        },
      ],
    };
  };

  const radarData = renderRadarData();

  return (
    <div className="w-full h-full flex flex-col gap-y-3 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      
      <div className="flex flex-col w-full gap-y-1">
        {Object.entries(playerPersonality).map(([trait, data]) => (
          <div className="flex gap-x-2">
            <div key={trait} className="flex flex-col w-full">
              <div
                className="text-start text-sm w-full flex justify-between"
              >
                <span>{data.label}</span>
                <span>{data.score}</span>
              </div>
              

              <div className="w-full h-[10px] bg-[#495891] rounded-sm">
                <div
                  className="h-full rounded-sm"
                  style={{
                    width: `${data.score / 120 * 100}%`,
                    backgroundColor: data.color, 
                  }}
                ></div>
              </div>
            </div>

            <button 
              onClick={() => setSelectedTrait(trait as keyof typeof playerPersonality)}
              className="h-full hover:scale-120 cursor-pointer" 
            >
              <img className=" h-5 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" src="src/assets/buttons/drop-button.svg" alt="" />
            </button>
          </div>
          
        ))}
      </div>

      {radarData && (
        <div className="flex justify-center items-center h-full w-full overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* <h3 className="text-xl font-semibold mb-4 capitalize text-center">
            {selectedTrait} Facets
          </h3> */}
          <Radar
            className="flex-shrink-0"
            data={radarData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                r: {
                  min: 0,
                  max:20,
                  angleLines: { color: "#444" },
                  grid: { color: "#555" },
                  pointLabels: { color: "#fff", font: { size: 14 } },
                  ticks: {
                    color: "#ccc",
                    stepSize: 20,
                    backdropColor: "transparent",
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Personality;
