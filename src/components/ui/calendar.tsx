// components/ui/calendar.tsx
"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CalendarProps {
  mode?: "single";
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  disabled?: (date: Date) => boolean;
  className?: string;
}

export function Calendar({
  mode = "single",
  selected,
  onSelect,
  disabled,
  className,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(selected || new Date());

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Get first day of month
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Navigate to previous month
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Handle date selection
  const handleDateSelect = (day: number) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    
    if (disabled && disabled(selectedDate)) {
      return;
    }

    if (onSelect) {
      onSelect(selectedDate);
    }
  };

  // Check if date is selected
  const isSelected = (day: number) => {
    if (!selected) return false;
    const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return (
      dateToCheck.getDate() === selected.getDate() &&
      dateToCheck.getMonth() === selected.getMonth() &&
      dateToCheck.getFullYear() === selected.getFullYear()
    );
  };

  // Check if date is today
  const isToday = (day: number) => {
    const today = new Date();
    const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return (
      dateToCheck.getDate() === today.getDate() &&
      dateToCheck.getMonth() === today.getMonth() &&
      dateToCheck.getFullYear() === today.getFullYear()
    );
  };

  // Check if date is disabled
  const isDisabled = (day: number) => {
    const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return disabled ? disabled(dateToCheck) : false;
  };

  // Generate month days
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);

  // Month names in Bengali
  const monthNames = [
    "জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন",
    "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
  ];

  // Day names in Bengali
  const dayNames = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"];

  return (
    <div className={cn("p-3 bg-white dark:bg-gray-800 rounded-md border shadow-md", className)}>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={previousMonth}
          className="h-7 w-7 bg-transparent border-0 shadow-none hover:bg-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <div className="text-sm font-medium">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextMonth}
          className="h-7 w-7 bg-transparent border-0 shadow-none hover:bg-gray-100"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div
            key={day}
            className="h-8 w-8 flex items-center justify-center text-xs font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty cells for days before the first day of month */}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="h-8 w-8" />
        ))}

        {/* Days of the month */}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const selectedDay = isSelected(day);
          const today = isToday(day);
          const disabledDay = isDisabled(day);

          return (
            <Button
              key={day}
              variant="ghost"
              size="icon"
              disabled={disabledDay}
              onClick={() => handleDateSelect(day)}
              className={cn(
                "h-8 w-8 p-0 font-normal text-xs rounded-md",
                selectedDay && "bg-blue-600 text-white hover:bg-blue-700 hover:text-white",
                today && !selectedDay && "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100",
                disabledDay && "text-gray-400 opacity-50 cursor-not-allowed",
                !selectedDay && !today && !disabledDay && "hover:bg-gray-100"
              )}
            >
              {day}
            </Button>
          );
        })}
      </div>
    </div>
  );
}