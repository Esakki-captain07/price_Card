import React from 'react';
let App = () => {
  let cardData = [
    {
      card_tittle: "Free",
      card_price: "$0",
      user: "Single User",
      storage: "5GB Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      private_project: "Unlimited Private Projects",
      phone_support: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      statusReport: "Monthly Status Reports"
    },
    {
      card_tittle: "Plus",
      card_price: "$9",
      user: "5 Users",
      storage: "50GB Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      private_project: "Unlimited Private Projects",
      phone_support: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      statusReport: "Monthly Status Reports"
    },
    {
      card_tittle: "Pro",
      card_price: "$49",
      user: "Unlimited Users",
      storage: "150GB Storage",
      projects: "Unlimited Public Projects",
      access: "Community Access",
      private_project: "Unlimited Private Projects",
      phone_support: "Dedicated Phone Support",
      subDomain: "Free Subdomain",
      statusReport: "Monthly Status Reports"
    }
  ];

  return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {cardData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
    </>;
};


function Card(props) {
  let { card_tittle, card_price, user, storage, projects, access, private_project, phone_support, subDomain, statusReport } = props.data;
  let isFree = card_tittle === "Free";
  let isPlus = card_tittle === "Plus";

  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{card_tittle}</h5>
          <h6 className="card-price text-center">{card_price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{user}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{projects}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{storage}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{access}</li>
            <li className={isFree ? "text-muted" : ""}><span className="fa-li"><i className={`fas ${isFree ? 'fa-times' : 'fa-check'}`}></i></span>{private_project}</li>
            <li className={isFree ? "text-muted" : ""}><span className="fa-li"><i className={`fas ${isFree ? 'fa-times' : 'fa-check'}`}></i></span>{phone_support}</li>
            <li className={isFree ? "text-muted" : ""}><span className="fa-li"><i className={`fas ${isFree ? 'fa-times' : 'fa-check'}`}></i></span>{subDomain}</li>
            <li className={isFree || isPlus ? "text-muted" : ""}><span className="fa-li"><i className={`fas ${isFree || isPlus ? 'fa-times' : 'fa-check'}`}></i></span>{statusReport}</li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
