import { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('Sending....');
    
    try {
      const submitFormData = new FormData();
      submitFormData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      submitFormData.append('name', formData.name);
      submitFormData.append('email', formData.email);
      submitFormData.append('phone', formData.phone);
      submitFormData.append('service', formData.service);
      submitFormData.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitFormData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult('Form Submitted Successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setResult(`Error: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-off-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-navy to-slate-grey text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Private <span className="text-burnished-gold">Consultation</span>
          </h1>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Begin your wealth multiplication journey with a confidential consultation 
            tailored to your unique framework needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-midnight-navy mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-midnight-navy text-burnished-gold w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">@</span>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-midnight-navy mb-1">Email</h3>
                      <p className="font-sans text-slate-grey">concierge@EquitasApex.com</p>
                      <p className="font-sans text-sm text-slate-grey mt-1">Response within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-midnight-navy text-burnished-gold w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">●</span>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-midnight-navy mb-1">Phone</h3>
                      <p className="font-sans text-slate-grey">+1 555-APEX (2739)</p>
                      <p className="font-sans text-sm text-slate-grey mt-1">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-midnight-navy text-burnished-gold w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">●</span>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-midnight-navy mb-1">Office</h3>
                      <p className="font-sans text-slate-grey">
                        1050 E Flamingo Road S 107 STE<br />
                        Las Vegas, NV 89119<br />
                        Clark County, Nevada
                      </p>
                      <p className="font-sans text-sm text-slate-grey mt-1">By appointment only</p>
                    </div>
                  </div>
                </div>

                <div className="bg-midnight-navy text-white p-6 rounded-lg">
                  <h3 className="font-sans font-semibold text-burnished-gold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-burnished-gold text-midnight-navy w-12 h-12 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors">
                      <span className="font-bold">in</span>
                    </a>
                    <a href="#" className="bg-burnished-gold text-midnight-navy w-12 h-12 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors">
                      <span className="font-bold">X</span>
                    </a>
                    <a href="#" className="bg-burnished-gold text-midnight-navy w-12 h-12 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors">
                      <span className="font-bold">YT</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="font-serif text-3xl font-bold text-midnight-navy mb-6">
                Schedule Consultation
              </h2>
              <p className="font-sans text-slate-grey mb-8">
                Complete the form below and our concierge team will contact you to schedule your wealth multiplication consultation.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                    Service Interest
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="private">Private Financing Framework</option>
                    <option value="capital">Capital Recycling</option>
                    <option value="distribution">Strategic Distribution</option>
                    <option value="sovereign">Sovereign Protection</option>
                    <option value="comprehensive">Comprehensive Framework</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                    Message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent"
                    placeholder="Tell us about your wealth multiplication goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-midnight-navy text-burnished-gold py-4 rounded font-semibold hover:bg-slate-grey transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Request Private Consultation'}
                </button>
              </form>

              {/* Result Message */}
              {result && (
                <div className={`mt-4 p-4 rounded-lg text-center font-medium ${
                  result === 'Form Submitted Successfully' 
                    ? 'bg-green-100 text-green-800 border border-green-300' 
                    : result === 'Sending....'
                    ? 'bg-blue-100 text-blue-800 border border-blue-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                  {result}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-midnight-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Our <span className="text-burnished-gold">Location</span>
          </h2>
          <p className="font-sans text-gray-300 mb-8">
            1050 E Flamingo Road S 107 STE, Las Vegas, NV 89119
          </p>
          <div className="bg-slate-grey/30 p-8 rounded-lg max-w-4xl mx-auto">
            <p className="font-sans text-gray-300">
              [Interactive Map Integration Available]<br />
              <span className="text-sm">Serving clients globally with offices in strategic wealth multiplication jurisdictions</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
