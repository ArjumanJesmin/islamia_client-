// helpers.ts
import { 
  Clock, 
  CheckCircle2, 
  CalendarX 
} from "lucide-react";

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "active":
      return CheckCircle2;
    case "upcoming":
      return Clock;
    case "ended":
      return CalendarX;
    default:
      return Clock;
  }
};

export const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "text-green-600";
    case "upcoming":
      return "text-blue-600";
    case "ended":
      return "text-gray-500";
    default:
      return "text-gray-600";
  }
};

export const getStatusText = (status: string) => {
  switch (status) {
    case "active":
      return "Active";
    case "upcoming":
      return "Upcoming";
    case "ended":
      return "Ended";
    default:
      return status;
  }
};