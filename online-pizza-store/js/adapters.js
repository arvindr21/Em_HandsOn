App.ApplicationAdapter = DS.FixtureAdapter.extend({
    queryFixtures: function(fixtures, query) {
        var properties = Object.keys(query);
        if (properties.contains('start')) {
            fixtures = fixtures.slice(query.start, query.end);
        }
        return fixtures;
    }
});
