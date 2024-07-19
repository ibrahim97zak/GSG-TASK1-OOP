"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Apartment_1 = require("./Building/Apartment");
const House_1 = require("./Building/House");
const Shope_1 = require("./Building/Shope");
const Customer_1 = require("./Customer");
const MasterCard_1 = require("./PaymentMethod/MasterCard");
const VisaCard_1 = require("./PaymentMethod/VisaCard");
const PayPal_1 = require("./PaymentMethod/PayPal");
const main = () => {
    //create builldings 
    const apart1 = new Apartment_1.Apartment("jenin", "ErsalApartment", 160, "ibrahim zakarned", 2);
    const shopHouse = new Shope_1.Shope("jenin-palStr", "allessandraStore", 80, "aziz hamdan", "clothing");
    const house1 = new House_1.House("jabryatHouse", "jenin", 200, "saleem omari", 6);
    //create paymentMethods
    const paypal = new PayPal_1.PayPal("osama.zak@example.com");
    const visa = new VisaCard_1.VisaCard(4111111111111111);
    const mastercard = new MasterCard_1.MasterCard("5500 0000 0000 0004");
    //create customers
    const customer1 = new Customer_1.Customer("osama zakarned", +970599887765, [visa, mastercard]);
    //customer rent buildings 
    customer1.rentBuilding(apart1, 12, 1500, paypal);
    customer1.rentBuilding(shopHouse, 12, 2000, visa);
    customer1.getInfo();
    //// Display updated ownership and contracts
    // apart1.getOwner()
    // shopHouse.getOwner()
    customer1.displayContracts();
};
//to run the app write npm run dev in the terminal
main();
