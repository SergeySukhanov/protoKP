/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/14/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var Router = Backbone.Router.extend({
    routes:{
        "":"accounts",
        "accounts":"accounts",
        "notifications":"notifications",
        "responses":"responses"
    },

    accounts:function(){
        Config.views.accounts = new AccountsView();
    },

    notifications:function(){
        Config.views.notifications = new NotificationsView();
    },

    responses:function(){
        Config.views.responses = new ResponsesView();
    },

    initialize:function(){
        Config.views.header = new HeaderView();
        Config.views.footer = new FooterView();
        console.log("router is start!");
    }
});