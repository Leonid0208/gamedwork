import React from "react";
import {Group} from "react-konva";
import {Html} from "react-konva-utils";
import {style} from "./common/style";
import {mainWidth} from "../functions/Consts";

function ImageSettings(props) {

    const selectedShape = props.getGlob.get('selectedShape');
    const images = props.getElem.get('image');
    const setImages = props.setElem.get('image');

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
                            <p style={{
                                fontFamily: "Montserrat",
                                fontStyle: "normal",
                                fontSize: 14,
                                color: "white",
                            }}>Ссылка:</p>
                        </div>

                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.src = e.target.value;
                                const imgs = images.slice();
                                imgs[imgs.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setImages(imgs);
                            }} value={selectedShape?.src}/>
                        </div>
                    </div>
                </Html>
            </Group>
        </React.Fragment>
    );
}

export default ImageSettings;