
import { useState, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxHero from "@/components/ParallaxHero";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm('service_p1it9qu', 'template_hkh4gzn', form.current, {
          publicKey: 'VcjR2xoaxQTuSrak6',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            toast({
              title: "Message Sent!",
              description: "Thank you for your message. We'll get back to you soon.",
            });
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast({
              title: "Failed to Send",
              description: "There was an error sending your message. Please try again.",
              variant: "destructive",
            });
          },
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <ParallaxHero 
        imageSrc="/lovable-uploads/c928a41d-5cbc-48bb-ada7-8a543056f2dc.png"
        height="h-[40vh]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Contact <span className="text-zarsom-teal">ZARSOM</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
            Get in touch with our team for inquiries and opportunities.
          </p>
        </div>
      </ParallaxHero>
      
      {/* Contact Information Section */}
      <section className="py-16 bg-gradient-to-b from-zarsom-navy to-zarsom-navy/90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <ScrollReveal>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6">ZARSOM Group</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-zarsom-teal/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-zarsom-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Email</h3>
                      <p className="text-gray-300">info@zarsomgroup.co.za</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-zarsom-teal/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-zarsom-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Phone</h3>
                      <p className="text-gray-300">+27 79 582 5550 / +27 79 654 2968</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-zarsom-teal/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-zarsom-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Address</h3>
                      <p className="text-gray-300">53 Aquileia Ave, Widenham, Umkomaas, 4170</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                    
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      required
                    />
                    
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                      required
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-zarsom-teal text-white hover:bg-zarsom-teal/80 w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Map */}
            <ScrollReveal delay={300}>
              <div className="bg-white/5 backdrop-blur-sm p-1 rounded-xl border border-white/10 h-full">
                <iframe
                  title="ZARSOM Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.863730027107!2d30.799302275677937!3d-30.20812977495235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef69ace882c8013%3A0xf46b25e9bfd8aae!2sAquileia%20Avenue%2C%20Widenham%2C%20Umkomaas%2C%204170!5e0!3m2!1sen!2sza!4v1715177806242!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
