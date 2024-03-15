const API_CyberSecure='https://788f-210-211-56-90.ngrok-free.app/api'; //Importante revisar la ip de nuestra máquina

type MethodProps = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const fetchApiCyberSecure = async (method: MethodProps, endPoint: string, data?: any) => {
    try {
        
        // Configurar la solicitud
        const requestOptions: RequestInit = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer <token-csrf>'
            },
            mode: 'cors', // Permitir el acceso desde cualquier origen
            cache: 'no-cache', // Usar el cache por defecto del navegador
            body: data ? JSON.stringify(data) : undefined // Convertir los datos a JSON si están presentes
        };
        
        // Realizar la solicitud
        const response = await fetch(`${API_CyberSecure}${endPoint}`, requestOptions);
        console.log(response);
        
        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        
        // Convertir la respuesta a JSON y retornarla
        return await response.json();
    } catch (error) {
        // Manejar errores de red o de análisis JSON
        console.error('Error en la solicitud:', error);
        throw error; // Propagar el error para que sea manejado por el código que llama a fetchApi
    }
};
