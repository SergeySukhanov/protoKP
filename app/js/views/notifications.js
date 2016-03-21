/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/14/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */


var NotificationsView = Ractive.extend({
    el:"#mainSection",
    template:"<div>notifications</div>",
    complete: function(){
        Tools.loadAndRenderCommon("pages/common-panel", CommonView, {
            data: {
                accountToken:Config.accountToken,
                pageName: "Уведомления"
            }
        });
    }
});