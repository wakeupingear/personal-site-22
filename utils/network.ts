export const __DEV__ = process.env.NODE_ENV === 'development';
const pageUrl = __DEV__
    ? 'http://localhost:3000'
    : 'https://pet-site-api.herokuapp.com';

export interface APIResponse {
    status: number;
    [key: string]: any;
}

const processResponse = async (response: Response): Promise<APIResponse> => {
    let returnData: any = {};
    if (response.ok) {
        returnData = await response.json();
    } else {
        returnData = {
            error: response.statusText,
        };
    }
    returnData.status = response.status;
    return returnData;
};

export const internal_apiGet = async (
    path: string,
    uid: string,
    options = {}
) => {
    try {
        const response = await fetch(pageUrl + path, {
            ...options,
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: uid,
            },
        });
        return await processResponse(response);
    } catch (error) {
        return {
            error: 'Connection error',
            status: 500,
        };
    }
};

export const internal_apiPost = async (
    path: string,
    body: object,
    uid: string,
    options = {}
) => {
    try {
        const response = await fetch(pageUrl + path, {
            ...options,
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: uid,
            },
        });
        return await processResponse(response);
    } catch (error) {
        return {
            error: 'Connection error',
            status: 500,
        };
    }
};
