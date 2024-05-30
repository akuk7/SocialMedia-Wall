import { combineReducers } from 'redux';

// Define types
type Device = 'laptop' | 'mobile' | 'tab';
type WindowSize = {
  width: number;
  height: number;
  device: Device;
};

export interface RootState {
  windowSize: WindowSize;
}

// Initialize state
const initialWindowSize: WindowSize = {
  width: window.innerWidth,
  height: window.innerHeight,
  device: window.innerWidth > 1024 ? 'laptop' : window.innerWidth <= 1024 && window.innerWidth > 780 ? 'tab' : 'mobile'
};

// Define Action type
type Action = {
  type: string;
  payload?: Partial<WindowSize>;
};

// Window size reducer
const windowSizeReducer = (state: WindowSize = initialWindowSize, action: Action): WindowSize => {
  switch (action.type) {
    case 'SET_WINDOW_SIZE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Combine reducers with correct typing
const rootReducer = combineReducers({
  windowSize: windowSizeReducer
});

export default rootReducer;
