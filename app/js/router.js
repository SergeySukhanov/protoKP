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
        "accounts/:any":"accounts",
        "notifications":"notifications",
        "responses":"responses"
    },

    before:function(){
        console.log("bla");
    },

    accounts:function(){
        Config.routers.accountsRouter = new AccountsRouter("accounts");
    },

    notifications:function(){
        Tools.loadTemplate('pages/notifications', function(tmpl){
            Config.views.notifications = new NotificationsView({
                template:tmpl
            });
            Config.starter.accountWrap = false;
        });
    },

    responses:function(){
        Tools.loadTemplate('pages/responses', function(tmpl){
            Config.views.responses = new ResponsesView({
                template:tmpl
            });
            Config.starter.accountWrap = false;
        });
    },

    initialize:function(){
        Tools.loadTemplate('layout/header', function(tmpl){
            Config.views.header = new HeaderView({
                template:tmpl
            });
        });
        Tools.loadTemplate('layout/footer', function(tmpl){
            Config.views.footer = new FooterView({
                template:tmpl
            });
        });
    }
});