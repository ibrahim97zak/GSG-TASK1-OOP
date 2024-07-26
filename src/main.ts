import { Apartment } from "./Building/Apartment";
import { House } from "./Building/House";
import { Shope } from "./Building/Shope";
import { Customer } from "./Customer";
import { MasterCard } from "./PaymentMethod/MasterCard";
import { VisaCard } from "./PaymentMethod/VisaCard";
import { PayPal } from "./PaymentMethod/PayPal";
import { Owner } from "./Owner";
const main =()=>{
    // Create owners
    const owner = new Owner("ibrahim zakarneh", "ibrahim_zakarneh@example.com");
    //create builldings 
    const apart1 = new Apartment("jenin","ErsalApartment",160,owner,2)
    const shopHouse = new Shope("jenin-palStr","allessandraStore",80,owner,"clothing")
    const house1 = new House("jabryatHouse","jenin",200,owner,6)

    //create paymentMethods
    const paypal = new PayPal("osama zakarneh@example.com");
    const visa = new VisaCard(4111111111111111);
    const mastercard = new MasterCard("5500 0000 0000 0004");

    //create customers
    const customer1 = new Customer("osama zakarneh","osama zakarneh@example.com",[visa,mastercard])
    //customer rent buildings 
    customer1.rentBuilding(apart1,12,1500,paypal)
    customer1.rentBuilding(shopHouse,12,2000,visa)
    customer1.displayInfo()

    //// Display updated ownership and contracts
    apart1.getOwner()
    shopHouse.getOwner()
    apart1.displayInfo()
    customer1.displayContracts();

}
//to run the app write npm run dev in the terminal
main();