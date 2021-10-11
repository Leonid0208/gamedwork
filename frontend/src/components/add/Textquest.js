import {mainWidth, mainHeight} from "../functions/Consts";

export const mainTextquest = (props) => {
    props.setElem.get('textquest')((prevTextquests) => [
        ...prevTextquests,
        {
            counter: props.getCount.get('common'),
            field: props.getGlob.get('field').toString(),
            x: mainWidth * 0.8 / 2,
            y: mainHeight * 0.7575 / 2,
            curText: 0,
            id: 'textquest' + props.getCount.get('textquest').toString(),
            unit: {
                height: 200,
                width: 200,
                fontSize: 20,
                fontFamily: "Arial",
                backgroundFill: "#FFFFFE",
                textFill: "#000002",
                opacity: 1,
                cornerRadius: 0,
            },
            button: {
                width: 50,
                height: 50,
                cornerRadius: 0,
                fontSize: 20,
                fontFamily: "Arial",
                backgroundFill: "#000002",
                textFill: "#FFFFFE",
            },
            units: [{
                x: 0,
                y: 0,
                number: 0,
                text: "Текст",
                buttons: [{
                    x: 0,
                    y: 50,
                    text: 'д1'
                }],
            }],
        }
    ]);
    props.setCount.get('textquest')(props.getCount.get('textquest') + 1);
    props.setCount.get('common')(props.getCount.get('common') + 1);
}

export const textquestTemplate1 = (props) => {
    props.setElem.get('textquest')((prevTextquests) => [
        ...prevTextquests,
        {
            counter: props.getCount.get('common'),
            field: props.getGlob.get('field').toString(),
            x: mainWidth * 0.8 / 2,
            y: mainHeight * 0.7575 / 2,
            curText: 0,
            id: 'textquest' + props.getCount.get('textquest').toString(),
            unit: {
                height: 236,
                width: 593 * 2,
                fontSize: 20,
                fontFamily: "Montserrat",
                backgroundFill: "#FFFFFE",
                textFill: "#000002",
                opacity: 0.6,
                cornerRadius: 5,
            },
            button: {
                width: 204,
                height: 42,
                cornerRadius: 5,
                fontSize: 20,
                fontFamily: "Montserrat",
                backgroundFill: "#5753C9",
                textFill: "#FFFFFE",
            },
            units: [{
                x: 30,
                y: 22,
                number: 0,
                text: "Привет, юный стартапер!\n" +
                    "Большое начинается с малого. Многие сложные алгоритмы основаны на привычных нам математических операциях! Попробуй написать программу, складывающую два числа. На первый взгляд может показаться сложным! Но я-то точно знаю, что у тебя получится!\n",
                buttons: [{
                    x: 30,
                    y: 106,
                    text: 'действие 1'
                }, {
                    x: 30,
                    y: 162,
                    text: 'действие 2'
                }],
            }],
        }
    ]);
    props.setCount.get('textquest')(props.getCount.get('textquest') + 1);
    props.setCount.get('common')(props.getCount.get('common') + 1);
}