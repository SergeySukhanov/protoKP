/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/15/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var AuthView = Ractive.extend({
    el:"#mainSection",
    template:"<div>header</div>",
    complete:function(){
        var ins = this;

        ins.on({
            login:function(event){
                var login = $("#loginInput").val();
                var password = $("#passwordInput").val();
                Tools.login(login, password);
//                Config.routers.mainRouter.navigate("dashboard", {trigger:true});
            }
        });
    }
});