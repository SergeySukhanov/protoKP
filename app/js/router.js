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
        "":"auth",
        "auth":"auth",
        "auth/:action":"auth",
        "dashboard":"dashboard",
        "accounts":"accounts",
        "accounts/:any":"accounts",
        "notifications":"notifications",
        "responses":"responses"
    },

    before:{
        "*any":function(path, arr, next){
            var rootPath = path.split('/')[0];
            console.log(arguments);
            var token = localStorage.getItem("token");
            var login = localStorage.getItem("loginName");
            Config.loginName = login || "User";

            if(token){
                Config.accountToken = true;
                if(rootPath === "auth"){
                    Config.routers.mainRouter.navigate("dashboard", {trigger:true});
                }else{
                    Tools.currentUrl("main");
                    next();
                }
            }else{
                Config.accountToken = false;
                if(rootPath !== "auth"){
                    Config.routers.mainRouter.navigate("auth", {trigger:true});
                }else{
                    Tools.currentUrl("login");
                    next();
                }
            }
        }
    },

    auth:function(action){
        var view = "auth";
        if(action){
            view = action;
        }
        Tools.loadTemplate('pages/' + view, function(tmpl){
            if(view === "auth"){
                Config.views.auth = new AuthView({
                    template:tmpl
                });
            }else{
                Config.views.register = new RegisterView({
                    template:tmpl
                });
            }
            Tools.currentUrl("login");

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
                template:tmpl,
                data:Config
            });
            Tools.currentUrl("main");
        });
        Tools.loadTemplate('layout/footer', function(tmpl){
            Config.views.footer = new FooterView({
                template:tmpl,
                data:Config
            });
        });
    }
});