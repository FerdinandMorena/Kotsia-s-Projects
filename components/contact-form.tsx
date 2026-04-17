"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setIsSubmitted(true);
      toast.success("Message sent successfully 🎉");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Thank You!
        </h3>
        <p className="text-muted-foreground">
          We&apos;ve received your message and will get back to you within 24
          hours.
        </p>

        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Full Name</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Phone Number</label>
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+27 123 456 7890"
        />
      </div>

      {/* Service */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Service Required</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
        >
          <option value="">Select a service</option>
          <option value="carpentry">Carpentry</option>
          <option value="tiling">Tiling</option>
          <option value="painting">Painting</option>
          <option value="plastering">RhinoLite Plastering</option>
          <option value="drainage">Stormwater Drainage</option>
          <option value="welding">Welding</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Project Details</label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project..."
          rows={5}
          required
        />
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner className="mr-2" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We respect your privacy. Your details are never shared.
      </p>
    </form>
  );
}
