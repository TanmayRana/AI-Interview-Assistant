/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { InterviewTypes } from "@/services/Constants";

type InterviewType = string;

const FormContainer = ({ onHandleInputChange, GoToNext }: any) => {
  const [interviewType, setInterviewType] = useState<InterviewType[]>([]);

  const handleInterviewTypeSelect = (title: string) => {
    const isSelected = interviewType.includes(title);

    const updatedTypes = isSelected
      ? interviewType.filter((type) => type !== title)
      : [...interviewType, title];

    setInterviewType(updatedTypes);
    onHandleInputChange("type", updatedTypes);
  };

  return (
    <div className="p-5 bg-white shadow border rounded-md">
      {/* Job Position */}
      <div>
        <h2 className="text-sm font-medium">Job Position</h2>
        <Input
          placeholder="e.g. Full Stack Developer"
          className="mt-2"
          onChange={(e) => onHandleInputChange("jobPosition", e.target.value)}
        />
      </div>

      {/* Job Description */}
      <div className="mt-5">
        <h2 className="text-sm font-medium">Job Description</h2>
        <Textarea
          placeholder="Enter detailed job description"
          className="mt-2 h-[200px]"
          onChange={(e) =>
            onHandleInputChange("jobDescription", e.target.value)
          }
        />
      </div>

      {/* Interview Duration */}
      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview Duration</h2>
        <Select
          onValueChange={(value) => onHandleInputChange("duration", value)}
        >
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5 Min">5 Min</SelectItem>
            <SelectItem value="15 Min">15 Min</SelectItem>
            <SelectItem value="30 Min">30 Min</SelectItem>
            <SelectItem value="45 Min">45 Min</SelectItem>
            <SelectItem value="60 Min">60 Min</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Interview Type */}
      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview Type</h2>
        <div className="flex flex-wrap gap-3 mt-2">
          {InterviewTypes.map((item, index) => (
            <div
              key={index}
              className={`flex items-center cursor-pointer gap-2 px-2 border p-1 rounded-2xl hover:bg-secondary transition ${
                interviewType.includes(item.title)
                  ? "bg-blue-50 text-primary"
                  : "bg-white"
              }`}
              onClick={() => handleInterviewTypeSelect(item.title)}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-7 flex justify-end" onClick={() => GoToNext()}>
        <Button type="button">
          Generate Question <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FormContainer;
