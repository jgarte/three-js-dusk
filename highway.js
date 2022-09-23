"use strict";

import * as three from "three";

export const HIGHWAY_SCALE_X_BASE = 1.0;
export const HIGHWAY_SCALE_X_PADDING = 0.1;
export const HIGHWAY_SCALE_X = HIGHWAY_SCALE_X_BASE + HIGHWAY_SCALE_X_PADDING;
export const HIGHWAY_SCALE_Y = 0.001;
export const HIGHWAY_SCALE_Z = 5.0;
export const HIGHWAY_POSITION_X = 0.0;
export const HIGHWAY_POSITION_Y = 0.0;
export const HIGHWAY_POSITION_Z = -2.4;

export const createHighway = () => {
    const geometry = new three.BoxGeometry(1.0, 1.0, 1.0);
    const material = new three.MeshBasicMaterial({ color: 0xffffff });
    const mesh = new three.Mesh(geometry, material);
    mesh.scale.set(HIGHWAY_SCALE_X, HIGHWAY_SCALE_Y, HIGHWAY_SCALE_Z);
    mesh.position.set(HIGHWAY_POSITION_X, HIGHWAY_POSITION_Y, HIGHWAY_POSITION_Z);
    return mesh;
}

export const JUDGMENT_LINE_SCALE_X = HIGHWAY_SCALE_X;
export const JUDGMENT_LINE_SCALE_Y = HIGHWAY_SCALE_Y;
export const JUDGMENT_LINE_SCALE_Z = 0.01;
export const JUDGMENT_LINE_POSITION_X = 0.000;
export const JUDGMENT_LINE_POSITION_Y = 0.002;
export const JUDGMENT_LINE_POSITION_Z = 0.000;

export const createJudgmentLine = () => {
    const geometry = new three.BoxGeometry(1.0, 1.0, 1.0);
    const material = new three.MeshBasicMaterial({ color: 0x000000 });
    const mesh = new three.Mesh(geometry, material);
    mesh.scale.set(JUDGMENT_LINE_SCALE_X, JUDGMENT_LINE_SCALE_Y, JUDGMENT_LINE_SCALE_Z);
    mesh.position.set(JUDGMENT_LINE_POSITION_X, JUDGMENT_LINE_POSITION_Y, JUDGMENT_LINE_POSITION_Z);
    return mesh;
}

export const BEAT_LINE_SCALE_X = HIGHWAY_SCALE_X;
export const BEAT_LINE_SCALE_Y = HIGHWAY_SCALE_Y;
export const BEAT_LINE_SCALE_Z = 0.02;
export const BEAT_LINE_POSITION_X = 0.000;
export const BEAT_LINE_POSITION_Y = 0.001;

export const createBeatLine = (positionZ) => {
    const geometry = new three.BoxGeometry(1.0, 1.0, 1.0);
    const material = new three.MeshBasicMaterial({ color: 0x0000ff });
    const mesh = new three.Mesh(geometry, material);
    mesh.scale.set(BEAT_LINE_SCALE_X, BEAT_LINE_SCALE_Y, BEAT_LINE_SCALE_Z);
    mesh.position.set(BEAT_LINE_POSITION_X, BEAT_LINE_POSITION_Y, positionZ);
    return mesh;
}

export const NOTE_SPACE_BETWEEN = HIGHWAY_SCALE_X_PADDING / 5;
export const NOTE_SCALE_X = HIGHWAY_SCALE_X_BASE / 4;
export const NOTE_SCALE_Y = HIGHWAY_SCALE_Y;
export const NOTE_SCALE_Z = 0.1;
export const NOTE_POSITION_Y = 0.003;

export const createNote = (x_n, z) => {
    const x = (NOTE_SCALE_X + NOTE_SPACE_BETWEEN) / 2 * (2 * x_n - 3);
    const geometry = new three.BoxGeometry(1.0, 1.0, 1.0);
    const material = new three.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new three.Mesh(geometry, material);
    mesh.scale.set(NOTE_SCALE_X, NOTE_SCALE_Y, NOTE_SCALE_Z);
    mesh.position.set(x, NOTE_POSITION_Y, z);
    return mesh;
}
