import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const contactInfo = [
    { icon: 'bx bx-envelope', label: 'Email', value: 'tontoeyrb92@gmail.com', action: 'mailto:tontoeyrb92@gmail.com' },
    { icon: 'bx bx-phone', label: 'Phone', value: '+66928934814', action: 'tel:+66928934814' },
    { icon: 'bx bx-map', label: 'Address', value: 'Bangkok, Thailand', action: '#' },
    { icon: 'bx bxl-github', label: 'GitHub', value: 'ttttontoey', action: 'https://github.com/ttttontoey' },
    { icon: 'bx bxl-instagram', label: 'Instagram', value: 'ttttontoey', action: 'https://www.instagram.com/ttt.tontoey' },
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: e.target.fullName.value,
      from_email: e.target.emailAddress.value,
      subject: e.target.messageSubject.value,
      message: e.target.messageContent.value,
    };

    emailjs.send(
      'service_sc4mcig  ',        // Your EmailJS service ID
      'template_eyk2s24',       // Your EmailJS template ID
      templateParams,
      '9r54mpEu1tNUq78k6'       // Your EmailJS public key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      e.target.reset();
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message.');
    });
  };

  return (
    <>
      <style jsx>{`
        .contact-bg {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
          padding: 60px 0;
        }

        .contact-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 1;
        }

        .contact-content { position: relative; z-index: 2; }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          position: relative;
          display: inline-block;
          margin-bottom: 1rem;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2px;
        }

        .contact-info-card {
          background: white;
          border-radius: 10px;
          padding: 15px;
          margin-bottom: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .contact-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
        }
        .contact-info-icon { font-size: 1.8rem; color: #667eea; margin-right: 10px; }
        .contact-info-label { font-size: 1rem; font-weight: 600; color: #2c3e50; }
        .contact-info-value { font-size: 0.9rem; color: #6c757d; word-break: break-all; }

        .message-form {
          background: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .input-wrapper { position: relative; margin-bottom: 2rem; }
        .modern-input, .modern-textarea {
          width: 100%;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          padding: 15px;
          font-size: 1rem;
          background: transparent;
          transition: all 0.3s ease;
          outline: none;
        }
        .modern-input:focus, .modern-textarea:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102,126,234,0.1);
        }
        .floating-label {
          position: absolute;
          top: 15px;
          left: 15px;
          font-size: 1rem;
          color: #6c757d;
          pointer-events: none;
          transition: all 0.3s ease;
          background: white;
          padding: 0 5px;
        }
        .modern-input:focus + .floating-label,
        .modern-input:not(:placeholder-shown) + .floating-label {
          top: -8px;
          left: 12px;
          font-size: 0.75rem;
          color: #667eea;
          font-weight: 500;
        }
        .modern-textarea { resize: vertical; min-height: 120px; font-family: inherit; }

        .submit-btn {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 15px 35px;
          border-radius: 25px;
          font-weight: 600;
          border: none;
          transition: all 0.3s ease;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(102,126,234,0.4);
          color: white;
        }

        @media (max-width: 767px) {
          .message-form { padding: 20px; }
          .section-title { font-size: 2rem; }
        }
      `}</style>

      <section className="contact-bg py-5" id="contact">
        <div className="container contact-content">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Get in Touch</h2>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4" data-aos="fade-right">
              <h3 className="section-subtitle mb-3">
                <i className="bx bx-info-circle"></i> Contact Information
              </h3>
              {contactInfo.map((info, index) => {
                const isClickable = info.label !== 'Address';
                return (
                  <div
                    key={index}
                    className={`contact-info-card ${isClickable ? 'clickable' : ''}`}
                    onClick={() => isClickable ? window.open(info.action, '_blank') : handleCopy(info.value)}
                  >
                    <i className={`contact-info-icon ${info.icon}`}></i>
                    <div>
                      <h6 className="contact-info-label mb-0">{info.label}</h6>
                      <p className="contact-info-value mb-0">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <div className="col-lg-6 mb-4" data-aos="fade-left">
              <div className="message-form">
                <h3 className="h4 mb-4">
                  <i className="bx bx-message-dots me-2 text-primary"></i> Send a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="input-wrapper">
                    <input type="text" className="modern-input" id="fullName" name="fullName" placeholder=" " required />
                    <label htmlFor="fullName" className="floating-label">Full Name</label>
                  </div>

                  <div className="input-wrapper">
                    <input type="email" className="modern-input" id="emailAddress" name="emailAddress" placeholder=" " required />
                    <label htmlFor="emailAddress" className="floating-label">Email Address</label>
                  </div>

                  <div className="input-wrapper">
                    <input type="text" className="modern-input" id="messageSubject" name="messageSubject" placeholder=" " required />
                    <label htmlFor="messageSubject" className="floating-label">Subject</label>
                  </div>

                  <div className="input-wrapper">
                    <textarea className="modern-textarea" id="messageContent" name="messageContent" placeholder="Write your message here..." rows="5" required></textarea>
                  </div>

                  <div className="text-end">
                    <button type="submit" className="submit-btn">
                      <i className="bx bx-send me-2"></i> Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
