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
                        data: {
                            accounts: Config.data.newAccounts.accounts,
                            sort: function(array, column ){
                                console.log("sort");

                                array = array.slice(); // clone, so we don't modify the underlying data

                                var sortedArray = array.sort( function ( a, b ) {
                                    return a[ column ] < b[ column ] ? -1 : 1;
                                });

                                sortedArray.filter(function(account) {
                                    var accept = false;
                                    for (k in account) {
                                        var val = account[k];
                                        var found = val.indexOf("1");
                                        accept = accept || found;
                                    }
                                    return accept;
                                });

                                return sortedArray;
                            }
                        },

                        template:tmpl


                    });

                    Config.views.newAccount.on("activate", function(event) {
                        console.log("add account");
                        Config.data.newAccounts.accounts.push({});
                    });

                    Config.views.newAccount.on( 'sort', function ( event, column ) {
                        console.log( 'Sorting by ' + column );
                        this.set( 'sortColumn', column );
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