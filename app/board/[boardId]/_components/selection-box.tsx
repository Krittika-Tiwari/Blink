"use client";

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { LayerType, Side, XYWH } from "@/types/canvas";
import { useSelf, useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";

interface SelectionBoxProps {
  onResizeHandlePointerDown: (corner: Side, initialBonds: XYWH) => void;
}

const HANDLE_WIDTH = 8;
export const SelectionBox = memo(
  ({ onResizeHandlePointerDown }: SelectionBoxProps) => {
    const solleLayerId = useSelf((me) =>
      me.presence.selection.length === 1 ? me.presence.selection[0] : null
    );

    const isShowingHandles = useStorage(
      (root) =>
        solleLayerId && root.layers.get(solleLayerId)?.type !== LayerType.Path
    );

    const bonds = useSelectionBounds();

    if (!bonds) return null;

    return (
      <>
        <rect
          className="fill-transparent stroke-blue-500 stroke-2 pointer-events-none"
          style={{ transform: `translate(${bonds.x}px, ${bonds.y}px)` }}
          x={0}
          y={0}
          width={bonds.width}
          height={bonds.height}
        />

        {isShowingHandles && (
          <>
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={bonds.width}
              height={bonds.height}
              style={{
                cursor: "nwse-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bonds.x - HANDLE_WIDTH / 2}px, ${bonds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={bonds.width}
              height={bonds.height}
              style={{
                cursor: "ns-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bonds.x + bonds.width / 2 - HANDLE_WIDTH / 2}px, ${bonds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={bonds.width}
              height={bonds.height}
              style={{
                cursor: "nesw-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bonds.x + bonds.width - HANDLE_WIDTH / 2}px, ${bonds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={bonds.width}
              height={bonds.height}
              style={{
                cursor: "ew-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bonds.x + bonds.width - HANDLE_WIDTH / 2}px, ${bonds.y + bonds.height / 2 - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={bonds.width}
              height={bonds.height}
              style={{
                cursor: "nesw-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bonds.x - HANDLE_WIDTH / 2}px, ${bonds.y + bonds.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={bonds.width}
              height={bonds.height}
              style={{
                cursor: "ns-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bonds.x + bonds.width / 2 - HANDLE_WIDTH / 2}px, ${bonds.y + bonds.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={bonds.width}
              height={bonds.height}
              style={{
                cursor: "nwse-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bonds.x + bonds.width - HANDLE_WIDTH / 2}px, ${bonds.y + bonds.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={bonds.width}
              height={bonds.height}
              style={{
                cursor: "ew-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `translate(${bonds.x - HANDLE_WIDTH / 2}px, ${bonds.y + bonds.height / 2 - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />
          </>
        )}
      </>
    );
  }
);

SelectionBox.displayName = "SelectionBox";
