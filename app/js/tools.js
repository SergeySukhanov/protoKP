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
            return Config.textTemplates[name]
        }
        $.ajax({
            url:"app/templates/" + name + ".html",
            type:"GET",
            dataType:'html'
        }).then(function(tmpl){
            Config.textTemplates[name] = tmpl;
            callback(tmpl);

        })
    }
};