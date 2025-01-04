import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string;
}

function ContactInfo({ icon, title, details }: ContactInfoProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="text-red-600 mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600">{details}</p>
      </div>
    </div>
  );
}

export function LocationCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-xl p-6 md:p-8"
    >
      <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
      <div className="space-y-6">
        <ContactInfo
          icon={<MapPin className="h-6 w-6" />}
          title="Address"
          details="ق ج ٢ ر + ق ٣ ح، النخيل، الرياض، المملكة العربية السعودية
"
        />
        <ContactInfo
          icon={<Phone className="h-6 w-6" />}
          title="Phone"
          details="+966542996839"
        />
        <ContactInfo
          icon={<Mail className="h-6 w-6" />}
          title="Email"
          details="binyatikcompany@gmail.com"
        />
        <ContactInfo
          icon={<Clock className="h-6 w-6" />}
          title="Working Hours"
          details="Mon - Fri: 8:00 AM - 6:00 PM"
        />
      </div>
    </motion.div>
  );
}