import human from "./img/human.jpg"
import callGuy from "./img/callPerson.jpg"
import "./faqs.css"

const faqs = () => {
    return (
        <>
                <div className="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">FAQs</a></li>
                </div>
                <div className ="header">
                    <h1>Frequently Asked Questions</h1>
                    <form className="searchbar">
                        <input type="text" placeholder="How can we help you?" />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
                <section id="content">
                    <span>
                        <p>
                            <br />1. <b> What services do you offer? /</b>
                            <li>We offer a wide range of cleaning services,including residential cleaning,deep clening,move-in/out cleaning,and more.Please contact us to learn more about our services.</li>
                        </p>
                        <p>
                            <br /> 2. What is included in a standard cleaning service?
                            <li>Our standard cleaning service includes dusting, vacuuming, mopping, cleaning bathrooms, and kitchens, as well as making beds and tidying up.</li>
                        </p>
                        <span>
                            <b />3. Do you provide your own cleaning supplies and equipment?
                            <li>Yes, we provide our own cleaning supplies and equipment. However, if you prefer us to use specific products, please let us know in advance</li>
                        </span>
                        <p>
                            <b />4. Are your cleaners background checked and insured?
                            <li>Yes, all of our cleaners are background checked and insured for your peace of mind.</li>
                        </p>
                        <p>
                            <b />5. How do you price your services?
                            <li>Our pricing is based on the size of the space, the frequency of cleaning, and the scope of work. We offer competitive and transparent pricing with no hidden fees.</li>
                        </p>
                        <p>
                            <b />6. Do you offer a satisfaction guarantee?
                        <li> Yes, we offer a satisfaction guarantee. If you are not satisfied with our service, we will make it right.</li>
                        </p>
                        <p>
                            <b />7. Can I schedule a cleaning for a specific day and time?
                            <li>Yes, you can schedule a cleaning for a specific day and time that works best for you.</li>
                        </p>
                        <p>
                            <b> /</b>8. Can I request specific cleaners for my cleaning appointments?
                            <li>Yes, you can request specific cleaners for your cleaning appointments, subject to availability.</li>
                        </p>
                        <p>
                            <b />9. What is your cancellation policy?
                            <li>We require at least 24 hours notice for cancellation.If you cancel less than 24 hours in advance, a cancellation fee may apply.</li>
                        </p>
                        <p>
                            <b />10. How do I make payment for your services?
                            <li>We accept payment by credit card or check.Payment is due at the time of service.</li>
                        </p>
                        <p>
                            <b /> 11. Can you clean carpets and upholstery? If so, do you charge extra for that service?
                            <li>Yes, we offer carpet and upholstery cleaning services. We charge an additional fee for these services, which varies based on the size of the space and the scope of work. Please contact us to learn more.</li>
                        </p>
                        <p>
                            <b />12. Can you clean during office hours or after hours?
                            <li>Yes,we can clean during office hours or after hours,depending on your preference.</li>
                        </p>
                        <p>
                            <b />13. What happens if something is damaged or broken during the cleaning process?
                            <li>
                                We take full responsibility for any damage or breakage that may occur during the cleaning process. We are fully insured and will work with you to resolve the issue promptly.
                            </li>
                        </p>
                    </span>
                </section>
                <div className="contactus">
                    <div className="icon">
                        <img src={callGuy} alt="icon" />
                    </div>
                    <div className="text">
                        <h1>
                            Contact us for more!
                        </h1>
                        <h3>
                            Call us right now at <br />
                            <a href="tel:+918352729345">8352729345</a>
                        </h3>

                    </div>

                </div>
            </>
    )
}

export default faqs