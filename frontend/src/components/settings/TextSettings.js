import React from "react";
import {Group} from "react-konva";
import {Html} from "react-konva-utils";
import {style} from "./common/style";
import {mainWidth} from "../functions/Consts";

function TextSettings(props) {

    const options = ["Cursive", "Fantasy", "Montserrat", "Arial", "Helvetica", "Gill Sans", "Lucida", "Helvetica Narrow", "Times", "Times New Roman", "Palatino", "Bookman", "New Century Schoolbook", "Andale Mono", "Courier New", "Courier", "Lucidatypewriter", "Fixed", "Comic Sans", "Comic Sans MS", "Zapf Chancery", "Coronetscript", "Florence", "Parkavenue", "Impact", "Arnoldboecklin", "Oldtown", "Blippo", "Brushstroke"].sort();

    const selectedShape = props.getGlob.get('selectedShape');
    const texts = props.getElem.get('text');
    const setTexts = props.setElem.get('text');

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
                            <p style={style.text}>Размер шрифта:</p>
                        </div>

                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.fontSize = e.target.value;
                                const txts = texts.slice();
                                txts[txts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTexts(txts);
                            }} value={selectedShape?.fontSize} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Семейство шрифта:</p>
                        </div>
                        <div style={style.half}>
                            <select style={style.select} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.fontFamily = e.target.value;
                                const txts = texts.slice();
                                txts[txts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTexts(txts);
                            }} maxLength={3} value={selectedShape?.fontFamily}>
                                {options.map((eachOption, i) => (
                                    <option key={i} value={eachOption}>{eachOption}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Цвет шрифта:</p>
                        </div>
                        <div style={style.half}>
                            <input style={style.color} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.fill = e.target.value;
                                const txts = texts.slice();
                                txts[txts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTexts(txts);
                            }} type={"color"} value={selectedShape?.fill}/>
                        </div>
                    </div>
                </Html>
            </Group>
        </React.Fragment>
    );
}

export default TextSettings;