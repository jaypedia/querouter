import axios from 'axios';
import { createRoot } from 'react-dom/client';

import { API_END_POINT } from './constants/constants';

import { App } from '@/App';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
axios.defaults.baseURL = API_END_POINT;

root.render(<App />);
