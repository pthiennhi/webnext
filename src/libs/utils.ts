import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hexToRGB = (h:any) => {
  let r = "0";
  let g = "0";
  let b = "0";
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};


export function findTangentVector(pointX, pointY, circleRadius) {
  var distance = Math.sqrt(pointX * pointX + pointY * pointY);
  if (distance < circleRadius) return null;
  var angle = Math.atan2(pointY, pointX);
  var tangentAngle = Math.acos(circleRadius / distance);
  var tangentVectorAngle1 = angle + tangentAngle;
  var tangentVectorAngle2 = angle - tangentAngle;
  var tangentVector1 = {
      x: circleRadius * Math.cos(tangentVectorAngle1),
      y: circleRadius * Math.sin(tangentVectorAngle1)
  };
  var tangentVector2 = {
      x: circleRadius * Math.cos(tangentVectorAngle2),
      y: circleRadius * Math.sin(tangentVectorAngle2)
  };
  return [tangentVector1, tangentVector2];
}

export function getPeriodOfDay() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 0 && hour < 6) {
    return "night";
  } else if (hour >= 6 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else {
    return "night";
  }
}