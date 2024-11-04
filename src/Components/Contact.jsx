import React from 'react';
import { CONTACT } from '../Data/data';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen px-4 mt-40">
      <h1 className="text-4xl font-bold mb-10">Contact</h1>
      <div className="space-y-4 text-lg text-center">
        <div className="flex items-center space-x-2">
          <MapPin className="text-purple-500" />
          <span>{CONTACT.address}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="text-green-500" />
          <span>{CONTACT.phoneNo}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail className="text-blue-500" />
          <span>{CONTACT.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
