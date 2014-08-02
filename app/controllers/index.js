import Ember from 'ember';


export default Ember.Controller.extend({

    actions: {
        submit: function(){
            console.log("Button pressed");

            var quoteText = this.get('quoteText');
            var authorText = this.get('authorText');

            if (!quoteText) { return false; }
            if (!quoteText.trim()) { return; }


            if (!authorText) { return false; }
            if (!authorText.trim()) { return; }

            this.setProperties({
                authorText: '',
                quoteText: ''
            });

            var newQuote = this.store.createRecord('quote', {
                message: quoteText,
                author: authorText
            });

            newQuote.save();
        }
    }

});