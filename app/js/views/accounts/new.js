/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/14/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var NewAccount = Ractive.extend({
    el:"#accountContainer",

    complete:function(){
        var that = this;
        Tools.loadTemplate('pages/consumer-grid', function(tmpl){
            console.log("Consumer grid init");
            Config.views.consumerGrid = new ConsumerGrid({
                template:tmpl,
                el: that.el,
                data: {
                    accounts: that.get().accounts,
                    sort: Tools.sort
                }
            });

            Config.views.consumerGrid.on("activate", function(event) {
                console.log("add account");
                Config.data.newAccounts.accounts.push({});
            });

            Config.views.consumerGrid.on( 'sort', function ( event, column ) {
                console.log( 'Sorting by ' + column );
                this.set( 'sortColumn', column );
            });
        });
    }
});