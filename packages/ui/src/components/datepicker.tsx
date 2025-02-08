"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@repo/ui/cn";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface DatePickerProps {
  value: string;
  onChange: (_value: string) => void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const currentDate = value ? new Date(value) : new Date();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          {value ? format(currentDate, "PPP") : <span>Pick a date</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={currentDate}
          onSelect={(date: Date) => {
            date && onChange(date.toISOString());
            setIsOpen(false);
          }}
          required
        />
      </PopoverContent>
    </Popover>
  );
}
