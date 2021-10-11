import React from "react";
import {Group} from "react-konva";
import {Html} from "react-konva-utils";
import {style} from "./common/style";
import {mainWidth} from "../functions/Consts";

function RectangleSettings(props) {

    const selectedShape = props.getGlob.get('selectedShape');
    const rectangles = props.getElem.get('rectangle');
    const setRectangles = props.setElem.get('rectangle');

    return (
        <React.Fragment>
            <Group
                x={0}
                y={60}
                width={mainWidth * 0.1 - 16}
            >
                <Html>
                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Ширина:</p>
                        </div>

                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.width = Math.ceil(Number(e.target.value));
                                const rcts = rectangles.slice();
                                rcts[rcts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setRectangles(rcts);
                            }} value={Math.ceil(selectedShape?.width)} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Высота:</p>
                        </div>

                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.height = Number(e.target.value);
                                const rcts = rectangles.slice();
                                rcts[rcts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setRectangles(rcts);
                            }} value={selectedShape?.height} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Цвет эллипса:</p>
                        </div>
                        <div style={style.half}>
                            <input style={style.color} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.fill = e.target.value;
                                const rcts = rectangles.slice();
                                rcts[rcts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setRectangles(rcts);
                            }} type={"color"} value={selectedShape?.fill}/>
                        </div>
                    </div>
                </Html>
            </Group>
        </React.Fragment>
    );
}

export default RectangleSettings;