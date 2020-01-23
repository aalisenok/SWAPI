class SoccerService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(
            `${this._apiBase}${url}`
            // {headers: {'X-Auth-Token': 'bef879d6107c495b8a2bf9d4b06e24db'}}
        );

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllNames() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    async getName(id) {
        return await this.getResource(`/people/${id}`);
    }
}

const scoreBat = new SoccerService();


scoreBat.getName(7).then((names) => {
    // names.forEach((n) => {
    //     console.log(n.name);
    // })
    console.log(names.name);

});