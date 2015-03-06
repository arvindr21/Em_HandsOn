App.PizzaController = Ember.ObjectController.extend({
    actions: {
        addToCart: function() {
            var self = this;
            self.store.find('Cart').then(function(cartItems) {
                cartItems = cartItems || [];
                var pizza = self.get('model');
                var cartItem = {};

                cartItem.id = cartItems.get('length');
                cartItem.pizza = {
                    id: pizza.get('id'),
                    name: pizza.get('name'),
                    image: pizza.get('image'),
                    description: pizza.get('description')
                };

                self.store.createRecord('Cart', cartItem);
                self.transitionToRoute('cart');

            });
        }
    }
});

App.CartController = Ember.ObjectController.extend({
    actions: {
        checkout: function() {
            // we get the list of all the pizzaz in 
            // the current cart and add it as a record 
            // to OrderHistory
            var self = this;

            self.store.find('Cart').then(function(cartItems) {
                var order = [];
                cartItems.forEach(function(cartItem) {
                    var pizza = cartItem.get('pizza');
                    order.push({
                        id: cartItem.get('id'),
                        pizza: {
                            id: pizza.id,
                            name: pizza.name,
                            image: pizza.image,
                            description: pizza.description
                        }
                    });
                });

                self.store.find('History').then(function(historyItems) {
                    historyItems = historyItems || [];
                    var historyItem = {};
                    historyItem.id = historyItems.get('length');
                    historyItem.order = order;

                    // Add items to order history
                    self.store.createRecord('History', historyItem);
                    self.transitionToRoute('history');

                    // Remove all Items from current cart
                    self.store.unloadAll('Cart');

                });
            });

        }
    }
});
