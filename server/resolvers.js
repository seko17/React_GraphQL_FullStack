// const { paginateResults } = require('./utils');

module.exports = {
    Query: {
        people: (_, __, { dataSources }) =>
        dataSources.personApi.getAllPeople(),
         person: (_, { name }, { dataSources }) =>
        dataSources.personAPI.getPersonByName({ name: name }),
    //     launch: (_, { id }, { dataSources }) =>
    //   dataSources.personAPI.getLaunchById({ launchId: id }),
    }
};