"use strict";

import * as THREE from "three";
import { createCamera } from "./camera.js";
import { createHighway, createJudgmentLine, createNote, createBeatLine } from "./highway.js";

const main = () => {
    const canvas = document.getElementById("joyride-canvas");
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    const camera = createCamera(canvas.clientWidth / canvas.clientHeight);

    const scene = new THREE.Scene();
    const highway = createHighway();
    const judgmentLine = createJudgmentLine();
    scene.add(highway);
    scene.add(judgmentLine);

    const beatLines = [
        createBeatLine(0.0),
        createBeatLine(-1.6),
        createBeatLine(-3.2),
    ];

    for (const barLine of beatLines) {
        scene.add(barLine);
    }

    const notes = [
        createNote(0, 0.0),
        createNote(1, 0.0),
        createNote(1, -0.4),
        createNote(2, -0.4),
        createNote(2, -0.8),
        createNote(3, -0.8),
        createNote(1, -1.2),
        createNote(2, -1.2),
        createNote(0, -1.6),
        createNote(1, -1.6),
        createNote(1, -2.0),
        createNote(2, -2.0),
        createNote(2, -2.4),
        createNote(3, -2.4),
        createNote(1, -2.8),
        createNote(2, -2.8),
        createNote(0, -3.2),
        createNote(1, -3.2),
        createNote(1, -3.6),
        createNote(2, -3.6),
        createNote(2, -4.0),
        createNote(3, -4.0),
        createNote(1, -4.4),
        createNote(2, -4.4),
    ];

    for (const note of notes) {
        scene.add(note);
    }

    const tryResizeRendererToDisplay = () => {
        const canvas = renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width = canvas.clientWidth * pixelRatio | 0;
        const height = canvas.clientHeight * pixelRatio | 0;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
    }

    const delta = 0.04;
    const renderLoop = () => {
        for (const note of notes) {
            if (note.position.z >= 0.0) {
                note.position.z = -4.8;
            }
            note.position.z += Math.min(Math.abs(0.0 + note.position.z), delta);
        }
        for (const beatLine of beatLines) {
            if (beatLine.position.z >= 0.0) {
                beatLine.position.z = -4.8;
            }
            beatLine.position.z += Math.min(Math.abs(0.0 + beatLine.position.z), delta);
        }
        tryResizeRendererToDisplay();
        renderer.render(scene, camera);
        requestAnimationFrame(renderLoop);
    };

    requestAnimationFrame(renderLoop);
}

main();
