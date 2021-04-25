import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.40:3333',
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com dispositivo: IP da maquina
 * 
 * Android com emulador: localhost com adb reverse
 * Android com emulador: 10.0.2.2 (Android Studio)
 * Android com emulador: 10.0.3.2 (Genymotion)
 * Android com dispositivo: IP da maquina
 * 
 */