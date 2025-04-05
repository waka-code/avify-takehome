import React from 'react';
import { Label } from '../atoms/Label';

interface FuelItemProps {
  fuel: string;
  percentage: number;
  color?: string;
}

export const FuelItem: React.FC<FuelItemProps> = ({ fuel, percentage, color }) => {

  let fontCoilor = "#ffffff"
  if (fuel === "hydro" || fuel === "solar" || fuel === "wind") {
    color = "#C9CBCF"
    fontCoilor = "#000000"
  }
  return (
    <div className="flex" style={{ border: `1px solid ${color}`, gap: '15px', marginRight: '10px', padding: '5px', backgroundColor: color, color: fontCoilor }}
    >
      <Label text={fuel.toUpperCase()} />
      <Label text={`${percentage}%`} />
    </div>
  );
};