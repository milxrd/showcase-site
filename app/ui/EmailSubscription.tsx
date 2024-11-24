import React from "react";

const EmailSubscription: React.FC = () => {
  return (
    <section className="mt-64 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl text-center text-black mb-16 max-md:mb-10">
        Wpisz swój adres e-mail jeżeli interesuje Cię współpraca:
      </h2>
      <form className="flex shrink-0 max-w-full rounded-3xl bg-stone-300 h-[75px] w-[1228px]">
        <label htmlFor="email-input" className="sr-only">
          Adres e-mail
        </label>
        <input
          type="email"
          id="email-input"
          className="w-full h-full bg-transparent px-4"
          placeholder="Twój adres e-mail"
          aria-label="Wpisz swój adres e-mail"
        />
        <button type="submit" className="sr-only">
          Wyślij
        </button>
      </form>
    </section>
  );
};

export default EmailSubscription;
