/**
 * Created by DMitin on 15.03.2016.
 */

var ConsumerGrid = Ractive.extend({
    onsort: function () {
        console.log("onsort");
    },

    complete: function() {
        var that = this;
        this.on( 'sort', function ( event, column ) {
            console.log( 'Sorting by ' + column );
            that.set( 'sortColumn', column );
        });
/*
        this.observe( 'accounts.*.selected', function ( newValue, oldValue, keypath ) {
            console.log("select trigger");
        });
*/
        /*
        this.on("selectAccount", function() {
            console.log("selectAccount");
            console.log(arguments);
        });
        */


    }

    //onSelectAccount:
});