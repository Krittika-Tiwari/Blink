export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
  //   zoom: number;
};

export enum LayerType {
  Rectangle,
  Ellipse,
  Text,
  Path,
  Note,
}

export type RectangleLayer = {
  type: LayerType.Rectangle;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
  // font: string;
  // fontSize: number;
  // textAlign: CanvasTextAlign;
  // textBaseline: CanvasTextBaseline;
};

export type EllipseLayer = {
  type: LayerType.Rectangle;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};

export type PathLayer = {
  type: LayerType.Rectangle;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  points: number[][];
  value?: string;
};

export type TextLayer = {
  type: LayerType.Rectangle;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};

export type NoteLayer = {
  type: LayerType.Rectangle;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};

export type Point = {
  x: number;
  y: number;
};

export type XYWH = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export enum Side {
  Top = 1,
  Righ = 2,
  Bottom = 3,
  Left = 4,
}

export type CanvasState =
  | {
      mode: CanvasMode.None;
    }
  | {
      mode: CanvasMode.Pressing;
      origin: Point;
    }
  | {
      mode: CanvasMode.SelectionNet;
      origin: Point;
      current?: Point;
    }
  | {
      mode: CanvasMode.Translating;
      current: Point;
    }
  | {
      mode: CanvasMode.Resizing;
      initialBounds: XYWH;
      corner: Side;
    }
  | {
      mode: CanvasMode.Inserting;
      layerType:
        | LayerType.Ellipse
        | LayerType.Rectangle
        | LayerType.Text
        | LayerType.Note;
    }
  | {
      mode: CanvasMode.Pencil;
    };
export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Resizing,
  Inserting,
  Pencil,
}