class SSOService {
    private readonly url: string;
    private readonly secretId: string;

    constructor(url: string, secretId: string) {
        this.url = url;
        this.secretId = secretId;
    }

    login(): void {
        try {
            // Simulate login by redirecting to the SSO login page with client_id query parameter
            const redirectUrl = `${this.url}?secret-id=${this.secretId}`;
            window.location.href = redirectUrl;

            // In a real-world scenario, the user would authenticate on the SSO login page
            // and then be redirected back to the application with the access token
        } catch (error) {
            throw new Error('Error during login');
        }
    }

    async fetchToken(): Promise<[boolean, string]> {
        console.log("RESPPPPPPPPPP")
        try {
            const response = await fetch(`${this.url}?secretId=${this.secretId}`, {
                method: 'GET',
                credentials: 'include', // Include cookies in the request
                headers: {
                    'Content-Type': 'application/json' // Specify content type as JSON
                },
            });

            console.log("RESPONSE: ", response);
            const res = await response.json();
            console.log("res...... ", res)
    
            if (res.status === "ok") {
                return [true, res.accessToken]; // Assuming the token is in the response data
            } else {
                console.error('Failed to fetch token');
                return [false, ''];
            }
        } catch (error) {
            console.error('Error fetching token:', error);
            return [false, ''];
        }
    }
}

export default SSOService;