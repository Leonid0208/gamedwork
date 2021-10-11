import React from "react";
import {Group, Rect} from "react-konva";
import EllipseElementUser from "../../elements/user/EllipseElementUser";
import TextElementUser from "../../elements/user/TextElementUser";
import TestElementUser from "../../elements/user/TestElementUser";
import FlashcardsElementUser from "../../elements/user/FlashcardsElementUser";
import RectangleElementUser from "../../elements/user/RectangleElementUser";
import ImageElementUser from "../../elements/user/ImageElementUser";

function CenterScreenUser(props) {
    const mainWidth = window.innerWidth;
    const mainHeight = window.innerHeight;

    return (
        <React.Fragment>
            <Group
                x={mainWidth * 0.1}
                y={mainHeight * 0.05}
                width={mainWidth * 0.8}
                height={mainHeight * 0.7575}
            >
                <Rect
                    name={"field"}
                    fill={"#f2f2f2"}
                    x={0}
                    y={0}
                    width={mainWidth * 0.8}
                    height={mainHeight * 0.7575}
                    stroke={"#f2f2f2"}
                />
                {props.getElem.get('ellipse').map((eachEllipse, i) => (
                    eachEllipse.field === props.getGlob.get('field').toString() && (<EllipseElementUser
                        key={i}
                        shapeProps={eachEllipse}
                    />)
                ))}

                {props.getElem.get('text').map((eachText, i) => (
                    eachText.field === props.getGlob.get('field').toString() && (<TextElementUser
                        key={i}
                        shapeProps={eachText}
                    />)
                ))}

                {props.getElem.get('test').map((eachTest, i) => (
                    eachTest.field === props.getGlob.get('field').toString() && (<TestElementUser
                        key={i}
                        shapeProps={eachTest}
                        onChange={(newAttrs) => {
                            const tsts = props.getElem.get('test').slice();
                            tsts[i] = newAttrs;
                            props.setElem.get('test')(tsts);
                        }}
                    />)
                ))}

                {props.getElem.get('flashcards').map((eachFlashcards, i) => (
                    eachFlashcards.field === props.getGlob.get('field').toString() && (<FlashcardsElementUser
                        key={i}
                        shapeProps={eachFlashcards}
                        onChange={(newAttrs) => {
                            const flcs = props.getElem.get('flashcards').slice();
                            flcs[i] = newAttrs;
                            props.setElem.get('flashcards')(flcs);
                        }}
                    />)
                ))}

                {props.getElem.get('rectangle').map((eachRectangle, i) => (
                    eachRectangle.field === props.getGlob.get('field').toString() && (<RectangleElementUser
                        key={i}
                        shapeProps={eachRectangle}
                    />)
                ))}

                {props.getElem.get('image').map((eachImage, i) => (
                    eachImage.field === props.getGlob.get('field').toString() && (<ImageElementUser
                        key={i}
                        shapeProps={eachImage}
                    />)
                ))}
            </Group>
        </React.Fragment>

    );
}

export default CenterScreenUser;