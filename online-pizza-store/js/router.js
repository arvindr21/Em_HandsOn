App.Router.map(function() {
    // put your routes here
    this.route('pizzaz');

    this.route('pizza', {
        path: '/pizza/:pizza_id'
    });

    this.route('cart');

    this.route('history', function() {
        this.route('details', {
            path: '/details/:details_id'
        });
    });
});
