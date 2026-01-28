"use client";

import { motion } from "framer-motion";
import { Users, Target, Briefcase, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Community() {
  const features = [
    {
      icon: Users,
      title: "Peer Circles",
      description: "Connect with others learning the same skills",
      points: ["Ask questions", "Share experiences", "Learn together"],
      features: [
        "Skill-based groups",
        "Weekly discussions",
        "Peer support",
      ],
      cta: "Join Circle →",
      color: "text-primary",
      bgColor: "bg-blue-50",
    },
    {
      icon: Target,
      title: "Mentor Guidance",
      description: "Learn from supervisors and experienced workers",
      points: ["Get career advice", "Role insights", "Real-world tips"],
      features: [
        "Operations leads",
        "Senior coordinators",
        "Hiring managers",
      ],
      cta: "Find Mentor →",
      color: "text-secondary",
      bgColor: "bg-orange-50",
    },
    {
      icon: Briefcase,
      title: "Opportunity Posts",
      description: "See role openings from verified partners",
      points: [
        "Higher-responsibility roles",
        "Skill-matched positions",
        "Direct applications",
      ],
      features: [
        "Team lead positions",
        "Coordinator roles",
        "Supervisor openings",
      ],
      cta: "View Posts →",
      color: "text-success",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section
      id="community"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
            Grow with People on the Same Path
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white"
                ></div>
              ))}
            </div>
            <p className="text-sm text-gray-600 ml-4">
              <span className="font-semibold">2,847</span> active learners
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`${feature.bgColor} h-full flex flex-col`} hover>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-white ${feature.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-dark">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-4">{feature.description}</p>

                  <ul className="space-y-2 mb-4">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className={`${feature.color} mt-1`}>•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                      Features:
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1 mb-4">
                      {feature.features.map((f, i) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="w-full group">
                      {feature.cta.replace(" →", "")}{" "}
                      <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
