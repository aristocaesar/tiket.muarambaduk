/**
 * Access data Server Api MuaraMbaduk 
 */
export class MUARAMBADUK_API {
    
    /**
     * Action GET
     * @param path path access
     * @returns 
     */
    static async get(path: string) {
        const result = await fetch(`${process.env.API_URL}v1/${path}`);
        return result.json();
    }

    static async post() {
    }

    static async put() {
    }

    static async patch() {
    }

    static async delete() {
    }

}