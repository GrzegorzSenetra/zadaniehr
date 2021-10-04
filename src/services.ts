export const syncFetch = (link: string, name: string): any => {
    try {
        const response = fetch(`${link}/${name}`, {
            method: 'GET',
            headers: new Headers({
                'Accept': "application/json"
            })
        });
        return response
    }
    catch (error) {
        console.error(error);
    }
}

export const deleteFetch = (link: string, name: string): any => {
    try {
        const response = fetch(`${link}/${name}`, {
            method: 'DELETE'
        });
        return response
    }
    catch (error) {
        console.error(error);
    }
}

export const syncPostService = (link: string, data: any) => {
    try {
        const response = fetch(`${link}`, {
            method: 'POST',
            headers: new Headers({
                'Accept': "application/json",
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        });
        return response
    }
    catch (error) {
        console.error(error);
    }
}