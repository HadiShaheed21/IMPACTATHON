"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { careerPaths } from "@/data/mockData";

export default function SkillPathways() {
  const paths = Object.values(careerPaths);

  return (
    <section
      id="career-paths"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-light"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-neutral-dark mb-12"
        >
          Choose Your Path, Not a Course
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col" hover>
                <div className="text-4xl mb-4">{path.icon}</div>
                <h3 className="text-xl font-bold text-neutral-dark mb-4">
                  {path.title}
                </h3>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Starting Roles:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {path.startingRoles.map((role, i) => (
                      <li key={i}>• {role}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Skills You'll Build:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {path.skills.slice(0, 3).map((skill, i) => (
                      <li key={i}>• {skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Roles You Can Reach:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-4">
                    {path.targetRoles.slice(0, 2).map((target, i) => (
                      <li key={i}>
                        • {target.role} ({target.income})
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-success mb-3">
                    Income Growth: {path.incomeGrowth}
                  </p>
                  <Button variant="outline" size="sm" className="w-full group">
                    Explore Path{" "}
                    <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
