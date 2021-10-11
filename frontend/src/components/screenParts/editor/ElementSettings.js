import React, {useRef} from "react";
import {Group, Rect, Text} from "react-konva";
import TextSettings from "../../settings/TextSettings";
import EllipseSettings from "../../settings/EllipseSettings";
import TestSettings from "../../settings/TestSettings";
import FlashcardsSettings from "../../settings/FlashcardsSettings";
import RectangleSettings from "../../settings/RectangleSettings";
import ImageSettings from "../../settings/ImageSettings";
import TextquestSettings from "../../settings/TextquestSettings";
import {mainWidth, mainHeight} from "../../functions/Consts";

function ElementSettings(props) {
    const settings = props.getGlob.get('settings');

    const HEIGHT = 3000;
    const verticalBarRef = useRef();
    const groupRef = useRef();

    return (
        <React.Fragment>
            <Group // RightUp
                zIndex={0}
                ref={groupRef}
                x={mainWidth * 0.9}
                y={mainHeight * 0.05}
                width={mainWidth * 0.1}
                height={HEIGHT}
            >
                <Rect
                    fill={"#182430"}
                    x={0}
                    y={0}
                    width={mainWidth * 0.1}
                    height={HEIGHT}
                    stroke={"#182430"}
                />

                <Text
                    width={mainWidth * 0.1}
                    height={76}
                    fontFamily={"Montserrat"}
                    align={"center"}
                    verticalAlign={"middle"}
                    x={0}
                    y={0}
                    text={"Настройки"}
                    fill={"white"}
                    fontSize={24}
                />
                {settings === 'Test' && (
                    <TestSettings
                        getElem={props.getElem}
                        setElem={props.setElem}
                        getGlob={props.getGlob}
                        setGlob={props.setGlob}
                    />
                )}

                {settings === 'Text' && (
                    <TextSettings
                        getElem={props.getElem}
                        setElem={props.setElem}
                        getGlob={props.getGlob}
                        setGlob={props.setGlob}
                    />
                )}

                {settings === 'Ellipse' && (
                    <EllipseSettings
                        getElem={props.getElem}
                        setElem={props.setElem}
                        getGlob={props.getGlob}
                        setGlob={props.setGlob}
                    />
                )}

                {settings === 'Flashcards' && (
                    <FlashcardsSettings
                        getElem={props.getElem}
                        setElem={props.setElem}
                        getGlob={props.getGlob}
                        setGlob={props.setGlob}
                    />
                )}

                {settings === 'Rectangle' && (
                    <RectangleSettings
                        getElem={props.getElem}
                        setElem={props.setElem}
                        getGlob={props.getGlob}
                        setGlob={props.setGlob}
                    />
                )}

                {settings === 'Image' && (
                    <ImageSettings
                        getElem={props.getElem}
                        setElem={props.setElem}
                        getGlob={props.getGlob}
                        setGlob={props.setGlob}
                    />
                )}

                {settings === 'Textquest' && (
                    <TextquestSettings
                        getElem={props.getElem}
                        setElem={props.setElem}
                        getGlob={props.getGlob}
                        setGlob={props.setGlob}
                    />
                )}
            </Group>

            <Rect
                zIndex={1}
                ref={verticalBarRef}
                width={10}
                height={100}
                fill={'grey'}
                opacity={0.8}
                x={mainWidth * 1 - 5 - 10}
                y={65 + mainHeight * 0.05}
                draggable
                dragBoundFunc={function (pos) {
                    pos.x = mainWidth * 1 - 5 - 10;
                    pos.y = Math.max(
                        Math.min(pos.y, mainHeight * 0.475 - this.height() - 65 + mainHeight * 0.05 ),
                        65 + mainHeight * 0.05
                    );
                    return pos;
                }}
                onDragMove={function () {
                    // delta in %
                    const availableHeight =
                        mainHeight * 0.475 - 5 * 2 - verticalBarRef.current.height();
                    console.log(availableHeight);
                    var delta = (verticalBarRef.current.y() - 65 - mainHeight * 0.05) * 1.44/ availableHeight;
                    groupRef.current.y(mainHeight * 0.05 -(HEIGHT - mainHeight * 0.475) * delta);
                }}

            />
        </React.Fragment>
    );
}

export default ElementSettings;