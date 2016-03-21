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
        accountWrap:false,
        dashboardRange:false,
        accounts:[
            {
                login:"Сергей",
                password:"password"
            },
            {
                login:"Денис",
                password:"password"
            },
            {
                login:"Людмила",
                password:"password"
            }
        ]
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
            accountNumber: "EK7463469",
            money: "127 647.90",
            discount: "10%",
            new: true,
            resolved: true,
            approved: true
        }, {
            supplierId: 2335,
            accountNumber: "EK7412001",
            money: "89 211.00",
            discount: "20%",
            resolved: true,
            get: true
        }, {
            supplierId: 3252,
            accountNumber: "EK7412345",
            money: "169 109.90",
            discount: "15%",
            new: true,
            resolved: true,
            get: true
        }, {
            supplierId: 1634,
            accountNumber: "EK74124590",
            money: "119 991.10",
            discount: "10%",
            approved: true
        }, {
            supplierId: 9200,
            accountNumber: "EK7414389",
            money: "127 647.90",
            discount: "25%",
            resolved: true,
            get: true,
            approved: true
        }, {
            supplierId: 488,
            accountNumber: "EK021236",
            money: "89 211.90",
            discount: "11%",
            new: true,
            approved: true
        }, {
            supplierId: 611,
            accountNumber: "EK021237",
            money: "127 349.90",
            discount: "10%",
            new: true,
            get: true
        }],

        /* Почему то не работает (забыл return ))) )
        newAccaunts: function () {
            Config.data.accounts.filter(function (a) {
                return a.new
            })
        }
        */
        getAccauntByNumber: function(accountNumber) {
            var result = Config.data.accounts.filter(function (a) {
                return a.accountNumber === accountNumber;
            });

            if (result.length > 1) {
                console.warn("Не уникальный номер счёта: " + accountNumber);
            }
            return result[0];
        }
    },

    accountsToLogin:[
        {
            login:"Sergey",
            password:"qwerty"
        }
    ]

};