'use strict';

angular.module('Models', ['wrapParse'])
    .factory('Product', function(wrapParse, Company) {
        var Product = wrapParse('Product', {
            price: Number,
            weight: Number,
            name: String,
            in_stock: Boolean,
            company: Company,
            date: Date,
            available: {type: Boolean, default: true}
        });

        Product.prototype.beforeSave = function() {
            // some awesome logic
            if (this.in_stock === false) console.log("Stock is false");
        };

        return Product;
    })


    .factory('Company', function(wrapParse) {
        var Company = wrapParse('Product', {
            name: String
        });

        Company.byName = function() {
            Company.query().ascending('name').find().then.apply(this, arguments);
        };

        return Company;
    });
;