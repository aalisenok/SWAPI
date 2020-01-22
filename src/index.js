class SoccerService {

    _apiBase = 'https://api.sportradar.us';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        // if (!res.ok) {
        //     throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        // }
        return await res.json();
    }

    async getAllClubs() {
        return this.getResource(`/soccer-extended/`);

    }
}

const scoreBat = new SoccerService();

scoreBat.getAllClubs().then((body) => {
    console.log(body);
});






