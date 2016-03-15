/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/14/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */


var Tools = {
    loadTemplate:function(name, callback){

        if(Config.textTemplates[name]){
            callback(Config.textTemplates[name]);
        }else{
            $.ajax({
                url:"app/templates/" + name + ".html",
                type:"GET",
                dataType:'html'
            }).then(function(tmpl){
                Config.textTemplates[name] = tmpl;
                callback(tmpl);

            })
        }
    },

    login:function(login){
        localStorage.setItem("loginName", login);
        localStorage.setItem("token", "123456789");
    },

    logout:function(){
        localStorage.removeItem("token");
    },

    /*
        Полезные функции
     */
    sort: function (array, column) {
        console.log("sort");

        array = array.slice(); // clone, so we don't modify the underlying data

        var sortedArray = array.sort(function (a, b) {
            return a[column] < b[column] ? -1 : 1;
        });

        sortedArray.filter(function (account) {
            var accept = false;
            for (k in account) {
                var val = account[k];
                var found = val.indexOf("1");
                accept = accept || found;
            }
            return accept;
        });

        return sortedArray;
    },

    loadAndRenderGrid: function(el, accounts, type) {
        var that = this;
        Tools.loadTemplate('pages/consumer-grid', function(tmpl){
            console.log("Consumer grid init");
            Config.views.consumerGrid = new ConsumerGrid({
                template:tmpl,
                el: el,
                data: {
                    accounts: accounts,
                    sort: Tools.sort,
                    type:type
                }
            });

        });
    }
};