import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const contactInfo = [
  { icon: <Phone className="h-6 w-6 text-red-500" />, textKey: 'contact.info.phone' },
  { icon: <Mail className="h-6 w-6 text-red-500" />, textKey: 'contact.info.email' },
  { icon: <MapPin className="h-6 w-6 text-red-500" />, textKey: 'contact.info.address' }
];

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  // Explicitly type event parameter as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Explicitly type event parameter as FormEvent<HTMLFormElement>
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(''); // Clear any previous error

    try {
      console.log('Sending email with the following details:');
      console.log({
        service_id: 'service_pj9r71m',
        template_id: 'template_tobcuzs',
        public_key: 'G3gHnbOD01sSM8K5M',
        formData
      });

      await emailjs.send(
        'service_pj9r71m', // Your Service ID
        'template_tobcuzs', // Your Template ID
        {
          to_email: 'abdallahzeyad337@gmail.com', // Receiver email
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'G3gHnbOD01sSM8K5M' // Your Public Key
      );

      console.log('Email sent successfully!');
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending email:', err);

      // Display error to the user
      setError(t('contact.errors.failed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          {t('contact.heading')}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                {info.icon}
                <span>{t(info.textKey)}</span>
              </div>
            ))}
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.namePlaceholder')}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.form.emailPlaceholder')}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder={t('contact.form.messagePlaceholder')}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className={`w-full ${
                isSubmitting ? 'bg-gray-600' : 'bg-red-600 hover:bg-red-700'
              } text-white px-6 py-3 rounded-lg font-semibold transition`}
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.submitButton')}
            </motion.button>
            {isSent && <p className="text-green-500 mt-2">{t('contact.success')}</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
