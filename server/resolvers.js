// const { paginateResults } = require('./utils');

module.exports = {
    Query: {
        people: (_, {pageNo}, { dataSources }) =>
        dataSources.personApi.getAllPeople(pageNo),
        person: (_, {personName}, { dataSources }) =>
        dataSources.personApi.getPerson(personName),
    
    }
};