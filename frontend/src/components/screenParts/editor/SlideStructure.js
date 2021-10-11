import React, {useRef} from "react";
import {Group, Rect, Text} from "react-konva";
import {mainWidth, mainHeight} from "../../functions/Consts";

function SlideStructure(props) {
    const ellipses = props.getElem.get("ellipse").slice();
    const texts = props.getElem.get("text").slice();
    const tests = props.getElem.get("test").slice();
    const flashcards = props.getElem.get("flashcards").slice();
    const rectangles = props.getElem.get("rectangle").slice();
    const textquests = props.getElem.get("textquest").slice();
    const images = props.getElem.get("image").slice();

    const selectShape = props.setGlob.get('selectedShape');
    const setSettings = props.setGlob.get('settings');

    const common = ellipses.concat(texts).concat(tests).concat(flashcards).concat(rectangles).concat(textquests).concat(images).sort((a, b) => a.counter - b.counter);

    const HEIGHT = 3000;
    const verticalBarRef = useRef();
    const groupRef = useRef();

    return (
        <React.Fragment>
            <Group
                zIndex={0}
                ref={groupRef}
                x={0}
                y={mainHeight * 0.05}
                width={mainWidth * 0.1}
                height={HEIGHT}
            >
                <Rect
                    fill={"#182430"}
                    width={mainWidth * 0.1}
                    height={HEIGHT}
                    stroke={"#182430"}
                />
                <Text
                    text={"Структура"}
                    width={mainWidth * 0.1}
                    height={76}
                    fontFamily={"Montserrat"}
                    fill={"#FFFFFE"}
                    fontSize={24}
                    align={"center"}
                    verticalAlign={"middle"}
                />
                {common.filter(obj => obj.field === props.getGlob.get("field").toString()).map((eachObject, i) => (
                    <Group
                        onMouseOver={(e) => {
                            e.currentTarget.opacity(0.5);
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.opacity(1);
                        }}
                        x={mainWidth * 0.01}
                        y={mainHeight * 0.075 + i * mainHeight * 0.04}
                        onClick={() => {
                            selectShape(eachObject);
                            const element = eachObject?.id.charAt(0).toUpperCase() + eachObject?.id.replace(/[0-9]/g, '').slice(1);
                            setSettings(element);
                        }}
                    >
                        <Rect
                            fill={"#1E2933"}
                            width={mainWidth * 0.08}
                            height={mainHeight * 0.03}
                        />
                        <Text
                            width={mainWidth * 0.08}
                            height={mainHeight * 0.03}
                            align={"center"}
                            verticalAlign={"middle"}
                            text={eachObject.id}
                            fill={"#FFFFFE"}
                            fontSize={16}
                            fontFamily={"Montserrat"}
                        />
                    </Group>
                ))}
            </Group>

            <Rect
                zIndex={1}
                ref={verticalBarRef}
                width={10}
                height={100}
                fill={'grey'}
                opacity={0.8}
                x={mainWidth * 0.1 - 15}
                y={65 + mainHeight * 0.05}
                draggable
                dragBoundFunc={function (pos) {
                    pos.x = mainWidth * 0.1 - 15;
                    pos.y = Math.max(
                        Math.min(pos.y, mainHeight * 0.475 - this.height() - 5),
                        65 + mainHeight * 0.05
                    );
                    return pos;
                }}
                onDragMove={function () {
                    // delta in %
                    const availableHeight =
                        mainHeight * 0.475 - 5 * 2 - verticalBarRef.current.height();
                    console.log(availableHeight);
                    var delta = (verticalBarRef.current.y() - 65 - mainHeight * 0.05) * 1.44 / availableHeight;
                    groupRef.current.y(mainHeight * 0.05 - (HEIGHT - mainHeight * 0.475) * delta);
                }}
            />
        </React.Fragment>
    );
}

export default SlideStructure;