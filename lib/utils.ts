import { Camera, Color, Layer, Point, Side, XYWH } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

// const COLORS = [
//   "#f44336",
//   "#e91e63",
//   "#9c27b0",
//   "#673ab7",
//   "#3f51b5",
//   "#2196f3",
//   "#03a9f4",
//   "#00bcd4",
//   "#009688",
//   "#4caf50",
//   "#8bc34a",
//   "#cddc39",
//   "#ffeb3b",
//   "#ffc107",
//   "#ff9800",
//   "#ff5722",
//   "#795548",
//   "#9e9e9e",
//   "#607d8b",
//   "#000000",
//   "#ffffff",
//   "#ff0000",
//   "#00ff00",
//   "#0000ff",
//   "#ffff00",
//   "#ff00ff",
//   "#00ffff",
//   "#b71c1c",
//   "#880e4f",
//   "#4a148c",
//   "#311b92",
//   "#1a237e",
//   "#0d47a1",
//   "#01579b",
//   "#006064",
//   "#004d40",
//   "#1b5e20",
//   "#33691e",
//   "#827717",
//   "#f57f17",
//   "#ff6f00",
//   "#e65100",
//   "#bf360c",
//   "#3e2723",
//   "#212121",
//   "#263238",
//   "#d32f2f",
//   "#c2185b",
//   "#7b1fa2",
//   "#512da8",
//   "#303f9f",
//   "#1976d2",
//   "#0288d1",
//   "#0097a7",
//   "#00796b",
//   "#388e3c",
//   "#689f38",
//   "#afb42b",
//   "#fbc02d",
//   "#ffa000",
//   "#f57c00",
//   "#e64a19",
//   "#5d4037",
//   "#616161",
//   "#455a64",
//   "#c62828",
//   "#ad1457",
//   "#6a1b9a",
//   "#4527a0",
//   "#283593",
//   "#1565c0",
//   "#0277bd",
//   "#00838f",
//   "#00695c",
//   "#2e7d32",
//   "#558b2f",
//   "#9e9d24",
//   "#f9a825",
//   "#ff8f00",
//   "#ef6c00",
//   "#d84315",
//   "#4e342e",
//   "#424242",
//   "#37474f",
//   "#ffebee",
//   "#fce4ec",
//   "#f3e5f5",
//   "#ede7f6",
//   "#e8eaf6",
//   "#e3f2fd",
//   "#e1f5fe",
//   "#e0f7fa",
//   "#e0f2f1",
//   "#e8f5e9",
//   "#f1f8e9",
//   "#f9fbe7",
//   "#fffde7",
//   "#fff8e1",
//   "#fff3e0",
//   "#fbe9e7",
//   "#efebe9",
//   "#fafafa",
//   "#eceff1",
//   "#ef9a9a",
//   "#f48fb1",
//   "#ce93d8",
//   "#b39ddb",
//   "#9fa8da",
//   "#90caf9",
//   "#81d4fa",
//   "#80deea",
//   "#80cbc4",
//   "#a5d6a7",
//   "#c5e1a5",
//   "#e6ee9c",
//   "#fff59d",
//   "#ffe082",
//   "#ffcc80",
//   "#ffab91",
//   "#bcaaa4",
//   "#eeeeee",
//   "#b0bec5",
//   "#ff8a80",
//   "#ff80ab",
//   "#ea80fc",
//   "#b388ff",
//   "#8c9eff",
//   "#82b1ff",
//   "#80d8ff",
//   "#84ffff",
//   "#a7ffeb",
//   "#b9f6ca",
//   "#ccff90",
//   "#f4ff81",
//   "#ffff8d",
//   "#ffe57f",
//   "#ffd180",
//   "#ff9e80",
//   "#d50000",
//   "#c51162",
//   "#aa00ff",
//   "#6200ea",
//   "#304ffe",
//   "#2962ff",
//   "#0091ea",
//   "#00b8d4",
//   "#00bfa5",
//   "#00c853",
//   "#64dd17",
//   "#aeea00",
//   "#ffd600",
//   "#ffab00",
//   "#ff6d00",
//   "#dd2c00",
//   "#3e2723",
//   "#bf360c",
//   "#ef6c00",
//   "#ffb300",
//   "#ffeb3b",
//   "#cddc39",
//   "#8bc34a",
//   "#4caf50",
//   "#009688",
//   "#00bcd4",
//   "#03a9f4",
//   "#2196f3",
//   "#3f51b5",
//   "#673ab7",
//   "#9c27b0",
//   "#e91e63",
//   "#f44336",
//   "#9e9e9e",
//   "#607d8b",
// ];

const COLORS = [
  "#f44336", // Red
  "#e91e63", // Pink
  "#9c27b0", // Purple
  "#673ab7", // Deep Purple
  "#3f51b5", // Indigo
  "#2196f3", // Blue
  "#03a9f4", // Light Blue
  "#00bcd4", // Cyan
  "#009688", // Teal
  "#4caf50", // Green
  "#8bc34a", // Light Green
  "#cddc39", // Lime
  "#ffeb3b", // Yellow
  "#ffc107", // Amber
  "#ff9800", // Orange
  "#ff5722", // Deep Orange
  "#d32f2f", // Red 700
  "#c2185b", // Pink 700
  "#7b1fa2", // Purple 700
  "#512da8", // Deep Purple 700
  "#303f9f", // Indigo 700
  "#1976d2", // Blue 700
  "#0288d1", // Light Blue 700
  "#0097a7", // Cyan 700
  "#00796b", // Teal 700
  "#388e3c", // Green 700
  "#689f38", // Light Green 700
  "#afb42b", // Lime 700
  "#fbc02d", // Yellow 700
  "#ffa000", // Amber 700
  "#f57c00", // Orange 700
  "#e64a19", // Deep Orange 700
  "#5d4037", // Brown 700
  "#616161", // Grey 700
  "#455a64", // Blue Grey 700
  "#d50000", // Red A700
  "#c51162", // Pink A700
  "#aa00ff", // Purple A700
  "#6200ea", // Deep Purple A700
  "#304ffe", // Indigo A700
  "#2962ff", // Blue A700
  "#0091ea", // Light Blue A700
  "#00b8d4", // Cyan A700
  "#00c853", // Green A700
  "#64dd17", // Light Green A700
  "#aeea00", // Lime A700
  "#ffd600", // Yellow A700
  "#ffab00", // Amber A700
  "#ff6d00", // Orange A700
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdColor(connectionId: number) {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}

export function colorToCss(color: Color) {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
}

export function resizeBounds(bounds: XYWH, corner: Side, point: Point): XYWH {
  const result = {
    x: bounds.x,
    y: bounds.y,
    width: bounds.width,
    height: bounds.height,
  };

  if ((corner & Side.Left) === Side.Left) {
    result.x = Math.min(point.x, bounds.x + bounds.width);
    result.width = Math.abs(bounds.x + bounds.width - point.x);
  }

  if ((corner & Side.Right) === Side.Right) {
    result.x = Math.min(point.x, bounds.x);
    result.width = Math.abs(point.x - bounds.x);
  }

  if ((corner & Side.Top) === Side.Top) {
    result.y = Math.min(point.y, bounds.y + bounds.height);
    result.height = Math.abs(bounds.y + bounds.height - point.y);
  }

  if ((corner & Side.Bottom) === Side.Bottom) {
    result.y = Math.min(point.y, bounds.y);
    result.height = Math.abs(point.y - bounds.y);
  }

  return result;
}

export function findIntersectingLayersWithRectangle(
  layerIds: readonly string[],
  layers: ReadonlyMap<string, Layer>,
  a: Point,
  b: Point
) {
  const rect = {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    width: Math.abs(a.x - b.x),
    height: Math.abs(a.y - b.y),
  };

  const ids = [];

  for (const layerId of layerIds) {
    const layer = layers.get(layerId);

    if (layer == null) {
      continue;
    }

    const { x, y, height, width } = layer;

    if (
      rect.x + rect.width > x &&
      rect.x < x + width &&
      rect.y + rect.height > y &&
      rect.y < y + height
    ) {
      ids.push(layerId);
    }
  }

  return ids;
}

export function getContrastingTextColor(color: Color) {
  const luminance = 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;

  return luminance > 182 ? "black" : "white";
}