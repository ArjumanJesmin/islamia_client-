"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { getStatusColor, getStatusIcon, getStatusText } from "./helpers";

// Mock Local Data
const mockAnnouncements = [
  {
    id: 1,
    title: "Exam Schedule Released",
    status: "active",
    date: "2025-10-05",
  },
  { id: 2, title: "School Picnic", status: "upcoming", date: "2025-11-15" },
  { id: 3, title: "Annual Sports Day", status: "ended", date: "2025-08-10" },
];

const mockEvents = [
  { id: 1, name: "Science Fair", status: "active", date: "2025-10-12" },
  { id: 2, name: "Cultural Program", status: "upcoming", date: "2025-12-01" },
];

export default function AnnouncementsSection() {
  const [activeTab, setActiveTab] = useState<"announcements" | "events">(
    "announcements"
  );
  const data = activeTab === "announcements" ? mockAnnouncements : mockEvents;

  return (
    <div className="p-6 bg-card rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          School {activeTab === "announcements" ? "Announcements" : "Events"}
        </h2>
        <Button
          onClick={() =>
            setActiveTab(
              activeTab === "announcements" ? "events" : "announcements"
            )
          }
        >
          Switch to {activeTab === "announcements" ? "Events" : "Announcements"}
        </Button>
      </div>

      <motion.div layout className="space-y-4">
        {data.map((item) => {
          const Icon = getStatusIcon(item.status);
          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-between items-center bg-muted/30 p-4 rounded-lg hover:bg-muted/50 transition"
            >
              <div className="flex items-center gap-3">
                <Icon className={`h-5 w-5 ${getStatusColor(item.status)}`} />
                <div>
                  <p className="font-medium">
                    {"title" in item ? item.title : item.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </div>
              <Badge variant="outline" className={getStatusColor(item.status)}>
                {getStatusText(item.status)}
              </Badge>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
