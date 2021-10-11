import React, {useState} from "react";
import {Group, Rect, Text} from "react-konva";
import {
    changeAnswerVisible,
    changeButtonTextAndVisible,
    changeButtonVisible,
    changeCurQuestion,
    changeQuestionVisible,
    changeResultState,
    changeResultStateAndVisible
} from "../../change/Test";

function TestElementUser({shapeProps, onChange}) {
    const [flashState, setFlashState] = useState('Start');
    const [countIter, setCountIter] = useState(0);

    return (
        <React.Fragment>
            <Group
                name={"NameTest"}
                {...shapeProps}
            >
                <Rect
                    name={"Test"}
                    x={0}
                    y={0}
                    width={shapeProps.width}
                    height={shapeProps.height}
                    fill={shapeProps.fill}
                    cornerRadius={shapeProps.cornerRadius}
                />
                <Text
                    name={"Test"}
                    x={shapeProps.question.x}
                    y={shapeProps.question.y}
                    text={shapeProps.questions[shapeProps.curQuestion]?.text}
                    fill={shapeProps.question.fill}
                    fontSize={shapeProps.question.fontSize}
                    fontFamily={shapeProps.question.fontFamily}
                    visible={shapeProps.question.visible}
                />
                <Text
                    name={"Test"}
                    x={shapeProps.theme.x}
                    y={shapeProps.theme.y}
                    text={shapeProps.theme.text}
                    fill={shapeProps.theme.fill}
                    fontSize={shapeProps.theme.fontSize}
                    fontFamily={shapeProps.theme.fontFamily}
                />
                {shapeProps?.questions[shapeProps.curQuestion]?.answers.map((eachAnswer, i) => (
                    <Group
                        key={i}
                        x={eachAnswer.x}
                        y={eachAnswer.y}
                        width={eachAnswer.width}
                        height={eachAnswer.height}
                        visible={shapeProps.answer.visible}
                        onClick={(e) => {
                            setFlashState("Wait");
                            if (shapeProps.questions[shapeProps.curQuestion]?.result !== eachAnswer) {
                                onChange({
                                    ...shapeProps,
                                    button: changeButtonTextAndVisible(shapeProps, "Дальше", true),
                                    result: changeResultState(shapeProps, "red", "Wrong")
                                })
                            } else {
                                onChange({
                                    ...shapeProps,
                                    button: changeButtonTextAndVisible(shapeProps, "Дальше", true),
                                    result: changeResultState(shapeProps, "green", "Right"),
                                })
                            }
                            setCountIter(countIter + 1)
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.opacity(0.5);
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.opacity(1);
                        }}
                    >
                        <Rect
                            width={shapeProps.answer.width}
                            height={shapeProps.answer.height}
                            fill={shapeProps.answer.backgroundFill}
                            cornerRadius={shapeProps.answer.cornerRadius}
                        />
                        <Text
                            text={eachAnswer.text}
                            height={shapeProps.answer.height}
                            width={shapeProps.answer.width}
                            fontSize={shapeProps.answer.fontSize}
                            fill={shapeProps.answer.textFill}
                            fontFamily={shapeProps.answer.fontFamily}
                            align={"center"}
                            verticalAlign={"middle"}
                        />
                    </Group>
                ))}

                <Group
                    name={"Button"}
                    x={shapeProps.button.x}
                    y={shapeProps.button.y}
                    width={shapeProps.button.width}
                    height={shapeProps.button.height}
                    visible={shapeProps.button.visible}
                    onMouseOver={(e) => {
                        e.currentTarget.opacity(0.5);
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.opacity(1);
                    }}

                    onClick={(e) => {
                        if (flashState === "Start") {
                            setFlashState("Wait");
                            onChange({
                                ...shapeProps,
                                answer: changeAnswerVisible(shapeProps, true),
                                question: changeQuestionVisible(shapeProps, true),
                                curQuestion: changeCurQuestion(shapeProps, 0),
                                button: changeButtonVisible(shapeProps, false)
                            })
                        } else if (flashState === "Wait" && countIter < shapeProps.questions.length) {
                            onChange({
                                ...shapeProps,
                                curQuestion: changeCurQuestion(shapeProps, shapeProps.curQuestion + 1),
                                button: changeButtonTextAndVisible(shapeProps, "Дальше", false),
                            })
                        } else if (flashState === "Wait" && countIter >= shapeProps.questions.length) {
                            setFlashState("Start");
                            onChange({
                                ...shapeProps,
                                button: changeButtonTextAndVisible(shapeProps, "Старт", true),
                                answer: changeAnswerVisible(shapeProps, false),
                                question: changeQuestionVisible(shapeProps, false),
                                curQuestion: changeCurQuestion(shapeProps, 0),
                                result: changeResultStateAndVisible(shapeProps, "green", "Result", false),
                            })
                            setCountIter(0);
                        }
                    }}
                >
                    <Rect
                        name={"Button"}
                        x={0}
                        y={0}
                        width={shapeProps.button.width}
                        height={shapeProps.button.height}
                        fill={shapeProps.button.backgroundFill}
                        cornerRadius={shapeProps.button.cornerRadius}
                    />
                    <Text
                        name={"Button"}
                        x={0}
                        y={0}
                        text={shapeProps.button.text}
                        height={shapeProps.button.height}
                        width={shapeProps.button.width}
                        fontSize={shapeProps.button.fontSize}
                        fill={shapeProps.button.textFill}
                        fontFamily={shapeProps.button.fontFamily}
                        align={"center"}
                        verticalAlign={"middle"}
                    />
                </Group>

                <Text
                    x={shapeProps.result.x}
                    y={shapeProps.result.y}
                    text={shapeProps.result.text}
                    fill={shapeProps.result.fill}
                    fontSize={shapeProps.result.fontSize}
                    visible={shapeProps.result.visible}
                />
            </Group>
        </React.Fragment>
    );
}

export default TestElementUser;