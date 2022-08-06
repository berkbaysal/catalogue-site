import React from 'react'
import "../css/FAQ.scss"
function FAQ() {
    const [status, setStatus] = React.useState([false, false, false, false])
    function toggleIndex(index) {
        setStatus((oldStatus) => {
            let newStatus = [...oldStatus];
            newStatus[index] = !newStatus[index];
            return newStatus;
        })
    }
    return (
        <div className="bonsai-style">
            <div className="bonsai-style-faq">
                <div className="container">
                    <div className="title">Frequently Asked Questions</div>
                    <div className='question' onClick={() => { toggleIndex(0) }}>How does the free trial work?</div>
                    {status[0] && <div className="answer">When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.</div>}
                    <div className='question' onClick={() => { toggleIndex(1) }}>Can I change plans anytime?</div>
                    {status[1] && <div className="answer">Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".</div>}
                    <div className='question' onClick={() => { toggleIndex(2) }}>How do I pause my subscription?</div>
                    {status[2] && <div className="answer">We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.</div>}
                    <div className='question' onClick={() => { toggleIndex(3) }}>What is your refund policy?</div>
                    {status[3] && <div className="answer">If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.</div>}
                </div>
            </div>
        </div>
    )
}

export default FAQ