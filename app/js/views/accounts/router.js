/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/14/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var AccountsRouter = Backbone.SubRoute.extend({
    routes:{
        "":"filter",
        "*filter":"filter"
    },

    filter:function(filter){
        if(Config.views.accounts && !Config.starter.accountWrap){
            Config.views.accounts.render();
            Config.starter.accountWrap = true;
        }

        var filter = filter || "new";

        switch(filter){
            case "new":(function(){
                Tools.loadTemplate("pages/new", function(tmpl){
                   Config.views.newAccount = new NewAccount({
                       template:tmpl
                   });
                });
            })();
                break;

            case "aprove":(function(){
                Tools.loadTemplate("pages/aprove", function(tmpl){
                    Config.views.newAccount = new AproveAccount({
                        template:tmpl
                    });
                });
            })();
                break;

            case "get":(function(){
                Tools.loadTemplate("pages/get", function(tmpl){
                    Config.views.newAccount = new GetAccount({
                        template:tmpl
                    });
                });
            })();
                break;
            case "resolve":(function(){
                Tools.loadTemplate("pages/resolve", function(tmpl){
                    Config.views.newAccount = new ResolveAccount({
                        template:tmpl
                    });
                });
            })();
                break;
        }
    },

    initialize:function(){
        var that = this;
        Tools.loadTemplate('pages/accounts', function(tmpl){
            Config.views.accounts = new AccountsView({
                template:tmpl
            });
            Config.starter.accountWrap = true;
        });
    }


});