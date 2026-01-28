"use client";

import { motion } from "framer-motion";
import { User, Map, Target, Rocket } from "lucide-react";
import Card from "@/components/ui/Card";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: User,
      title: "Create Your Work Profile",
      description:
        "Describe your current role, hours, and goals. No tests required.",
    },
    {
      number: 2,
      icon: Map,
      title: "See Your Skill Path",
      description:
        "View realistic next roles with required skills and income ranges.",
    },
    {
      number: 3,
      icon: Target,
      title: "Practice Real Work Skills",
      description:
        "Short, job-specific skill practice designed for breaks (15-30 min).",
    },
    {
      number: 4,
      icon: Rocket,
      title: "Unlock Better Roles",
      description:
        "Use verified skills to access higher-responsibility opportunities.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-neutral-dark mb-12"
        >
          Your Journey in 4 Steps
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connecting line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -z-10">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-200 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </div>
                )}

                <Card className="h-full text-center" hover>
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg"></div>
                      <div className="relative bg-primary/10 rounded-full p-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
