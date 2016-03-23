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
        Tools.loadAndRenderGrid($(this.el).find(".js-grid"), this.get().accounts, "new");


        var calculation = Tools.loadAndRenderCommon("pages/calculation", Calculation, {
            el: $(this.el).find(".calculation"),
            data: {
                totalMoney: this.get("totalMoney")
            }
        });
/*
        grid.on("selectAccount", function() {
            console.log("selectAccount");
            console.log(arguments);
        });
*/
        this.on("removeAccount", function(){
            var accounts = this.get("accounts");
            var selected = accounts.filter(function(a){return a.selected});
            console.log(selected);
            selected.forEach(function(a){
                a.status = "removed"
                var pos = accounts.indexOf(a);
                accounts.splice(pos, 1);
            });
            /*
            var newAccounts = Config.data.newAccounts();
            this.set("accounts", newAccounts);
            this.update("accounts");
            accounts.splice(0, 1);
            */
            //console.log(selected);
        });
    }
});