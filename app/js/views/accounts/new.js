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
    }
});