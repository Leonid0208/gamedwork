import React from "react";
import {Group} from "react-konva";
import {Html} from "react-konva-utils";
import {style} from "./common/style";
import {mainWidth} from "../functions/Consts";

function TestSettings(props) {

    const selectedShape = props.getGlob.get('selectedShape');
    const tests = props.getElem.get('test');
    const setTests = props.setElem.get('test');

    const options = ["Cursive", "Fantasy", "Montserrat", "Arial", "Helvetica", "Gill Sans", "Lucida", "Helvetica Narrow", "Times", "Times New Roman", "Palatino", "Bookman", "New Century Schoolbook", "Andale Mono", "Courier New", "Courier", "Lucidatypewriter", "Fixed", "Comic Sans", "Comic Sans MS", "Zapf Chancery", "Coronetscript", "Florence", "Parkavenue", "Impact", "Arnoldboecklin", "Oldtown", "Blippo", "Brushstroke"].sort();

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
                            <p style={style.text}>Цвет фона:</p>
                        </div>
                        <div style={style.half}>
                            <input style={style.color} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.fill = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} type={"color"} value={selectedShape?.fill}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Радиус углов:</p>
                        </div>
                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.cornerRadius = Number(e.target.value);
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.cornerRadius} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Тема:</p>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Размер шрифта:</p>
                        </div>

                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.theme.fontSize = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.theme?.fontSize} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Семейство шрифта:</p>
                        </div>
                        <div style={style.half}>
                            <select style={style.select} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.theme.fontFamily = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.theme?.fontFamily}>
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
                                newAttrs.theme.fill = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} type={"color"} value={selectedShape?.theme?.fill}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Вопрос:</p>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Размер шрифта:</p>
                        </div>

                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.question.fontSize = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.question?.fontSize} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Семейство шрифта:</p>
                        </div>
                        <div style={style.half}>
                            <select style={style.select} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.question.fontFamily = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.question?.fontFamily}>
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
                                newAttrs.question.fill = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} type={"color"} value={selectedShape?.question?.fill}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Кнопка:</p>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Размер шрифта:</p>
                        </div>

                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.answer.fontSize = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.answer?.fontSize} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Семейство шрифта:</p>
                        </div>
                        <div style={style.half}>
                            <select style={style.select} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.answer.fontFamily = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.answer?.fontFamily}>
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
                                newAttrs.answer.textFill = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} type={"color"} value={selectedShape?.answer?.textFill}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Цвет фона:</p>
                        </div>
                        <div style={style.half}>
                            <input style={style.color} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.answer.backgroundFill = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} type={"color"} value={selectedShape?.answer?.backgroundFill}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Радиус углов:</p>
                        </div>
                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.answer.cornerRadius = Number(e.target.value);
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.answer?.cornerRadius} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Ширина:</p>
                        </div>
                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.answer.width = Number(e.target.value);
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.answer?.width} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Высота:</p>
                        </div>
                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.answer.height = Number(e.target.value);
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.answer?.height} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Результат:</p>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Размер шрифта:</p>
                        </div>

                        <div style={style.half}>
                            <textarea style={style.textarea} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.result.fontSize = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.result?.fontSize} maxLength={3} rows={1} cols={3}/>
                        </div>
                    </div>

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Семейство шрифта:</p>
                        </div>
                        <div style={style.half}>
                            <select style={style.select} onChange={(e) => {
                                const newAttrs = selectedShape;
                                newAttrs.result.fontFamily = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={selectedShape?.result?.fontFamily}>
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
                                newAttrs.result.fill = e.target.value;
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} type={"color"} value={selectedShape?.result?.fill}/>
                        </div>
                    </div>

                    {selectedShape?.questions?.map((eachQuestion, i) => (
                        <div>
                            <div key={i} style={style.common}>
                                <div style={style.third}>
                                    <p style={style.text}>{eachQuestion.text}</p>
                                </div>

                                <div style={style.third}>
                                    <input style={style.button} type={"button"} onClick={() => {
                                        console.log(i);
                                        const newAttrs = selectedShape;
                                        newAttrs.curQuestion = i;
                                        const tsts = tests.slice();
                                        tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                        setTests(tsts);
                                    }} value={'✓'}/>
                                </div>

                                <div style={style.third}>
                                    <input style={style.button} type={"button"} onClick={() => {
                                        const newAttrs = selectedShape;
                                        newAttrs.questions= newAttrs.questions.filter(item => item !== newAttrs.questions[i]);
                                        const tsts = tests.slice();
                                        tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                        setTests(tsts);
                                    }} value={'-'}/>
                                </div>
                            </div>

                            <div key={i}>
                                {selectedShape?.questions[i].answers?.map((eachAnswer, j) => (
                                    <div key={j} style={style.common}>

                                        <div style={style.third}>
                                            <p style={style.text}>{selectedShape?.questions[i].answers[j].text}:</p>
                                        </div>

                                        <div style={style.third}>
                                            <input style={style.button} type={"button"} onClick={() => {
                                                const newAttrs = selectedShape;
                                                newAttrs.questions[i].result = newAttrs.questions[i].answers[j];
                                                const tsts = tests.slice();
                                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                                setTests(tsts);
                                            }} value={'✓'}/>
                                        </div>

                                        <div style={style.third}>
                                            <input style={style.button} type={"button"} onClick={() => {
                                                const newAttrs = selectedShape;
                                                newAttrs.questions[i].answers = newAttrs.questions[i].answers.filter(item => item !== newAttrs.questions[i].answers[j]);
                                                const tsts = tests.slice();
                                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                                setTests(tsts);
                                            }} value={'-'}/>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div key={i} style={style.common}>
                                <div style={style.half}>
                                    <p style={style.text}>Добавить ответ:</p>
                                </div>
                                <div style={style.half}>
                                    <input style={style.button} type={"button"} onClick={() => {
                                        const newAttrs = selectedShape;
                                        newAttrs.questions[i].answers = [...newAttrs.questions[i].answers, {
                                            text: "Answer",
                                            x: 0,
                                            y: 0,
                                        }];
                                        const tsts = tests.slice();
                                        tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                        setTests(tsts);
                                    }} value={'+'}/>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div style={style.common}>
                        <div style={style.half}>
                            <p style={style.text}>Добавить вопрос:</p>
                        </div>
                        <div style={style.half}>
                            <input style={style.button} type={"button"} onClick={() => {
                                const newAttrs = selectedShape;
                                newAttrs.questions = [...newAttrs.questions, {
                                    text: "Question",
                                    answers: [
                                        {
                                            text: "ответ 1",
                                        },
                                        {
                                            text: "ответ 2",
                                        },
                                        {
                                            text: "ответ 3",
                                        },
                                        {
                                            text: "ответ 4",
                                        }],
                                    result: null,
                                }];
                                const tsts = tests.slice();
                                tsts[tsts.findIndex((el) => el.id === selectedShape?.id)] = newAttrs;
                                setTests(tsts);
                            }} value={'+'}/>
                        </div>
                    </div>
                </Html>
            </Group>
        </React.Fragment>
    );
}

export default TestSettings;