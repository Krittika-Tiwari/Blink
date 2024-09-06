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

    const bounds = useSelectionBounds();

    if (!bounds) return null;

    return (
      <>
        <rect
          className="fill-transparent stroke-blue-500 stroke-2 pointer-events-none"
          style={{ transform: `translate(${bounds.x}px, ${bounds.y}px)` }}
          x={0}
          y={0}
          width={bounds.width}
          height={bounds.height}
        />

        {isShowingHandles && (
          <>
            {/* Top-left handle */}
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={HANDLE_WIDTH}
              height={HANDLE_WIDTH}
              style={{
                cursor: "nwse-resize",
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Top + Side.Left, bounds);
              }}
            />

            {/* Top-center handle */}
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={HANDLE_WIDTH}
              height={HANDLE_WIDTH}
              style={{
                cursor: "ns-resize",
                transform: `translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Top, bounds);
              }}
            />

            {/* Top-right handle */}
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={HANDLE_WIDTH}
              height={HANDLE_WIDTH}
              style={{
                cursor: "nesw-resize",
                transform: `translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px, ${bounds.y - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Top + Side.Right, bounds);
              }}
            />

            {/* Center-right handle */}
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={HANDLE_WIDTH}
              height={HANDLE_WIDTH}
              style={{
                cursor: "ew-resize",
                transform: `translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Right, bounds);
              }}
            />

            {/* Bottom-right handle */}
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={HANDLE_WIDTH}
              height={HANDLE_WIDTH}
              style={{
                cursor: "nwse-resize",
                transform: `translate(${bounds.x + bounds.width - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Bottom + Side.Right, bounds);
              }}
            />

            {/* Bottom-center handle */}
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={HANDLE_WIDTH}
              height={HANDLE_WIDTH}
              style={{
                cursor: "ns-resize",
                transform: `translate(${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Bottom, bounds);
              }}
            />

            {/* Bottom-left handle */}
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={HANDLE_WIDTH}
              height={HANDLE_WIDTH}
              style={{
                cursor: "nesw-resize",
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Bottom + Side.Left, bounds);
              }}
            />

            {/* Center-left handle */}
            <rect
              className="fill-white stroke-1 stroke-blue-500"
              x={0}
              y={0}
              width={HANDLE_WIDTH}
              height={HANDLE_WIDTH}
              style={{
                cursor: "ew-resize",
                transform: `translate(${bounds.x - HANDLE_WIDTH / 2}px, ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px)`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
                onResizeHandlePointerDown(Side.Left, bounds);
              }}
            />
          </>
        )}
      </>
    );
  }
);

SelectionBox.displayName = "SelectionBox";
