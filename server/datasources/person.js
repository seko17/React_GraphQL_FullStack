const { RESTDataSource } = require('apollo-datasource-rest');

class PersonAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/';
    }

    async getAllPeople() {
        const query = "api/people"
        const response = await this.get(query);
        // return response.results ;
        return Array.isArray(response.results)
            ? response.results.map(person => this.personReducer(person))
            : [];
    }
    // async getPersonByName() {
    //     const query = `api/people/?${person}`
    //     const response = await this.get(query);
    //     // return response.results ;
    //     return Array.isArray(response.results)
    //         ? response.results.map(person => this.personReducer(person))
    //         : [];
    // }
    //   async getPersonByName({ launchId }) {
    //     const query = `api/people/?${launchId}`
    //     const response = await this.get(query);
    // // const res = await this.get('launches', { flight_number: launchId });
    // return this.personReducer(response[0]);
//   }
    personReducer(person) {

        return {
            name: person.name,
            height : person.height,
            mass : person.mass,
            gender : person.gender,
            homeworld: person.homeworld,
        };
    }


}

module.exports = PersonAPI;