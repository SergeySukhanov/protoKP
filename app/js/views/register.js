/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/16/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var RegisterView = Ractive.extend({
    el:"#mainSection",
    template:"<div>header</div>",
    complete:function(){
        var ins = this;

        ins.on({
            register:function(event){

            }
        });
    }
});