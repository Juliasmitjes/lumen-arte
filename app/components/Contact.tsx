"use client";

import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_2pttrmd', 'template_1m4p294', form.current, {
        publicKey: '8GQ2mbHqj2pVKGmsp',
      })
      .then(
        () => {
          toast.success('Dank je wel voor je bericht! Ik neem snel contact met je op.');
          form.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Er is iets misgegaan. Probeer het opnieuw.');
        },
      );
  };

  return (
    <section id="contact" className="py-20 gradient-earth">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* header */}
          <div className="lg:text-center mb-8 sm:mb-16">
            <h2 className="font-playful text-4xl lg:text-5xl text-accent mb-4">
              Nieuwsgierig?
            </h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Neem contact op
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold text-foreground mb-6">
                  Kom langs in mijn atelier
                </h4>
                <p className="text-muted-foreground text-lg font-business mb-8">
                  In mijn atelier kun je mijn werk van dichtbij bekijken. 
                  Maak een afspraak en ontdek mijn lichtsculpturen en schilderijen.
                </p>
              </div>

              {/* contactgegevens */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    detail: "jacqtiemens@gmail.com",
                    action: "mailto:jacqtiemens@gmail.com"
                  },
                  {
                    icon: Phone,
                    title: "Telefoon", 
                    detail: "+31 6 43960007",
                    action: "tel:+31643960007"
                  },
                  {
                    icon: MapPin,
                    title: "Atelier",
                    detail: "Nijmegen, Nederland",
                    action: null
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-warm transition-all duration-300 group">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 active:scale-110 transition-transform duration-300">
                      <contact.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-md text-muted-foreground">{contact.title}</p>
                      {contact.action ? (
                        <a 
                          href={contact.action}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {contact.detail}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{contact.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h5 className="font-playful text-xl text-accent mb-2">
                  Wat ik aanbied
                </h5>
                <ul className="text-muted-foreground font-business text-md mb-4 space-y-1 list-disc list-inside">
                    <li>
                        Orginele lichtsculpturen op maat
                    </li>
                    <li>
                        Werken voor bedrijven en particulieren
                    </li>
                    <li>
                        Advies over kunstkeuze en plaatsing
                    </li>
                </ul>
                <p className="text-muted-foreground font-business font-bold text-md mb-4">
                  Maak een afspraak voor een persoonlijke kennismaking
                </p>
              </div>
            </div>

            {/* contactformulier */}
            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <h4 className="text-2xl font-business font-bold text-foreground mb-6">
                Stuur een bericht
              </h4>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div>
                    <label htmlFor="name" className="block text-md font-business text-foreground mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-background font-business border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="Je naam"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-md font-business text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-background font-business border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                      placeholder="je@email.com"
                    />
                  </div>
                </div>

                {/* <div>
                  <label htmlFor="subject" className="block text-md font-business text-foreground mb-2">
                    Onderwerp
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border font-business border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                  >
                    <option value="">Kies een onderwerp...</option>
                    <option value="Lichtsculptuur informatie">Lichtsculptuur informatie</option>
                    <option value="Schilderij informatie">Schilderij informatie</option>
                    <option value="Opdracht aanvraag">Opdracht aanvraag</option>
                    <option value="Atelierbezoek">Atelierbezoek</option>
                    <option value="Anders">Anders</option>
                  </select>
                </div> */}

                <div>
                  <label htmlFor="message" className="block text-md font-business text-foreground mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border font-business border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                    placeholder="Vertel me over je interesse in mijn werk..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Verstuur bericht
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;