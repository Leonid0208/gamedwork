import {mainWidth, mainHeight} from "./Consts";

export const dragBoundRef = (pos, ref, shapeProps) => {
    let newX, newY;
    if (pos.x < shapeProps.x + mainWidth * 0.1)
        newX = shapeProps.x + mainWidth * 0.1;
    else if (pos.x > shapeProps.x + mainWidth * 0.1 + shapeProps.width - ref.width())
        newX = shapeProps.x + mainWidth * 0.1 + shapeProps.width - ref.width();
    else
        newX = pos.x;

    if (pos.y < shapeProps.y + mainHeight * 0.05)
        newY = shapeProps.y + mainHeight * 0.05;
    else if (pos.y > shapeProps.y + mainHeight * 0.05 + shapeProps.height - ref.height())
        newY = shapeProps.y + mainHeight * 0.05 + shapeProps.height - ref.height();
    else
        newY = pos.y;

    return {
        x: newX,
        y: newY,
    }
}

export const dragBoundVar = (pos, ref, shapeProps) => {
    let newX, newY;
    if (pos.x < shapeProps.x + mainWidth * 0.1)
        newX = shapeProps.x + mainWidth * 0.1;
    else if (pos.x > shapeProps.x + mainWidth * 0.1 + shapeProps.width - ref.width)
        newX = shapeProps.x + mainWidth * 0.1 + shapeProps.width - ref.width;
    else
        newX = pos.x;

    if (pos.y < shapeProps.y + mainHeight * 0.05)
        newY = shapeProps.y + mainHeight * 0.05;
    else if (pos.y > shapeProps.y + mainHeight * 0.05 + shapeProps.height - ref.height)
        newY = shapeProps.y + mainHeight * 0.05 + shapeProps.height - ref.height;
    else
        newY = pos.y;

    return {
        x: newX,
        y: newY,
    }
}