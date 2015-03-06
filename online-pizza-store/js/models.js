App.Pizza = DS.Model.extend({
    name: DS.attr('string'),
    image: DS.attr('string'),
    description: DS.attr('string')
});

App.Cart = DS.Model.extend({
    pizza: DS.attr()
});

App.History = DS.Model.extend({
    order: DS.attr()
});

App.Pizza.reopenClass({
    FIXTURES: pizzaz
});

App.Cart.FIXTURES = [];

App.History.FIXTURES = [];
