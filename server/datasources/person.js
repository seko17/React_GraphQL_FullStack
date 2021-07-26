const { RESTDataSource } = require('apollo-datasource-rest');

class PersonAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/';
    }

    async getAllPeople(pageNo) {
        console.log(pageNo)
        if(!pageNo){
            console.log('its null')
        const query = "api/people/"
        const response = await this.get(query);
        return Array.isArray(response.results)
            ? response.results.map(person => this.personReducer(person))
            : [];
        }else{
            console.log('its not null')
        const query = `api/people/?page=${pageNo}`
        const response = await this.get(query);
        return Array.isArray(response.results)
            ? response.results.map(person => this.personReducer(person))
            : [];
        }

    }
    
    async getPerson(personName) {
        console.log(personName)
        const query = `api/people/?search=${personName}`
        const response = await this.get(query);
        // return response.results ;
        console.log(response);
        return Array.isArray(response.results)
        ? response.results.map(person => this.personReducer(person))
        : [];
  }

  
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