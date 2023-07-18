import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

// Get the first style of branch
const branchPoints = require("../branches/first.json").branch;

// Draws a branch
const drawBranch = (ctx) => {
    // Draws a Bézier Curve using Canvas.js
    const drawBranchInternal = (ctx) => {
        ctx.beginPath();

        for (const point in branchPoints) {
            ctx.quadraticCurveTo(branchPoints[4 * point], branchPoints[4 * point + 1], branchPoints[4 * point + 2], branchPoints[4 * point + 3]);
        }

        ctx.stroke();
    };

    ctx.moveTo(5, 35);
    ctx.save(); // Saves the current status of the Canvas

    drawBranchInternal(ctx);

    ctx.translate(5, 135);

    drawBranchInternal(ctx);

    ctx.restore(); // If the status is not restored, the text will appear two times
    ctx.fillText("Hello World!", 25, 45)
};

const Canvas = props => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        drawBranch(ctx);
    }, []);

    return <canvas width={window.innerWidth} height={window.innerHeight} ref={canvasRef} {...props} />
}

export function Branches() {
    // Read the current age for showing only branches that are in that age -> TODO
    const { age } = useParams();

    return (
        <Canvas />
    );
}