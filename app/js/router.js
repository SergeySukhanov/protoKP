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
        "":"dashboard",
        "auth":"auth",
        "dashboard":"dashboard",
        "accounts":"accounts",
        "accounts/:any":"accounts",
        "notifications":"notifications",
        "responses":"responses"
    },

    before:{
        "*any":function(path, arr, next){
            console.log(arguments);
            if(path === "auth"){

            }else{

            }
            next();
        }
    },

    auth:function(){
        Tools.loadTemplate('pages/auth', function(tmpl){
            Config.views.notifications = new AuthView({
                template:tmpl
            });
            Config.starter.accountWrap = false;
        });
    },

    dashboard:function(){
        Tools.loadTemplate('pages/dashboard', function(tmpl){
            Config.views.notifications = new DashboardView({
                template:tmpl
            });
            Config.starter.accountWrap = false;
        });
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