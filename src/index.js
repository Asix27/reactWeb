import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPIFiphIFlsE9QlIjzrUtj5p5tEv0m55E",
    authDomain: "react-web-8eb95.firebaseapp.com",
    projectId: "react-web-8eb95",
    storageBucket: "react-web-8eb95.appspot.com",
    messagingSenderId: "826882210842",
    appId: "1:826882210842:web:900cdd75fcb9d02ebda5a3",
    measurementId: "G-Y47VQ1WQ4Q"
};

const app = initializeApp(firebaseConfig);
export const ContextAuth = createContext(null);

const auth = getAuth(app);
const firestore = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextAuth.Provider value={{
            app,
            auth,
            firestore
        }}>
            <App />
        </ContextAuth.Provider>
    </React.StrictMode>
);

reportWebVitals();
