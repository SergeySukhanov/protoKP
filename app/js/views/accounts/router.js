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
        if(Config.views.accounts) {
            if (!Config.starter.accountWrap) {
                Config.views.accounts.render();
            }
            this.routeChild(filter);
        } else {
            var that = this;
            Tools.loadTemplate('pages/accounts', function(tmpl){
                console.log("AccountsView init");
                Config.views.accounts = new AccountsView({
                    template:tmpl
                });
                Config.starter.accountWrap = true;
                that.routeChild(filter);
            });
        }

    },

    routeChild: function(filter) {
        var filter = filter || "new";
        switch(filter){
            case "new":(function(){
                Tools.loadTemplate("pages/new", function(tmpl){
                    console.log($("#accountContainer"));

                    console.log("NewAccount init");
                    Config.views.newAccount = new NewAccount({
                        data: {
                            accounts: Config.data.newAccounts.accounts
                        },

                        template:tmpl
                    });
                });
            })();
                break;

            case "aprove":(function(){
                Tools.loadTemplate("pages/aprove", function(tmpl){
                    Config.views.newAccount = new AproveAccount({
                        data: Config.data.approvedAccounts,
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
    }

});