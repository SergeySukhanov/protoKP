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
        //":id": 'showAccount',
        "":"filter",
        ":filter":"filter"
    },

    before:{
        "*any":function(path, arr, next){
            Config.starter.dashboardRange = false;
            Tools.currentUrl("main");
            Tools.loadTemplate('pages/accounts', function(tmpl){
                console.log("AccountsView init");
                Config.views.accounts = new AccountsView({
                    template:tmpl
                });
                Tools.currentUrl("accounts");
                next();
            });

        }
    },

    filter: function(filter) {
        var filter = filter || "new"; // содержит либо название вкладки, либо номер счёта
        switch(filter){
            case "new":(function(){
                Tools.loadTemplate("pages/new", function(tmpl){
                    console.log($("#accountContainer"));

                    console.log("NewAccount init");
                    Config.views.newAccount = new NewAccount({
                        data: {
                            accounts: Config.data.accounts.filter( function(a) {return a.new;}),
                            totalMoney: Config.data.totalMoney
                        },
                        template:tmpl
                    });
                });
            })();
                break;

            case "aprove":(function(){
                Tools.loadTemplate("pages/aprove", function(tmpl){
                    Config.views.newAccount = new AproveAccount({
                        data: {
                            accounts: Config.data.accounts.filter( function(a) {return a.approved;})
                        },
                        template:tmpl
                    });
                });
            })();
                break;

            case "get":(function(){
                Tools.loadTemplate("pages/get", function(tmpl){
                    Config.views.newAccount = new GetAccount({
                        data: {
                            accounts: Config.data.accounts.filter( function(a) {return a.get;}),
                        },
                        template:tmpl
                    });
                });
            })();
                break;
            case "resolve":
                /*(function(){
                Tools.loadTemplate("pages/resolve", function(tmpl){
                    Config.views.newAccount = new ResolveAccount({
                        data: {
                            accounts: Config.data.accounts.filter( function(a) {return a.resolved;}),
                        },
                        template:tmpl
                    });
                });
            })();
            */
                Config.views.newAccount = Tools.loadAndRenderCommon("pages/resolve", ResolveAccount, {
                    data: {accounts: Config.data.accounts.filter( function(a) {return a.resolved;})}
                });
                break;
            default: // если не совпало не с одним названием вкладки, значит это номер счёта
                Config.views.newAccount = Tools.loadAndRenderCommon("pages/account-info", AccountInfo, {
                    data: Config.data.getAccauntByNumber(filter)
                });
                break;

        }
    },

    showAccount: function(id) {
        console.log("show account with id: " + id);
    }

});