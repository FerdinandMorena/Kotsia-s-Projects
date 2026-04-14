"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-foreground"
          >
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="bg-card"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            className="bg-card"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium text-foreground"
        >
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+27 123 456 7890"
          className="bg-card"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="service"
          className="text-sm font-medium text-foreground"
        >
          Service Required
        </label>
        <select
          id="service"
          name="service"
          className="flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Select a service</option>
          <option value="carpentry">Carpentry</option>
          <option value="tiling">Tiling</option>
          <option value="painting">Painting</option>
          <option value="plastering">RhinoLite Plastering</option>
          <option value="drainage">Stormwater Drainage</option>
          <option value="welding">Welding</option>
          <option value="other">Other / Multiple Services</option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          Project Details
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please describe your project requirements..."
          rows={5}
          required
          className="bg-card resize-none"
        />
      </div>

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
        By submitting this form, you agree to our privacy policy. We&apos;ll never
        share your information with third parties.
      </p>
    </form>
  )
}
