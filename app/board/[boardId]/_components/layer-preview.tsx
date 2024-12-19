"use client";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react/suspense";
import React, { memo } from "react";
import { Rectangle } from "./rectangle";
import { Ellipse } from "./ellipse";
import { Text } from "./text";
import { Note } from "./note";
import { colorToCss } from "@/lib/utils";
import { Path } from "./path";

interface LayerPreviewProps {
  id: string;
  onlayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

export const LayerPreview = memo(
  ({ id, onlayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    switch (layer?.type) {
      case LayerType.Path:
        return (
          <Path
            points={layer.points}
            onPointerDown={(e) => onlayerPointerDown(e, id)}
            x={layer.x}
            y={layer.y}
            fill={layer.fill ? colorToCss(layer.fill) : "#000"}
            stroke={selectionColor}
          />
        );
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onlayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      case LayerType.Text:
        return (
          <Text
            id={id}
            layer={layer}
            onPointerDown={onlayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Ellipse:
        return (
          <Ellipse
            id={id}
            layer={layer}
            onPointerDown={onlayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      case LayerType.Note:
        return (
          <Note
            id={id}
            layer={layer}
            onPointerDown={onlayerPointerDown}
            selectionColor={selectionColor}
          />
        );

      default:
        console.warn("unknown layer type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
