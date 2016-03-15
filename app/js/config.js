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

    data: {
        newAccounts: {
            accounts: [{
                number: "1",
                money: "200",
                discount: "10%"
            }, {
                number: "2",
                money: "100",
                discount: "20%"
            },  {
                number: "9",
                money: "900",
                discount: "15%"
            }
            ]
        },
        approvedAccounts: {
            accounts: [{
                number: "2",
                money: "200",
                discount: "20%"
            }, {
                number: "3",
                money: "300",
                discount: "30%"
            }]
        }
    }
};