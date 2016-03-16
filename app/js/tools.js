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

        /*
        sortedArray.filter(function (account) {
            var accept = false;
            for (k in account) {
                var val = account[k];
                var found = val.indexOf("1");
                accept = accept || found;
            }
            return accept;
        });
        */

        return sortedArray;
    },

    /**
     * Загрузить шаблон и отрисовать грид который отображает счета потребителя
     * @param el - элемент в который надо вывести grid
     * @param accounts - массив счетов
     */
    loadAndRenderGrid: function(el, accounts) {
        Config.views.consumerGrid = Tools.loadAndRenderCommon('pages/consumer-grid', ConsumerGrid, {
            el: el,
            data: {
                accounts: accounts,
                sort: Tools.sort
            }
        })
    },

    /**
     * Загрузить шаблон и после загрузки создать React с шаблоном и данными
     * @param url - url по которому грузит шаблон
     * @param View - какоq React компонент нужно создать
     * @param initData - данные с которыми создаётся React компонент (к ним прибавляется загруженный template)
     */
    loadAndRenderCommon: function(url, View, initData) {
        Tools.loadTemplate(url, function(tmpl){
            initData.template = tmpl;
            return new View(initData);
        });
    },

    currentUrl:function(type){
        var hash = location.hash;
        if(type === "main"){
           var root = hash.split('/')[0];
           var el = $(".main-menu");
            if(el){
               var list = el.children();
                for(var i=0; i<list.length; i++){
                    if($(list[i]).attr("href") === root){
                        $(list[i]).addClass("active");
                    }else{
                        $(list[i]).removeClass("active");
                    }
                }
            }
        }else if(type === "accounts"){
            var path = hash.split('/')[1];
            var list = $(".inner-tabs li a");

            if(list){
                if(!path){
                    hash = hash + "/new";
                }
                for(var i=0; i<list.length; i++){
                    if($(list[i]).attr("href") === hash){
                        $(list[i]).addClass("active");
                    }else{
                        $(list[i]).removeClass("active");
                    }
                }
            }
        } else if(type === "login"){
            var list = $(".menu-auth li a");

            if(list){
                for(var i=0; i<list.length; i++){
                    if($(list[i]).attr("href") === hash){
                        $(list[i]).addClass("active");
                    }else{
                        $(list[i]).removeClass("active");
                    }
                }
            }
        }
    }
};