/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/15/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var DashboardView = Ractive.extend({
    el:"#mainSection",

    complete:function(){
        Tools.loadAndRenderGrid(
            $(this.el).find(".accounts-wrapper"),
            Config.data.accounts.filter( function(a) {return a.new;})
            //Config.data.newAccaunts()
        );
    }
});