"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Loader2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const WEB3FORMS_EMAIL = "osm78704@gmail.com";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isClient, setIsClient] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("access_key", "b0479c74-c682-4bca-b0df-cca21cc766e9");
      formData.append("from_name", data.name);
      formData.append("email", data.email);
      formData.append("subject", data.subject);
      formData.append("message", data.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "✅ Message Sent!",
          description: "Thank you for reaching out. We'll get back to you shortly.",
          className: "bg-purple-900 text-white border-none shadow-lg rounded-xl",
        });
        form.reset();
      } else {
        toast({
          title: "⚠️ Submission Failed",
          description: "Please try again or reach out via email.",
          variant: "destructive",
          className: "bg-red-600 text-white border-none shadow-lg rounded-xl",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "🚫 Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
        className: "bg-red-600 text-white border-none shadow-lg rounded-xl",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative" ref={ref}>
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gray-300">
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,138.7C840,149,960,203,1080,202.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {isClient && (
            <motion.div
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Us</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {(["name", "email", "subject", "message"] as Array<keyof FormValues>).map(
                    (fieldName) => {
                      const fieldLabel = {
                        name: "Your Name",
                        email: "Email Address",
                        subject: "Subject",
                        message: "Message",
                      }[fieldName];

                      return (
                        <FormField
                          key={fieldName}
                          control={form.control}
                          name={fieldName}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">{fieldLabel}</FormLabel>
                              <FormControl>
                                {fieldName === "message" ? (
                                  <Textarea
                                    placeholder="Your message here..."
                                    className="bg-gray-200 border-gray-700 text-white focus:border-primary focus:ring-primary"
                                    rows={5}
                                    {...field}
                                  />
                                ) : (
                                  <Input
                                    placeholder={fieldName === "email" ? "you@example.com" : ""}
                                      className="bg-gray-200 border-gray-700 text-white focus:border-primary focus:ring-primary"
                                    {...field}
                                  />
                                )}
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      );
                    }
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}

          {isClient && (
            <motion.div
              variants={itemVariants}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800 h-full"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">Connect With Us</h3>
              <div className="space-y-8 mb-8">
                <ContactInfo
                  icon={MapPin}
                  title="Our Location"
                  text="Pechs Block- 2, Near Al-Falah Masjid"
                />
                <ContactInfo icon={Mail} title="Email Us" text={WEB3FORMS_EMAIL} />
                <ContactInfo icon={Phone} title="Call Us" text="+92 3486906754" subtext="Mon-Fri, 9AM-6PM PST" />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon: Icon,
  title,
  text,
  subtext,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  subtext?: string;
}) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
        <Icon className="h-6 w-6" />
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="mt-1 text-gray-300">{text}</p>
      {subtext && <p className="text-sm text-gray-400">{subtext}</p>}
    </div>
  </div>
);

export default Contact;
