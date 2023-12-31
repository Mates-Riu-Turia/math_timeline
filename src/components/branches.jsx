import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

// Get the first style of branch
const branchPoints = require("../branches/first.json").branch;

// Given a branch and a tree, returns the branch's parent
const getParent = (tree, givenBranch) => {
    for (const branch of tree) {
        for (const child of branch.children) {
            if (child == givenBranch) {
                return branch;
            }
        }
    }
    return "nothing";
}

const getTitle = (tree, givenBranch) => {
    for (const branch of tree) {
        if (branch.name == givenBranch) {
            return branch.title;
        }
    }
}

// Given a tree (an agrupation of branches from the DB), calculates the ideal size for the branches
const branchSize = (tree, level) => {
    let size = window.innerHeight * 0.95;
    let finalChild = 0;

    for (const branch of tree) {
        if (branch.level == level && branch.children.length != 0) {
            size -= 50 * branch.children.length;
            finalChild++;
        }
    }

    return size / finalChild;
}

// Draws a branch
const drawBranch = (ctx, branchTitle, branchSize, yStart) => {
    ctx.beginPath();

    for (const point in branchPoints) {
        ctx.quadraticCurveTo(branchPoints[4 * point] + 5, branchPoints[4 * point + 1] + yStart, branchPoints[4 * point + 2] + 5, branchPoints[4 * point + 3] + yStart);
    }

    ctx.stroke();

    ctx.beginPath()

    for (const point in branchPoints) {
        ctx.quadraticCurveTo(branchPoints[4 * point] + 5, branchPoints[4 * point + 1] + yStart + branchSize, branchPoints[4 * point + 2] + 5, branchPoints[4 * point + 3] + yStart + branchSize);
    }

    ctx.stroke()

    ctx.font = "30px Sans Serif"
    ctx.fillText(branchTitle, 25, yStart + 35);
};

const drawTree = (ctx, tree, offset) => {
    const size = branchSize(tree, 0) - offset;
    let y = 5;
    for (const branch of tree) {
        if (getParent(tree, branch.name) == "nothing") {
            drawBranch(ctx, branch.title, size, y);
            const childSize = (size - 10) / branch.children.length;
            let yChild = y + 35;
            for (const child of branch.children) {
                drawBranch(ctx, getTitle(tree, child), childSize, yChild);
                yChild += 5 + childSize;
            }
            y = y + size + 50;
        }
    }
}

const Canvas = (tree) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const offset = canvas.offsetTop;
        const ctx = canvas.getContext("2d");

        drawTree(ctx, tree.tree, offset);
    }, []);

    return <canvas width={window.innerWidth} height={window.innerHeight} ref={canvasRef} />
}

export function Branches({ tree }) {
    // Read the current age for showing only branches that are in that age -> TODO
    const { age } = useParams();

    return (
        <Canvas tree={tree} />
    );
}