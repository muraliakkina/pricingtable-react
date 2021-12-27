import './App.css';
import PricingCard from './PricingCard';

function App() {
  let productData = [
    {
      title: "Free-Tier",
      price: "0",
      currency:"$",
      period: "month",
      services:[
        {
          name: "single User",
          isEnabled: true
        },
        {
          name:"5GB Storage",
          isEnabled: true
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true
        },
        {
          name:"Community Acess",
          isEnabled: true
        },
        {
          name:"Unlimited Private Projects",
          isEnabled: false
        },
        {
          name:"Dedicated Phone Support",
          isEnabled: false
        },
        {
          name:"Free SubDomain",
          isEnabled: false
        },
        {
          name:"Monthly Status Reports",
          isEnabled: false
        }
      ]},
    {
      title: "Plus-Tier",
      price: "9",
      currency:"$",
      period: "month",
      services:[
        {
          name: "5 Users",
          isEnabled: true
        },
        {
          name:"50GB Storage",
          isEnabled: true
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true
        },
        {
          name:"Community Acess",
          isEnabled: true
        },
        {
          name:"Unlimited Private Projects",
          isEnabled: true
        },
        {
          name:"Dedicated Phone Support",
          isEnabled: true
        },
        {
          name:"Free SubDomain",
          isEnabled: true
        },
        {
          name:"Monthly Status Reports",
          isEnabled: false
        }
      ]},
    {
      title: "Pro-Tier",
      price: "49",
      currency:"$",
      period: "month",
      services:[
        {
          name: "Unlimited Usera",
          isEnabled: true
        },
        {
          name:"150GB Storage",
          isEnabled: true
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true
        },
        {
          name:"Community Acess",
          isEnabled: true
        },
        {
          name:"Unlimited Private Projects",
          isEnabled: true
        },
        {
          name:"Dedicated Phone Support",
          isEnabled: true
        },
        {
          name:"Free SubDomain",
          isEnabled: true
        },
        {
          name:"Monthly Status Reports",
          isEnabled: true
        }
      ]
    }
  ]
  return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
            productData.map((ele)=>{
              return <PricingCard productSubscriptionData={ele} ></PricingCard>
            })
            }
          </div>
        </div>
      </section>
  );
}

export default App;
