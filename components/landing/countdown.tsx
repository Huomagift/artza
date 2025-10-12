"use client";

import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string; // e.g. "2025-12-14T00:00:00"
}

const EventCountdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const countDownDate = new Date(targetDate).getTime();
      const distance = countDownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setIsExpired(true);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (isExpired) {
    return (
      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
          🎉 The event has started!
        </h2>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
          Countdown to Event
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold">{timeLeft.days}</span>
            <span className="text-sm uppercase text-gray-500 mt-1">Days</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold">{timeLeft.hours}</span>
            <span className="text-sm uppercase text-gray-500 mt-1">Hours</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold">{timeLeft.minutes}</span>
            <span className="text-sm uppercase text-gray-500 mt-1">Minutes</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl font-extrabold">{timeLeft.seconds}</span>
            <span className="text-sm uppercase text-gray-500 mt-1">Seconds</span>
          </div>
        </div>

        <p className="mt-8 text-gray-600 text-sm md:text-base">
          Join us on <span className="font-semibold">December 14, 2025</span> for the Signature Art Series by Artza.
        </p>
      </div>
    </section>
  );
};

export default EventCountdown;
