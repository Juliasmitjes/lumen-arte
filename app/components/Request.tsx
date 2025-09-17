"use client";

import { useState, useEffect } from "react";
import Dialog from "./ui/dialog";
import { Button } from "./ui/button";

interface RequestProps {
  quantity: number;
}

export default function Request ({ quantity }: RequestProps) {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

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

    setShowPopup(true);
    setFormData({ name: "", email: "", phone: "", quantity });
    setTimeout(() => setShowPopup(false), 3000);
  } catch (error) {
    setErrorPopup(true);
    setTimeout(() => setErrorPopup(false), 4000);
  }
};

  return (
    <>
      <Button variant="default" size="lg" onClick={() => setOpen(true)}>
        Vrijblijvend aanvragen
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-bold mb-4">Vrijblijvend informatie aanvragen</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Naam"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border font-business rounded p-2"
            required/>

          <input
            type="email"
            placeholder="E-mailadres"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border font-business rounded p-2"
            required/>

          <input
            type="tel"
            placeholder="Telefoonnummer (optioneel)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border font-business rounded p-2"/>

          <input
            type="number"
            value={formData.quantity}
            readOnly
            className="border font-business rounded p-2 bg-gray-100"/>

          <Button type="submit">Verzenden</Button>

          {showPopup && (
            <div className="fixed bottom-6 right-6 bg-green-600 font-business text-white px-4 py-2 rounded-lg shadow-lg">
              Bedankt voor je bericht. Ik neem snel contact met je op!
            </div>
          )}

          {errorPopup && (
            <div className="fixed bottom-6 right-6 bg-red-600 font-business text-white px-4 py-2 rounded-lg shadow-lg">
              Er is iets misgegaan. Probeer het opnieuw.
            </div>
          )}

        </form>
      </Dialog>
    </>
  );
}