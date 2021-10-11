import React, {useEffect, useRef} from "react";
import {Group, Rect, Text, Transformer} from "react-konva";
import {dragBoundRef, dragBoundVar} from "../../functions/Functions";
import * as Test from "../../change/Test";

function TestElementEditor({shapeProps, isSelected, onSelect, onTextEdit, onChange}) {
    const shapeRef = useRef();
    const trRef = useRef();
    const questionRef = useRef();
    const themeRef = useRef();
    const answerRef = useRef([]);
    const resultRef = useRef();

    useEffect(() => {
        if (isSelected) {
            // we need to attach transformer manually
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }

    }, [isSelected]);

    return (
        <React.Fragment>
            <Group
                name={"object Test"}
                draggable
                onMouseDown={onSelect}
                onTap={onSelect}
                ref={shapeRef}
                {...shapeProps}

                onDragEnd={(e) => {
                    if (e.target.name() === 'object Test') {
                        Test.changePosition(onChange, shapeProps, e);
                    }
                }}

                onTransformEnd={(e) => {
                    Test.changeScale(onChange, shapeProps, e);
                }}

            >
                <Rect
                    name={"object Test"}
                    width={shapeProps.width}
                    height={shapeProps.height}
                    fill={shapeProps.fill}
                    cornerRadius={shapeProps.cornerRadius}
                />
                <Text
                    x={shapeProps.theme.x}
                    y={shapeProps.theme.y}
                    draggable
                    name={"object Theme"}
                    listening
                    text={shapeProps.theme.text}
                    fill={shapeProps.theme.fill}
                    fontSize={shapeProps.theme.fontSize}
                    ref={themeRef}
                    fontFamily={shapeProps.theme.fontFamily}

                    onDragEnd={(e) => {
                        if (e.target.name() === 'object Theme') {
                            Test.changeThemePosition(onChange, shapeProps, e);
                        }
                    }}

                    dragBoundFunc={(pos) => {
                        return dragBoundRef(pos, themeRef.current, shapeProps);
                    }}

                    onDblClick={() => {
                        const textNode = themeRef.current;
                        const stageRef = onTextEdit;

                        // hide text node and transformer:
                        textNode.hide();
                        trRef.current.visible(false);

                        // create textarea over canvas with absolute position
                        // first we need to find position for textarea
                        // how to find it?

                        // at first lets find position of text node relative to the stage:
                        var textPosition = textNode.absolutePosition();

                        // so position of textarea will be the sum of positions above:
                        var areaPosition = {
                            x: stageRef.current.container().offsetLeft + textPosition.x,
                            y: stageRef.current.container().offsetTop + textPosition.y,
                        };

                        // create textarea and style it
                        var textarea = document.createElement('textarea');
                        document.body.appendChild(textarea);

                        // apply many styles to match text on canvas as close as possible
                        // remember that text rendering on canvas and on the textarea can be different
                        // and sometimes it is hard to make it 100% the same. But we will try...
                        textarea.value = textNode.text();
                        textarea.style.position = 'absolute';
                        textarea.style.top = areaPosition.y + 'px';
                        textarea.style.left = areaPosition.x + 'px';
                        textarea.style.width = textNode.width() - textNode.padding() * 2 + 'px';
                        textarea.style.height =
                            textNode.height() - textNode.padding() * 2 + 5 + 'px';
                        textarea.style.fontSize = textNode.fontSize() + 'px';
                        textarea.style.border = 'none';
                        textarea.style.padding = '0px';
                        textarea.style.margin = '0px';
                        textarea.style.overflow = 'hidden';
                        textarea.style.background = 'none';
                        textarea.style.outline = 'none';
                        textarea.style.resize = 'none';
                        textarea.style.lineHeight = textNode.lineHeight();
                        textarea.style.fontFamily = textNode.fontFamily();
                        textarea.style.transformOrigin = 'left top';
                        textarea.style.textAlign = textNode.align();
                        textarea.style.color = textNode.fill();
                        var rotation = textNode.rotation();
                        var transform = '';
                        if (rotation) {
                            transform += 'rotateZ(' + rotation + 'deg)';
                        }

                        var px = 0;
                        // also we need to slightly move textarea on firefox
                        // because it jumps a bit
                        var isFirefox =
                            navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                        if (isFirefox) {
                            px += 2 + Math.round(textNode.fontSize() / 20);
                        }
                        transform += 'translateY(-' + px + 'px)';

                        textarea.style.transform = transform;

                        // reset height
                        textarea.style.height = 'auto';
                        // after browsers resized it we can set actual value
                        textarea.style.height = textarea.scrollHeight + 3 + 'px';

                        textarea.focus();

                        function removeTextarea() {
                            Test.changeThemeText(onChange, shapeProps, textarea.value);

                            textarea.parentNode.removeChild(textarea);
                            window.removeEventListener('click', handleOutsideClick);
                            textNode.show();
                            trRef.current.show();
                            trRef.current.forceUpdate();
                        }

                        function setTextareaWidth(newWidth) {
                            if (!newWidth) {
                                // set width for placeholder
                                newWidth = textNode.placeholder.length * textNode.fontSize();
                            }
                            // some extra fixes on different browsers
                            var isSafari = /^((?!chrome|android).)*safari/i.test(
                                navigator.userAgent
                            );
                            var isFirefox =
                                navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                            if (isSafari || isFirefox) {
                                newWidth = Math.ceil(newWidth);
                            }

                            var isEdge =
                                document.documentMode || /Edge/.test(navigator.userAgent);
                            if (isEdge) {
                                newWidth += 1;
                            }
                            textarea.style.width = newWidth + 'px';
                        }

                        textarea.addEventListener('keydown', function (e) {
                            // hide on enter
                            // but don't hide on shift + enter
                            if (e.keyCode === 13 && !e.shiftKey) {
                                textNode.text(textarea.value);
                                removeTextarea();
                            }
                            // on esc do not set value back to node
                            if (e.keyCode === 27) {
                                removeTextarea();
                            }
                        });

                        textarea.addEventListener('keydown', function (e) {
                            var scale = textNode.getAbsoluteScale().x;
                            setTextareaWidth(textNode.width() * scale);
                            textarea.style.height = 'auto';
                            textarea.style.height =
                                textarea.scrollHeight + textNode.fontSize() + 'px';
                        });

                        function handleOutsideClick(e) {
                            if (e.target !== textarea) {
                                textNode.text(textarea.value);
                                removeTextarea();
                            }
                        }

                        setTimeout(() => {
                            window.addEventListener('click', handleOutsideClick);
                        });
                    }}
                />

                <Text
                    x={shapeProps.question.x}
                    y={shapeProps.question.y}
                    text={shapeProps.questions[shapeProps.curQuestion].text}
                    draggable
                    name={"object Question"}
                    listening
                    fill={shapeProps.question.fill}
                    fontSize={shapeProps.question.fontSize}
                    ref={questionRef}
                    fontFamily={shapeProps.question.fontFamily}

                    onDragEnd={(e) => {
                        if (e.target.name() === 'object Question') {
                            Test.changeQuestionPosition(onChange, shapeProps, e);
                        }
                    }}

                    dragBoundFunc={(pos) => {
                        return dragBoundRef(pos, questionRef.current, shapeProps);
                    }}

                    onDblClick={() => {
                        const textNode = questionRef.current;
                        const stageRef = onTextEdit;

                        // hide text node and transformer:
                        textNode.hide();
                        trRef.current.visible(false);

                        // create textarea over canvas with absolute position
                        // first we need to find position for textarea
                        // how to find it?

                        // at first lets find position of text node relative to the stage:
                        var textPosition = textNode.absolutePosition();

                        // so position of textarea will be the sum of positions above:
                        var areaPosition = {
                            x: stageRef.current.container().offsetLeft + textPosition.x,
                            y: stageRef.current.container().offsetTop + textPosition.y,
                        };

                        // create textarea and style it
                        var textarea = document.createElement('textarea');
                        document.body.appendChild(textarea);

                        // apply many styles to match text on canvas as close as possible
                        // remember that text rendering on canvas and on the textarea can be different
                        // and sometimes it is hard to make it 100% the same. But we will try...
                        textarea.value = textNode.text();
                        textarea.style.position = 'absolute';
                        textarea.style.top = areaPosition.y + 'px';
                        textarea.style.left = areaPosition.x + 'px';
                        textarea.style.width = textNode.width() - textNode.padding() * 2 + 'px';
                        textarea.style.height =
                            textNode.height() - textNode.padding() * 2 + 5 + 'px';
                        textarea.style.fontSize = textNode.fontSize() + 'px';
                        textarea.style.border = 'none';
                        textarea.style.padding = '0px';
                        textarea.style.margin = '0px';
                        textarea.style.overflow = 'hidden';
                        textarea.style.background = 'none';
                        textarea.style.outline = 'none';
                        textarea.style.resize = 'none';
                        textarea.style.lineHeight = textNode.lineHeight();
                        textarea.style.fontFamily = textNode.fontFamily();
                        textarea.style.transformOrigin = 'left top';
                        textarea.style.textAlign = textNode.align();
                        textarea.style.color = textNode.fill();
                        var rotation = textNode.rotation();
                        var transform = '';
                        if (rotation) {
                            transform += 'rotateZ(' + rotation + 'deg)';
                        }

                        var px = 0;
                        // also we need to slightly move textarea on firefox
                        // because it jumps a bit
                        var isFirefox =
                            navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                        if (isFirefox) {
                            px += 2 + Math.round(textNode.fontSize() / 20);
                        }
                        transform += 'translateY(-' + px + 'px)';

                        textarea.style.transform = transform;

                        // reset height
                        textarea.style.height = 'auto';
                        // after browsers resized it we can set actual value
                        textarea.style.height = textarea.scrollHeight + 3 + 'px';

                        textarea.focus();

                        function removeTextarea() {
                            Test.changeQuestionText(onChange, shapeProps, textarea.value);

                            textarea.parentNode.removeChild(textarea);
                            window.removeEventListener('click', handleOutsideClick);
                            textNode.show();
                            trRef.current.show();
                            trRef.current.forceUpdate();
                        }

                        function setTextareaWidth(newWidth) {
                            if (!newWidth) {
                                // set width for placeholder
                                newWidth = textNode.placeholder.length * textNode.fontSize();
                            }
                            // some extra fixes on different browsers
                            var isSafari = /^((?!chrome|android).)*safari/i.test(
                                navigator.userAgent
                            );
                            var isFirefox =
                                navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                            if (isSafari || isFirefox) {
                                newWidth = Math.ceil(newWidth);
                            }

                            var isEdge =
                                document.documentMode || /Edge/.test(navigator.userAgent);
                            if (isEdge) {
                                newWidth += 1;
                            }
                            textarea.style.width = newWidth + 'px';
                        }

                        textarea.addEventListener('keydown', function (e) {
                            // hide on enter
                            // but don't hide on shift + enter
                            if (e.keyCode === 13 && !e.shiftKey) {
                                textNode.text(textarea.value);
                                removeTextarea();
                            }
                            // on esc do not set value back to node
                            if (e.keyCode === 27) {
                                removeTextarea();
                            }
                        });

                        textarea.addEventListener('keydown', function (e) {
                            var scale = textNode.getAbsoluteScale().x;
                            setTextareaWidth(textNode.width() * scale);
                            textarea.style.height = 'auto';
                            textarea.style.height =
                                textarea.scrollHeight + textNode.fontSize() + 'px';
                        });

                        function handleOutsideClick(e) {
                            if (e.target !== textarea) {
                                textNode.text(textarea.value);
                                removeTextarea();
                            }
                        }

                        setTimeout(() => {
                            window.addEventListener('click', handleOutsideClick);
                        });
                    }}
                />

                {shapeProps.questions[shapeProps.curQuestion].answers.map((eachAnswer, i) => (
                    <Group
                        name={"object Answer"}
                        draggable
                        key={i}
                        x={eachAnswer.x}
                        y={eachAnswer.y}
                        width={shapeProps.answer.width}
                        height={shapeProps.answer.height}
                        ref={el => answerRef.current[i] = el}

                        onDragEnd={(e) => {
                            if (e.target.name() === 'object Answer') {
                                Test.changeAnswersPosition(onChange, shapeProps, e, eachAnswer);
                            }
                        }}

                        dragBoundFunc={(pos) => {
                            return dragBoundRef(pos, answerRef.current[i], shapeProps);
                        }}
                    >
                        <Rect
                            name={"object Answer"}
                            width={shapeProps.answer.width}
                            height={shapeProps.answer.height}
                            fill={shapeProps.answer.backgroundFill}
                            cornerRadius={shapeProps.answer.cornerRadius}
                        />
                        <Text
                            name={"object Answer"}
                            text={eachAnswer.text}
                            height={shapeProps.answer.height}
                            width={shapeProps.answer.width}
                            fontSize={shapeProps.answer.fontSize}
                            fill={shapeProps.answer.textFill}
                            fontFamily={shapeProps.answer.fontFamily}
                            align={"center"}
                            verticalAlign={"middle"}

                            onDblClick={() => {
                                const textNode = answerRef.current[i].children[1];
                                const stageRef = onTextEdit;

                                // hide text node and transformer:
                                textNode.hide();
                                trRef.current.visible(false);

                                // create textarea over canvas with absolute position
                                // first we need to find position for textarea
                                // how to find it?

                                // at first lets find position of text node relative to the stage:
                                var textPosition = textNode.absolutePosition();

                                // so position of textarea will be the sum of positions above:
                                var areaPosition = {
                                    x: stageRef.current.container().offsetLeft + textPosition.x,
                                    y: stageRef.current.container().offsetTop + textPosition.y,
                                };

                                // create textarea and style it
                                var textarea = document.createElement('textarea');
                                document.body.appendChild(textarea);

                                // apply many styles to match text on canvas as close as possible
                                // remember that text rendering on canvas and on the textarea can be different
                                // and sometimes it is hard to make it 100% the same. But we will try...
                                textarea.value = textNode.text();
                                textarea.style.position = 'absolute';
                                textarea.style.top = areaPosition.y + 'px';
                                textarea.style.left = areaPosition.x + 'px';
                                textarea.style.width = textNode.width() - textNode.padding() * 2 + 'px';
                                textarea.style.height =
                                    textNode.height() - textNode.padding() * 2 + 5 + 'px';
                                textarea.style.fontSize = textNode.fontSize() + 'px';
                                textarea.style.border = 'none';
                                textarea.style.padding = '0px';
                                textarea.style.margin = '0px';
                                textarea.style.overflow = 'hidden';
                                textarea.style.background = 'none';
                                textarea.style.outline = 'none';
                                textarea.style.resize = 'none';
                                textarea.style.lineHeight = textNode.lineHeight();
                                textarea.style.fontFamily = textNode.fontFamily();
                                textarea.style.transformOrigin = 'left top';
                                textarea.style.textAlign = textNode.align();
                                textarea.style.color = textNode.fill();
                                var rotation = textNode.rotation();
                                var transform = '';
                                if (rotation) {
                                    transform += 'rotateZ(' + rotation + 'deg)';
                                }

                                var px = 0;
                                // also we need to slightly move textarea on firefox
                                // because it jumps a bit
                                var isFirefox =
                                    navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                                if (isFirefox) {
                                    px += 2 + Math.round(textNode.fontSize() / 20);
                                }
                                transform += 'translateY(-' + px + 'px)';

                                textarea.style.transform = transform;

                                // reset height
                                textarea.style.height = 'auto';
                                // after browsers resized it we can set actual value
                                textarea.style.height = textarea.scrollHeight + 3 + 'px';

                                textarea.focus();

                                function removeTextarea() {
                                    Test.changeAnswerText(onChange, shapeProps, eachAnswer, textarea.value);

                                    textarea.parentNode.removeChild(textarea);
                                    window.removeEventListener('click', handleOutsideClick);
                                    textNode.show();
                                    trRef.current.show();
                                    trRef.current.forceUpdate();
                                }

                                function setTextareaWidth(newWidth) {
                                    if (!newWidth) {
                                        // set width for placeholder
                                        newWidth = textNode.placeholder.length * textNode.fontSize();
                                    }
                                    // some extra fixes on different browsers
                                    var isSafari = /^((?!chrome|android).)*safari/i.test(
                                        navigator.userAgent
                                    );
                                    var isFirefox =
                                        navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                                    if (isSafari || isFirefox) {
                                        newWidth = Math.ceil(newWidth);
                                    }

                                    var isEdge =
                                        document.documentMode || /Edge/.test(navigator.userAgent);
                                    if (isEdge) {
                                        newWidth += 1;
                                    }
                                    textarea.style.width = newWidth + 'px';
                                }

                                textarea.addEventListener('keydown', function (e) {
                                    // hide on enter
                                    // but don't hide on shift + enter
                                    if (e.keyCode === 13 && !e.shiftKey) {
                                        textNode.text(textarea.value);
                                        removeTextarea();
                                    }
                                    // on esc do not set value back to node
                                    if (e.keyCode === 27) {
                                        removeTextarea();
                                    }
                                });

                                textarea.addEventListener('keydown', function (e) {
                                    var scale = textNode.getAbsoluteScale().x;
                                    setTextareaWidth(textNode.width() * scale);
                                    textarea.style.height = 'auto';
                                    textarea.style.height =
                                        textarea.scrollHeight + textNode.fontSize() + 'px';
                                });

                                function handleOutsideClick(e) {
                                    if (e.target !== textarea) {
                                        textNode.text(textarea.value);
                                        removeTextarea();
                                    }
                                }

                                setTimeout(() => {
                                    window.addEventListener('click', handleOutsideClick);
                                });
                            }}
                        />
                    </Group>

                ))}

                <Group
                    name={"object Button"}
                    draggable
                    x={shapeProps.button.x}
                    y={shapeProps.button.y}
                    width={shapeProps.button.width}
                    height={shapeProps.button.height}

                    onDragEnd={(e) => {
                        if (e.target.name() === 'object Button') {
                            Test.changeButtonPosition(onChange, shapeProps, e);
                        }
                    }}

                    dragBoundFunc={(pos) => {
                        return dragBoundVar(pos, shapeProps.button, shapeProps);
                    }}
                >
                    <Rect
                        name={"object Button"}
                        x={0}
                        y={0}
                        width={shapeProps.button.width}
                        height={shapeProps.button.height}
                        fill={shapeProps.button.backgroundFill}
                        cornerRadius={shapeProps.button.cornerRadius}
                    />
                    <Text
                        name={"object Button"}
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
                    draggable
                    name={"object Result"}
                    listening
                    x={shapeProps.result.x}
                    y={shapeProps.result.y}
                    text={shapeProps.result.text}
                    fill={shapeProps.result.fill}
                    fontSize={shapeProps.result.fontSize}
                    fontFamily={shapeProps.result.fontFamily}
                    ref={resultRef}

                    onDragEnd={(e) => {
                        if (e.target.name() === 'object Result') {
                            Test.changeResultPosition(onChange, shapeProps, e);
                        }
                    }}

                    dragBoundFunc={(pos) => {
                        return dragBoundRef(pos, resultRef.current, shapeProps);
                    }}
                />
            </Group>
            {isSelected && (
                <Transformer
                    ref={trRef}
                />
            )}
        </React.Fragment>
    );
}

export default TestElementEditor;