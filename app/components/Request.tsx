"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Dialog from "./ui/dialog";
import { Button } from "./ui/button";
import { toast } from 'react-toastify';

interface RequestProps {
  quantity: number;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  quantity: number;
};

export default function Request ({ quantity }: RequestProps) {
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity,
  });

  const mutation = useMutation({
  mutationFn: async (data: FormData) => {
    const res = await fetch("/api/send-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Request failed");
    return res.json();
  },
  onSuccess: () => {
    toast.success("Bedankt voor je bericht. Ik neem snel contact met je op!");
    setFormData({ name: "", email: "", phone: "", quantity });
    setOpen(false);
  },
  onError: () => {
    toast.error("Er is iets misgegaan. Probeer het opnieuw.");
  },
});

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const newErrors: typeof errors = {};
  if (!formData.name.trim()) newErrors.name = "Naam is verplicht";
  if (!formData.email.trim()) newErrors.email = "E-mailadres is verplicht";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});
  mutation.mutate(formData);
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
          type="text"
          placeholder= "Schrijf een bericht"
          className="border border-border font-business rounded-lg p-10 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"          
          />

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
}