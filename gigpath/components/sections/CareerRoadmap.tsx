"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Lock, Target } from "lucide-react";
import Card from "@/components/ui/Card";
import { careerRoadmap } from "@/data/mockData";

export default function CareerRoadmap() {
  const stages = [
    {
      status: "completed",
      icon: CheckCircle2,
      color: "text-success",
      bgColor: "bg-green-50",
      borderColor: "border-success",
      title: "COMPLETED",
      role: careerRoadmap.completed.role,
      income: careerRoadmap.completed.income,
      skills: careerRoadmap.completed.skills,
    },
    {
      status: "inProgress",
      icon: Zap,
      color: "text-secondary",
      bgColor: "bg-orange-50",
      borderColor: "border-secondary",
      title: "IN PROGRESS",
      role: careerRoadmap.inProgress.role,
      progress: careerRoadmap.inProgress.progress,
      skills: careerRoadmap.inProgress.skills,
    },
    {
      status: "next",
      icon: Target,
      color: "text-primary",
      bgColor: "bg-blue-50",
      borderColor: "border-primary",
      title: "NEXT STEP",
      role: careerRoadmap.next.role,
      income: careerRoadmap.next.income,
      skills: careerRoadmap.next.skills,
    },
    {
      status: "future",
      icon: Lock,
      color: "text-gray-500",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-300",
      title: "FUTURE",
      role: careerRoadmap.future.role,
      income: careerRoadmap.future.income,
      skills: careerRoadmap.future.skills,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-4">
            Your Career Roadmap
          </h2>
          <p className="text-lg text-gray-600">
            Track where you are and where you're going
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${stage.borderColor} ${
                        stage.status === "completed"
                          ? "bg-success"
                          : stage.status === "inProgress"
                          ? "bg-secondary"
                          : "bg-white"
                      }`}
                    ></div>
                  </div>

                  <Card
                    className={`${stage.bgColor} border-2 ${stage.borderColor} h-full`}
                    hover
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className={`w-5 h-5 ${stage.color}`} />
                      <span
                        className={`text-xs font-bold uppercase ${stage.color}`}
                      >
                        {stage.title}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-dark mb-2">
                      {stage.role}
                    </h3>

                    {stage.income && (
                      <p className="text-sm font-semibold text-gray-700 mb-3">
                        {stage.income}
                      </p>
                    )}

                    {stage.progress && (
                      <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold">{stage.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${stage.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="bg-secondary h-2 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    )}

                    <div className="mt-4">
                      <p className="text-xs font-semibold text-gray-700 mb-2">
                        {stage.status === "completed"
                          ? "Completed:"
                          : stage.status === "inProgress"
                          ? "Skills in Progress:"
                          : stage.status === "next"
                          ? "Next Eligible:"
                          : "Future Goal:"}
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {stage.skills.map((skill, i) => (
                          <li key={i} className="flex items-start gap-1">
                            {stage.status === "completed" ? (
                              <CheckCircle2 className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
                            ) : (
                              <span>•</span>
                            )}
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
