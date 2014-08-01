import DS from "ember-data";

var Quote = DS.Model.extend({
    message: DS.attr('string'),
    author: DS.attr('string')
});

Quote.reopenClass({
    FIXTURES: [
        {
            id: 1,
            message: 'Life isn’t about getting and having, it’s about giving and being',
            author: 'Kevin Kruse'
        }, {
            id: 2,
            message: 'Whatever the mind of man can conceive and believe, it can achieve',
            author: 'Napoleon Hill'
        }, {
            id: 3,
            message: 'Strive not to be a success, but rather to be of value.',
            author: 'Albert Einstein'
        }, {
            id: 4,
            message: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. ',
            author: 'Robert Frost'
        }, {
            id: 5,
            message: 'Fixtures are dumb',
            author: 'DJ Parker'
        }
    ]
});

export default Quote;