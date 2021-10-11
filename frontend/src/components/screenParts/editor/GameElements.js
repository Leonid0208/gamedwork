import React from "react";
import {Group, Rect, Text} from "react-konva";
import Icon from "../../templates/Icon";
import * as Test from "../../add/Test";
import * as Flashcards from "../../add/Flashcards";
import * as Textquest from "../../add/Textquest";
import {mainWidth, mainHeight} from "../../functions/Consts";

function GameElements(props) {
    return (
        <React.Fragment>
            <Group // DownRight
                x={mainWidth * 0.4}
                y={mainHeight * 0.8075}
                width={mainWidth * 0.5}
                height={mainHeight * 0.1925}
            >
                <Rect
                    fill={"#434e99"}
                    width={mainWidth * 0.5}
                    height={mainHeight * 0.1925}
                    stroke={"#434e99"}
                />
                <Text
                    width={mainWidth * 0.5}
                    height={40}
                    fontFamily={"Montserrat"}
                    align={"center"}
                    verticalAlign={"middle"}
                    text={"Игровые элементы"}
                    fill={"white"}
                    fontSize={24}
                />

                <Group
                    x={20}
                    y={40}
                    onMouseOver={(e) => {
                        e.currentTarget.opacity(0.5);
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.opacity(1);
                    }}
                    onClick={() => {
                        Test.mainTest(props);
                    }}
                >
                    <Icon/>
                    <Text
                        fontSize={20}
                        text={'?'}
                        fill={'white'}
                        padding={23}
                    />
                    <Text
                        x={0}
                        y={55}
                        width={55}
                        fontFamily={"Montserrat"}
                        height={20}
                        align={"center"}
                        verticalAlign={"middle"}
                        text={"тест"}
                        fill={"white"}
                    />
                </Group>

                <Group
                    x={85}
                    y={40}
                    onMouseOver={(e) => {
                        e.currentTarget.opacity(0.5);
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.opacity(1);
                    }}
                    onClick={(e) => {
                        Flashcards.mainFlashcards(props);
                    }}
                >
                    <Icon/>
                    <Text
                        fontSize={20}
                        text={'F'}
                        fill={'white'}
                        padding={23}
                    />
                    <Text
                        x={0}
                        y={55}
                        width={55}
                        fontFamily={"Montserrat"}
                        height={20}
                        align={"center"}
                        verticalAlign={"middle"}
                        text={"flashcards"}
                        fill={"white"}
                    />
                </Group>

                <Group
                    x={150}
                    y={40}
                    onMouseOver={(e) => {
                        e.currentTarget.opacity(0.5);
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.opacity(1);
                    }}
                    onClick={(e) => {
                        Textquest.mainTextquest(props);
                    }}
                >
                    <Icon/>
                    <Text
                        x={-8}
                        fontSize={20}
                        text={'TQ'}
                        fill={'white'}
                        padding={23}
                    />
                    <Text
                        x={0}
                        y={55}
                        width={55}
                        fontFamily={"Montserrat"}
                        height={20}
                        align={"center"}
                        verticalAlign={"middle"}
                        text={"textQuest"}
                        fill={"white"}
                    />
                </Group>
                
            </Group>
        </React.Fragment>
    );
}

export default GameElements;