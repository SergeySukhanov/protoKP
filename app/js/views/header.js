/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/14/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var HeaderView = Ractive.extend({
    el:"#header",
    template:"<div>header</div>",
    magic:true,
    complete:function(){
        var ins = this;
        ins.on({
            logout:function(event){
                Tools.logout();
                Config.routers.mainRouter.navigate("auth", {trigger:true});
                console.log(CommonView);
                Config.views.common.teardown()
            }
        })
    }

});