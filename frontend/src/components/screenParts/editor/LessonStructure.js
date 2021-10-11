import React from "react";
import {Group, Rect, Text} from "react-konva";
import {mainWidth, mainHeight} from "../../functions/Consts";

function LessonStructure(props) {
    return (
        <React.Fragment>
            <Group
                x={0}
                y={mainHeight * 0.525}
                width={mainWidth * 0.1}
                height={mainHeight * 0.475}
            >
                <Rect
                    fill={"#182430"}
                    width={mainWidth * 0.1}
                    height={mainHeight * 0.475}
                    stroke={"#182430"}
                />
                <Text
                    width={mainWidth * 0.1}
                    height={76}
                    fontFamily={"Montserrat"}
                    text={"Содержание"}
                    fill={"white"}
                    fontSize={24}
                    align={"center"}
                    verticalAlign={"middle"}
                />
                <Group
                    x={10}
                    y={65}
                    width={mainWidth * 0.1 - 20}
                    height={mainHeight * 0.475}
                >
                    {props?.getGlob?.get('numFields').slice().map((eachField, i) => (
                        <Group
                            onMouseOver={(e) => {
                                e.currentTarget.opacity(0.5);
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.opacity(1);
                            }}
                            onClick={() => {
                                props.setGlob.get('field')(i + 1)
                            }}
                        >
                            <Rect
                                fill={"#FFFFFE"}
                                width={40}
                                height={40}
                                x={i % 3 * 65}
                                y={Math.floor(i / 3) * 50}
                            />
                            <Text
                                width={40}
                                height={40}
                                x={i % 3 * 65}
                                y={Math.floor(i / 3) * 50}
                                text={i + 1}
                                align={"center"}
                                verticalAlign={"middle"}
                                fontFamily={"Montserrat"}
                                fontSize={20}
                            />
                        </Group>
                    ))}
                </Group>

                <Group
                    y={mainHeight * 0.4}
                    onMouseOver={(e) => {
                        e.currentTarget.opacity(0.5);
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.opacity(1);
                    }}
                    onClick={() => {
                        props.setGlob.get('numFields')((prev) => [...prev, props.getGlob.get('numFields').length])
                    }}
                >
                    <Rect
                        width={mainWidth * 0.1}
                        height={mainHeight * 0.04}
                        fill={"white"}
                        stroke={"white"}
                        opacity={0.2}
                    />

                    <Text
                        x={10}
                        height={mainHeight * 0.04}
                        fill={"white"}
                        verticalAlign={"middle"}
                        fontSize={50}
                        fontFamily={"Montserrat"}
                        text={"+"}
                    />

                    <Text
                        x={mainWidth * 0.03}
                        height={mainHeight * 0.04}
                        fill={"white"}
                        verticalAlign={"middle"}
                        fontSize={12}
                        fontFamily={"Montserrat"}
                        text={"новое задание"}
                    />
                </Group>
            </Group>
        </React.Fragment>
    );
}

export default LessonStructure;