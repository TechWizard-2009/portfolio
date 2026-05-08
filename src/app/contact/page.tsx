"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle, MapPin, Globe } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact</h1>
          <p className="text-secondary leading-relaxed mb-8">
            Have a project in mind, want to collaborate on open-source, or just want to chat
            about observability? I'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-surface border border-border shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Email</h3>
                <a href="mailto:towork009@gmail.com" className="text-sm text-primary hover:underline">
                  towork009@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-surface border border-border shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Location</h3>
                <p className="text-sm text-secondary">Remote / Worldwide</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-surface border border-border shrink-0">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Availability</h3>
                <p className="text-sm text-secondary flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  Open to new opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Response time card */}
          <div className="mt-10 p-6 rounded-xl border border-border bg-surface">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-sm">Quick Response</h3>
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              I typically respond within 24 hours. For urgent inquiries, include "URGENT" in the
              subject line and I'll prioritize your message.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="p-12 rounded-xl border border-border bg-surface text-center">
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
              <p className="text-secondary mb-6">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
