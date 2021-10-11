import React from "react";
import {Group, Rect, Text} from "react-konva";

function DownScreenUser(props) {
    const mainWidth = window.innerWidth;
    const mainHeight = window.innerHeight;

    return (
        <React.Fragment>
            <Group // Down
                x={mainWidth * 0.1}
                y={mainHeight * 0.8075}
                width={mainWidth * 0.9}
                height={mainHeight * 0.1925}
            >
                <Rect
                    fill={"#434e99"}
                    width={mainWidth * 0.8}
                    height={mainHeight * 0.1925}
                    stroke={"#434e99"}
                />
                <Text
                    width={mainWidth * 0.8}
                    height={40}
                    align={"center"}
                    verticalAlign={"middle"}
                    text={"Нижний интерфейс пользователя"}
                    fill={"white"}
                    fontSize={30}
                    fontFamily={"Montserrat"}
                />
                <Text
                    width={mainWidth * 0.8}
                    height={150}
                    align={"center"}
                    verticalAlign={"middle"}
                    text={props.getGlob.get("field").toString()}
                    fill={"white"}
                    fontSize={30}
                    fontFamily={"Montserrat"}
                />
                <Rect
                    fill={"#FFFFFE"}
                    width={50}
                    height={50}
                    x={50}
                    y={50}
                    onMouseOver={(e) => {
                        e.currentTarget.opacity(0.5);
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.opacity(1);
                    }}
                    onClick={() => {
                        props.setGlob.get("field")(props.getGlob.get("field") - 1);
                    }}
                />

                <Rect
                    fill={"#FFFFFE"}
                    width={50}
                    height={50}
                    x={mainWidth * 0.8 - 100}
                    y={50}
                    onMouseOver={(e) => {
                        e.currentTarget.opacity(0.5);
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.opacity(1);
                    }}
                    onClick={() => {
                        props.setGlob.get("field")(props.getGlob.get("field") + 1);
                    }}
                />
            </Group>
        </React.Fragment>
    );
}

export default DownScreenUser;