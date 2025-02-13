'use client';

import React from "react";

const EmailSubscription: React.FC = () => {
  return (
    <section className="mt-64 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl text-center text-black mb-16 max-md:mb-10">
        Type here your e-mail address to work with us:
      </h2>
      <form className="flex shrink-0 max-w-full rounded-3xl bg-stone-300 h-[75px] w-[1228px] items-center justify-center mx-auto">
        <label htmlFor="email-input" className="sr-only">
          Address e-mail
        </label>
        <input
          type="email"
          id="email-input"
          className="w-full h-full bg-transparent px-4"
          placeholder="Your e-mail address"
          aria-label="Type your e-mail address"
        />
        <button type="submit" className="sr-only">
          Send
        </button>
      </form>
    </section>
  );
};

export default EmailSubscription;
