import React, { useState, useEffect } from 'react';
import styles from '../styles/contact.module.css';

const ContactPage = () => {
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.title = 'Priti Bhunia | Contact';
        }
    }, []);

    const FORM_STATE = { INIT: 1, SUBMITTED: 2, SUCCESS: 3, FAILED: 4 };
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formStatus, setFormStatus] = useState(FORM_STATE.INIT);

    const updateData = (event: { target: { name: any; value: any; }; }) => {
        const field = event.target.name;
        const val = event.target.value;
        setFormData(prevState => ({ ...prevState, [field]: val }));
    }

    const validateForm = () => {
        return formData.name && formData.email && formData.message;
    }

    const formSubmitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setFormStatus(FORM_STATE.SUBMITTED);
        if (validateForm()) {
            postMessage();
        } else {
            setFormStatus(FORM_STATE.FAILED);
        }
    }

    const postMessage = () => {
        fetch('https://formspree.io/f/{your_form_id}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            if (res.ok) {
                setFormStatus(FORM_STATE.SUCCESS);
                setFormData({ name: '', email: '', message: '' });
            } else {
                setFormStatus(FORM_STATE.FAILED);
            }
        }).catch((reason) => {
            setFormStatus(FORM_STATE.FAILED);
            console.error(reason);
        });
    }

    const growlCloseHandler = () => {
        setFormStatus(FORM_STATE.INIT);
    }

    return (
        <div className={`${styles.ContactPage} ani-popIn`}>
            <div className={`${styles.ContactCard} container`}>
                <div className={`${styles.ContactHeader} text-uppercase mb-5`}>Contact</div>
                <div className={styles.StaticText}>Have a question?</div>
                <form className={styles.ContactForm} onSubmit={formSubmitHandler}>
                    <input className="form-control" type='text' name='name' placeholder='Your Name' value={formData.name} autoComplete="off" onChange={updateData} required />
                    <input className="form-control" type='email' name='email' placeholder='Your Email' value={formData.email} autoComplete="off" onChange={updateData} required />
                    <textarea className="form-control" name='message' placeholder='Your Message' onChange={updateData} value={formData.message} required></textarea>
                    <button type='submit' className='btn btn-outline-info' disabled={formStatus === FORM_STATE.SUBMITTED}>Send</button>
                    {formStatus === FORM_STATE.SUCCESS && <div className="alert alert-success" role="alert">The message has been posted successfully.</div>}
                    {formStatus === FORM_STATE.FAILED && <div className="alert alert-danger" role="alert">Error occurred while posting the message. Please try again later.</div>}
                </form>
                <div className={styles.SocialLinks}>
                    <h3 className="mb-4 text-uppercase">You can reach me out</h3>
                    <div className="d-flex flex-row justify-content-around container">
                        <a href="https://www.linkedin.com/in/pritibhunia" rel="noreferrer" className="ani-rollover-hover" target="_blank">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://www.facebook.com/bhuniapriti" rel="noreferrer" className="ani-rollover-hover" target="_blank">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://pritibhunia.medium.com" rel="noreferrer" className="ani-rollover-hover" target="_blank">
                            <i className="bi bi-medium"></i>
                        </a>
                        <a href="https://x.com/pritibhunia" rel="noreferrer" className="ani-rollover-hover" target="_blank">
                            <i className="bi bi-x"></i>
                        </a>
                        <a href="https://github.com/pritibhunia" rel="noreferrer" className="ani-rollover-hover" target="_blank">
                            <i className="bi bi-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;