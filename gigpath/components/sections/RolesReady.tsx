"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { availableRoles } from "@/data/mockData";

export default function RolesReady() {
  const getMatchColor = (percentage: number) => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-primary";
    return "text-secondary";
  };

  const getMatchBgColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-50";
    if (percentage >= 60) return "bg-blue-50";
    return "bg-orange-50";
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
            Roles You May Be Ready For
          </h2>
          <p className="text-lg text-gray-600">
            Based on your completed skills
          </p>
        </motion.div>

        {/* Scrollable horizontal cards */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-6 min-w-max md:grid md:grid-cols-2 lg:grid-cols-4 md:min-w-0">
            {availableRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="min-w-[300px] md:min-w-0"
              >
                <Card className={`${getMatchBgColor(role.matchPercentage)} h-full flex flex-col`} hover>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-neutral-dark flex-1">
                      {role.title}
                    </h3>
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-bold ${getMatchColor(role.matchPercentage)} bg-white`}
                    >
                      {role.matchPercentage}%
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Required Skills:
                    </p>
                    <ul className="space-y-2">
                      {role.requiredSkills.map((skill, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          {skill.completed ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                              <span className="text-gray-700 line-through">
                                {skill.name}
                              </span>
                            </>
                          ) : (
                            <>
                              <AlertCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                              <div className="flex-1">
                                <div className="flex justify-between mb-1">
                                  <span className="text-gray-700">
                                    {skill.name}
                                  </span>
                                  {skill.progress && (
                                    <span className="text-xs text-gray-500">
                                      {skill.progress}%
                                    </span>
                                  )}
                                </div>
                                {skill.progress && (
                                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div
                                      className="bg-secondary h-1.5 rounded-full"
                                      style={{ width: `${skill.progress}%` }}
                                    ></div>
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-200 space-y-3">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Income Range:</p>
                      <p className="text-sm font-semibold text-success">
                        {role.incomeRange}/month
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Location:</p>
                      <p className="text-sm text-gray-700">{role.location}</p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full group">
                      Learn Missing Skill{" "}
                      <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-start gap-2 max-w-3xl mx-auto"
        >
          <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-500">
            <strong>Note:</strong> Role availability depends on location, demand,
            and hiring partner requirements. No guarantees provided.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
