"use client";;
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { forwardRef } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

export const DatePicker = forwardRef(function DatePickerCmp({ date, setDate }, ref) {
  return (
    (<Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" ref={ref}>
        <CalendarIcon mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>)
  );
});
