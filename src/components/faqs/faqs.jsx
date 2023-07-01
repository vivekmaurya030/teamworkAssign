import human from "./img/human.png"
import callGuy from "./img/callPerson.png"
import "./faqs.css"
import { Link } from "react-router-dom"

const faqs = () => {
    const faqData =[
        {id:1,ques:"What services do you offer?",ans:"We offer a wide range of cleaning services,including residential cleaning,deep clening,move-in/out cleaning,and more.Please contact us to learn more about our services."},
        {id:2,ques:"Do you provide your own cleaning supplies and equipment?",ans:"Yes, we provide our own cleaning supplies and equipment. However, if you prefer us to use specific products, please let us know in advance"},
        {id:3,ques:"What is included in a standard cleaning service?",ans:"Our standard cleaning service includes dusting, vacuuming, mopping, cleaning bathrooms, and kitchens, as well as making beds and tidying up."},
        {id:4,ques:"Are your cleaners background checked and insured?",ans:"Yes, all of our cleaners are background checked and insured for your peace of mind."},
        {id:5,ques:"How do you price your services?",ans:"Our pricing is based on the size of the space, the frequency of cleaning, and the scope of work. We offer competitive and transparent pricing with no hidden fees."},
        {id:6,ques:"Do you offer a satisfaction guarantee?",ans:"Yes, we offer a satisfaction guarantee. If you are not satisfied with our service, we will make it right."},
        {id:7,ques:"Can I schedule a cleaning for a specific day and time?",ans:"Yes, you can schedule a cleaning for a specific day and time that works best for you."},
        {id:8,ques:"Can I request specific cleaners for my cleaning appointments?",ans:"Yes, you can request specific cleaners for your cleaning appointments, subject to availability."},
        {id:9,ques:"What is your cancellation policy?",ans:"We require at least 24 hours notice for cancellation.If you cancel less than 24 hours in advance, a cancellation fee may apply."},
        {id:10,ques:"How do I make payment for your services?",ans:"We accept payment by credit card or check.Payment is due at the time of service."},
        {id:11,ques:"Can you clean carpets and upholstery? If so, do you charge extra for that service?",ans:"Yes, we offer carpet and upholstery cleaning services. We charge an additional fee for these services, which varies based on the size of the space and the scope of work. Please contact us to learn more."},
        {id:12,ques:"Can you clean during office hours or after hours?",ans:"Yes,we can clean during office hours or after hours,depending on your preference."},
        {id:13,ques:"What happens if something is damaged or broken during the cleaning process?",ans:"We take full responsibility for any damage or breakage that may occur during the cleaning process. We are fully insured and will work with you to resolve the issue promptly."},

]
    return (
        <>
                <div className="navbar">
                    <Link to="/" style={{color:"white"}}><li>Home</li></Link>
                    <li>FAQs</li>
                </div>
                <div className ="faqheader" style={{background:`url(${human})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100% "}}>
                    <h1>Frequently Asked Questions</h1>
                    <div className="searchbar">
                        <input type="text" placeholder="How can we help you?" />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                <section id="content">
                    <span>
                        {faqData.map((item)=>(
                            <p>{item.id}.&nbsp;&nbsp;<b>{item.ques}</b>
                            <li>{item.ans}</li>
                            </p>
                        ))}
                    </span>
                </section>
                <div className="contactus">
                    <div className="callguy">
                        <img src={callGuy} alt="icon" />
                    </div>
                    <div className="text">
                        <h1>
                            Contact us for more!
                        </h1>
                        <h3>
                            Call us right now at <br />
                            8352729345
                        </h3>

                    </div>

                </div>
            </>
    )
}

export default faqs