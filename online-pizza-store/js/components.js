App.BackButtonComponent = Ember.Component.extend({
    actions: {
        back: function() {
            history.go(-1);
        }
    }
});
