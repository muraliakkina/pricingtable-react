import React from 'react'


function PricingCard(props) {
    return (
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.productSubscriptionData.title}</h5>
                    <h6 className="card-price text-center">{props.productSubscriptionData.currency + props.productSubscriptionData.price}<span className="period">/{props.productSubscriptionData.period}</span></h6>
                    <hr />
                    <ul class="fa-ul">
                        {
                            (props.productSubscriptionData.services).map((ele)=>{
                                return <li className ={ele.isEnabled ? "":"text-muted"}><span className="fa-li"><i className={ele.isEnabled ? "fas fa-check":"fas fa-times"}></i></span>{ele.name}</li>
                            })
                        }
                    </ul>
                    <div className="d-grid">
                        {/* eslint-disable-next-line */}
                        <a href="#"  className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCard
