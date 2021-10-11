import React from "react";
import {Group} from "react-konva";
import {Html} from "react-konva-utils";
import {style} from "./common/style";
import {mainWidth} from "../functions/Consts";

function EllipseSettings(props) {

    const selectedShape = props.getGlob.get('selectedShape');
    const ellipses = props.getElem.get('ellipse');
    const setEllipses = props.setElem.get('ellipse');

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
                            <p style={style.text}>Размер горизонтального радиуса:</p>
                        </div>

                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.radiusX = Math.ceil(Number(e.target.value));
                                const ells = ellipses.slice();
                                ells[ells.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setEllipses(ells);
                            }} value={Math.ceil(selectedShape?.radiusX)} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Размер вертикального радиуса:</p>
                        </div>

                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.radiusY = Number(e.target.value);
                                const ells = ellipses.slice();
                                ells[ells.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setEllipses(ells);
                            }} value={selectedShape?.radiusY} maxLength={3} rows={1} cols={3}/>
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
                                const ells = ellipses.slice();
                                ells[ells.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setEllipses(ells);
                            }} type={"color"} value={selectedShape?.fill}/>
                        </div>
                    </div>
                </Html>
            </Group>
        </React.Fragment>
    );
}

export default EllipseSettings;