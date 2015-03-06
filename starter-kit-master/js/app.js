App = Ember.Application.create();

App.Router.map(function() {
    // put your routes here
    this.route('about');
    this.route('testimonials');
});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return ['red', 'yellow', 'blue', 'orange', 'purple'];
    }
});

App.IndexController = Ember.ArrayController.extend({
    sortedModel: function() {
        return this.get('model').sort();
    }.property('@each')
});

App.TestimonialsController = Ember.ObjectController.extend({
    userName: '',
    message: '',
    testimonials: [],
    actions: {
        saveTestimonial: function() {
            var userName = this.get('userName');
            var message = this.get('message');
            if (!userName || !message) {
                return;
            }
            this.get('testimonials').pushObject({
                userName: userName,
                message: message
            });
        }
    }
});
