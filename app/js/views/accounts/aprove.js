/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/14/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var AproveAccount = Ractive.extend({
    el:"#accountContainer",

    complete:function(){
        Tools.loadAndRenderGrid($(this.el).find(".js-grid"), this.get().accounts);


        this.on("finalAccount", function() {
            var accounts = this.get("accounts");
            var selected = accounts.filter(function(a){return a.selected});
            console.log("finalAccount " + selected);
            selected.forEach(function(a){
                a.status = "resolved";
                a.selected = false;
                var pos = accounts.indexOf(a);
                accounts.splice(pos, 1);
            });
        });
    }
});