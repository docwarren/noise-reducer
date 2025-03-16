import { BLUE, YELLOW } from "./colors.js";

const colorToString = (color: number[]) => `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

const colorDiff = (color1: number[], color2: number[]) => [color1[0] - color2[0], color1[1] - color2[1], color1[2] - color2[2]];

const colorForValue = (value: number) => {
    // Value must be between 0 and 1
    // 0 is blue
    // 1 is yellow
    const ybDiff = colorDiff(YELLOW, BLUE);
    const valueDiffs = ybDiff.map(d => d * value);
    return [
        BLUE[0] + valueDiffs[0],
        BLUE[1] + valueDiffs[1],
        BLUE[2] + valueDiffs[2]
    ]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const noReducer = (value: number, delta: number) => colorToString(colorForValue(value));

export const basicReducer = (value: number, delta: number) => {
    let newValue = value + delta;
    newValue = newValue < 0 ? 0 : newValue;
    newValue = newValue > 1 ? 1 : newValue;
    const newColor = colorForValue(newValue);

    return colorToString(newColor);
}

export const squashReducer = (value: number, delta: number) => {
    let newValue = value + (( 1 - value) * delta);
    newValue = newValue < 0 ? 0 : newValue;
    newValue = newValue > 1 ? 1 : newValue;
    const newColor = colorForValue(newValue);

    return colorToString(newColor);
}
