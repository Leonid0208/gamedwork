import {mainWidth} from "../../functions/Consts";

export const style = {
    half: {
        width: mainWidth * 0.05 - 8,
        textAlign: 'center',
    },
    third: {
        width: mainWidth * 0.033 - 5,
        textAlign: 'center',
    },
    color: {
        width: 30,
        height: 30,
        borderRadius: 5,
        verticalAlign: "middle",
        backgroundColor: "#313c45",
        resize: "none",
        fontSize: 14,
        textAlign: "center",
        border: "none",
        outline: "none",
    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: "#313c45",
        resize: "none",
        fontSize: 20,
        textAlign: "center",
        color: "white"
    },
    common: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: "Montserrat",
        fontSize: 14,
        fontStyle: "normal",
        color: "white",
    },
    textarea: {
        overflow: "hidden",
        borderRadius: 5,
        verticalAlign: "middle",
        width: "75%",
        height: 30,
        backgroundColor: "#313c45",
        color: "white",
        resize: "none",
        fontSize: 14,
        textAlign: "center",
        border: "none",
        outline: "none",
    },
    select: {
        borderRadius: 5,
        verticalAlign: "middle",
        width: "75%",
        height: 30,
        backgroundColor: "#313c45",
        color: "white",
        resize: "none",
        fontSize: 14,
        textAlign: "center",
        border: "none",
        outline: "none",
    }
};