// import Keycloak from 'keycloak-js';
// import React, { useEffect, useState, useRef } from 'react';

// const useAuth = () => {

//     const isRun = useRef(false);
//     const [token, setToken] = useState(null);
//     const [isLogin, setLogin] = useState(false);

//     // useEffect(() => {

//     //     if (isRun.current) return;

//     //     isRun.current = true;

//     //     const client = new Keycloak({
//     //         url: "http://127.0.0.1:8001/",
//     //         realm: "eze",
//     //         clientId: "eze",
//     //     });

//     //     // Initialize Keycloak instance
//     //     client.init({ onLoad: 'login-required' })
//     //         .then(res => {
//     //             setLogin(res);
//     //             setToken(client.token);
//     //         })
//     //         .catch(err => console.log(err));

//     // }, []);

//     console.log(isLogin, token)

//     return [isLogin, token];
// };

// export default useAuth;


// Login.tsx

"use client";
import { useEffect, useState, useRef } from 'react';
import SSOService from './ezeSSO';

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isRun = useRef(false);

    useEffect(() => {
        if (isRun.current) return;
        isRun.current = true;

        const ssoService = new SSOService('http://localhost:3001/login', 'community');
        
        
        ssoService.login();
    }, []); // Empty dependency array ensures this runs only once on mount

    return isLoggedIn;
};

export default useAuth;



