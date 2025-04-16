"use client";
import { useState } from "react";
import { Clock, Globe, Video, ChevronLeft, Home } from "lucide-react";
import Link from "next/link";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(16);
  const [selectedTime, setSelectedTime] = useState("8:30pm");

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    // First row
    for (let i = 1; i <= 5; i++) {
      days.push(
        <button
          key={i}
          className={`p-4 rounded-lg text-center ${
            i === selectedDate
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setSelectedDate(i)}
        >
          {i}
          {i === selectedDate && (
            <div className="w-1 h-1 bg-black rounded-full mx-auto mt-1" />
          )}
        </button>
      );
    }

    // Second row
    for (let i = 6; i <= 12; i++) {
      days.push(
        <button
          key={i}
          className={`p-4 rounded-lg text-center ${
            i === selectedDate
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setSelectedDate(i)}
        >
          {i}
          {i === selectedDate && (
            <div className="w-1 h-1 bg-black rounded-full mx-auto mt-1" />
          )}
        </button>
      );
    }

    // Third row
    for (let i = 13; i <= 19; i++) {
      days.push(
        <button
          key={i}
          className={`p-4 rounded-lg text-center ${
            i === selectedDate
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setSelectedDate(i)}
        >
          {i}
          {i === selectedDate && (
            <div className="w-1 h-1 bg-black rounded-full mx-auto mt-1" />
          )}
        </button>
      );
    }

    // Fourth row
    for (let i = 20; i <= 26; i++) {
      days.push(
        <button
          key={i}
          className={`p-4 rounded-lg text-center ${
            i === selectedDate
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setSelectedDate(i)}
        >
          {i}
          {i === selectedDate && (
            <div className="w-1 h-1 bg-black rounded-full mx-auto mt-1" />
          )}
        </button>
      );
    }

    // Fifth row
    for (let i = 27; i <= 30; i++) {
      days.push(
        <button
          key={i}
          className={`p-4 rounded-lg text-center ${
            i === selectedDate
              ? "bg-green-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setSelectedDate(i)}
        >
          {i}
          {i === selectedDate && (
            <div className="w-1 h-1 bg-black rounded-full mx-auto mt-1" />
          )}
        </button>
      );
    }

    return days;
  };

  const timeSlots = ["8:30pm", "9:00pm", "9:30pm", "11:00pm", "11:30pm"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back to Home Button */}
      <div className=" sticky top-4 left-4">
        <Link href="/">
          <button className="cursor-pointer flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="pt-20 pb-10 text-center">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">
          READY TO TAKE A LEAP?
        </h1>
        <p className="text-xl text-gray-400 mb-2">
          Let's grow together! Share your business plan, and we'll bring it to
          life.
        </p>
        <p className="text-xl mb-8">
          <span className="text-green-500 font-medium">
            200+ Success Stories
          </span>
          <span className="text-gray-400"> and counting!</span>
        </p>
      </div>

      {/* Booking Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg overflow-hidden text-black">
        <div className="flex flex-col md:flex-row">
          {/* Left Panel */}
          <div className="md:w-1/3 p-8 border-r border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                <span className="text-white text-xs">SR</span>
              </div>
              <div>
                <p className="text-gray-500">Saymon/Redwan @rednsay</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-2">
              Get your free design & development strategy, book a call now!
            </h2>
            <p className="text-gray-600 mb-4">
              Let's talk about your vision and bring it to life with "CODE".
            </p>

            <div className="flex items-center text-gray-600 mb-2">
              <Clock className="w-5 h-5 mr-2" />
              <span>30m</span>
            </div>

            <div className="flex items-center text-gray-600 mb-2">
              <Video className="w-5 h-5 mr-2" />
              <span>Google Meet</span>
            </div>

            <div className="flex items-center text-gray-600">
              <Globe className="w-5 h-5 mr-2" />
              <span>Asia/Karachi</span>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="md:w-2/3 p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <h3 className="text-xl font-medium">April 2025</h3>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 rounded-lg bg-gray-100">
                  <span className="sr-only">Previous month</span>
                  <span className="text-gray-500">&#8249;</span>
                </button>
                <button className="p-2 rounded-lg bg-gray-100">
                  <span className="sr-only">Next month</span>
                  <span className="text-gray-500">&#8250;</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2 text-center">
              <div className="p-2 text-gray-500">SUN</div>
              <div className="p-2 text-gray-500">MON</div>
              <div className="p-2 text-gray-500">TUE</div>
              <div className="p-2 text-gray-500">WED</div>
              <div className="p-2 text-gray-500">THU</div>
              <div className="p-2 text-gray-500">FRI</div>
              <div className="p-2 text-gray-500">SAT</div>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays()}
            </div>
          </div>

          {/* Time selection */}
          <div className="md:w-1/4 p-4 border-l border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-medium">Wed 16</h3>
              </div>
              <div className="flex space-x-2">
                <button className="px-2 py-1 rounded-lg bg-gray-200 text-sm">
                  12h
                </button>
                <button className="px-2 py-1 rounded-lg bg-gray-200 text-sm">
                  24h
                </button>
              </div>
            </div>

            <div className="space-y-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`w-full py-3 px-4 text-center rounded-lg border ${
                    selectedTime === time
                      ? "border-green-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
