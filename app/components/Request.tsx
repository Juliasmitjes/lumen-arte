"use client";

import { useState, useRef } from "react";
import Dialog from "./ui/dialog";
import { Button } from "./ui/button";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Request = ({ productId }: { productId: string }) => {

  const [open, setOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

 const form = useRef<HTMLFormElement>(null);

 const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_nlds72b', 'template_2lbt0we', form.current, {
        publicKey: 'exPCgKyMcz5MS9WFp',
      })
      .then(
        (response) => {
          console.log("SUCCESS", response);
          toast.success('Dank je wel voor je bericht! Ik neem snel contact met je op.');
          form.current?.reset();
        //   setFormData({          
        //   name: "",
        //   email: "",
        //   phone: "",
        //   message: "",
        // });
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Er is iets misgegaan. Probeer het opnieuw.');
        },
      );
  };





//   const mutation = useMutation({
//   mutationFn: async (data: FormData) => {
//     const res = await fetch("/api/send-request", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     if (!res.ok) throw new Error("Request failed");
//     return res.json();
//   },
//   onSuccess: () => {
//     toast.success("Bedankt voor je bericht. Ik neem snel contact met je op!");
//     setFormData({ name: "", email: "", phone: "", quantity });
//     setOpen(false);
//   },
//   onError: () => {
//     toast.error("Er is iets misgegaan. Probeer het opnieuw.");
//   },
// });

//  const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const newErrors: typeof errors = {};
//   if (!formData.name.trim()) newErrors.name = "Naam is verplicht";
//   if (!formData.email.trim()) newErrors.email = "E-mailadres is verplicht";

//   if (Object.keys(newErrors).length > 0) {
//     setErrors(newErrors);
//     return;
//   }

//   setErrors({});
//   mutation.mutate(formData);
// };

  return (
    <>
      <Button variant="default" size="default" className="sm:px-8" onClick={() => setOpen(true)}>
        Meer informatie
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-bold mb-4">Vrijblijvend informatie aanvragen</h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
          <input type="hidden" name="productId" value={productId} />

          <input
            type="text"
            name="name"
            placeholder="Naam *"
            // value={formData.name}
            // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-border font-business rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            required/>


          <input
            type="email"
            name="email"
            placeholder="E-mailadres *"
            // value={formData.email}
            // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border border-border font-business rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            required/>

          <input
            type="tel"
            name="phone"
            placeholder="Telefoonnummer (optioneel)"
            // value={formData.phone}
            // onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border border-border font-business rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"/>

          <textarea
            placeholder="Schrijf een bericht *"
            name="message"
            rows={5}
            className="border border-border font-business rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
          ></textarea>

          {/* <input
            type="number"
            value={formData.quantity}
            readOnly
            className="border border-border font-business rounded-lg p-2 bg-gray-100"/> */}

          <Button type="submit">Verzenden</Button>
        </form>
      </Dialog>

    </>
  );
};

export default Request;