/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/14/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var Config = {
    starter:{
        accountWrap:false
    },

    views:{},
    models:{},
    controllers:{},
    routers:{},
    textTemplates:{},
    accountToken:false,

    data: {

        accounts: [{
            supplierId: 235,
            number: "EK7463469",
            money: "127 647.90",
            discount: "10%",
            new: true,
            resolved: true,
            approved: true
        }, {
            supplierId: 2335,
            number: "EK7412001",
            money: "89 211.00",
            discount: "20%",
            resolved: true,
            get: true
        }, {
            supplierId: 3252,
            number: "EK7412345",
            money: "169 109.90",
            discount: "15%",
            new: true,
            resolved: true,
            get: true
        }, {
            supplierId: 1634,
            number: "EK74124590",
            money: "119 991.10",
            discount: "10%",
            approved: true
        }, {
            supplierId: 9200,
            number: "EK7414389",
            money: "127 647.90",
            discount: "25%",
            resolved: true,
            get: true,
            approved: true
        }, {
            supplierId: 488,
            number: "EK021236",
            money: "89 211.90",
            discount: "11%",
            new: true,
            approved: true
        }, {
            supplierId: 611,
            number: "EK021236",
            money: "127 349.90",
            discount: "10%",
            new: true,
            get: true
        }],

        newAccaunts: function () {
            Config.data.accounts.filter(function (a) {
                return a.new
            })

        }
    }

};