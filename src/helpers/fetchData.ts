const API_CyberSecure = 'https://cyber-secure-be7c7289eff5.herokuapp.com/api';

type MethodProps = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const fetchApiCyberSecure = async (method: MethodProps, endPoint: string, params?: Record<number, string>, isPdf?: boolean ) => {
    try {
        // Construir la URL con los parámetros si están presentes
        let url = `${API_CyberSecure}${endPoint}`;
        if (params) {
            const queryParams = new URLSearchParams(params);
            url += `?${queryParams.toString()}`;
        }
        
        // Configurar la solicitud
        const requestOptions: RequestInit = {
            method: method,
            headers: {
                'Content-Type': isPdf ? 'application/json' : 'application/pdf'
            },
            mode: 'cors',
            cache: 'no-cache'
        };
        
        // Realizar la solicitud
        const response = await fetch(url, requestOptions);
        
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        
        // Convertir la respuesta a JSON y retornarla
        return await response.json();
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};
