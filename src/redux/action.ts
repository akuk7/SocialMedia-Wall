
type Device = "laptop" | "mobile" | "tab";
export const setWindowSize = (width: number, height: number, device: Device) => ({
    type: 'SET_WINDOW_SIZE',
    payload: {width, height, device},
}) 