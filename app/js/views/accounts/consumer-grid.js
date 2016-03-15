/**
 * Created by DMitin on 15.03.2016.
 */

var ConsumerGrid = Ractive.extend({
    onsort: function () {
        console.log("onsort");
    },

    complete: function() {
        var that = this;
        Config.views.consumerGrid.on( 'sort', function ( event, column ) {
            console.log( 'Sorting by ' + column );
            that.set( 'sortColumn', column );
        });
    }
});