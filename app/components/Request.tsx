"use client";

import { useState, useEffect } from "react";
import Dialog from "./ui/dialog";
import { Button } from "./ui/button";
import { ToastContainer, toast } from 'react-toastify';

interface RequestProps {
  quantity: number;
}

export default function Request ({ quantity }: RequestProps) {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity,
  });

   useEffect(() => {
    setFormData((prev) => ({ ...prev, quantity }));
  }, [quantity]);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/send-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Request failed");

    toast.success("Bedankt voor je bericht. Ik neem snel contact met je op!");
    setFormData({ name: "", email: "", phone: "", quantity });
  } catch (error) {
    console.error(error);
    toast.error("Er is iets misgegaan. Probeer het opnieuw.");
  }
};

  return (
    <>
      <Button variant="default" size="default" className="sm:px-8" onClick={() => setOpen(true)}>
        Meer informatie
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-bold mb-4">Vrijblijvend informatie aanvragen</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Naam"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-border font-business rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            required/>

          <input
            type="email"
            placeholder="E-mailadres"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border border-border font-business rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            required/>

          <input
            type="tel"
            placeholder="Telefoonnummer (optioneel)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border border-border font-business rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"/>

          <input
            type="number"
            value={formData.quantity}
            readOnly
            className="border border-border font-business rounded-lg p-2 bg-gray-100"/>

          <Button type="submit">Verzenden</Button>
        </form>
      </Dialog>
    </>
  );
}