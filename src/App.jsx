import { useState } from "react";
import { desktopImg, iconList, mobileImg } from "./assets/index";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

import { useForm } from "./hooks/form-hook";
import { VALIDATOR_EMAIL } from "./util/validators";
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formState, inputHandler, resetForm] = useForm({
    email: {
      value: "",
      isValid: false,
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formState.email.isValid) {
      console.log("Form submitted with data:", formState.email.value);
      resetForm();
      setShowModal(true);
      console.log(resetForm);
    } else {
      console.log("Please enter a valid email address.");
    }
  };

  return (
    <main className="flex flex-col md:flex-row md:min-h-screen justify-center items-center">
      <div className="bg-white flex flex-col md:flex-row-reverse md:w-auto md:h-full md:rounded-[2rem] md:p-5 items-center">
        <div className="container">
          <picture>
            <source srcSet={mobileImg} media="(max-width: 767px)" />
            <img src={desktopImg} alt="newsletter-img" className="w-full" />
          </picture>
        </div>
        <div className="px-5 md:px-12 container">
          <div className="pt-10 pb-5 gap-y-4 flex flex-col">
            <h1 className="font-roboto-b text-4xl md:text-6xl text-dark-slate-gray">
              Stay updated!
            </h1>
            <p className="text-charcoal">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
          </div>

          <ul className="flex flex-col gap-5 text-charcoal">
            <li className="flex items-center gap-3">
              <img src={iconList} alt="icon-list" />
              Product discovery and building what matters
            </li>
            <li className="flex items-center gap-3">
              <img src={iconList} alt="icon-list" />
              Measuring to ensure updates are a success
            </li>
            <li className="flex items-center gap-3">
              <img src={iconList} alt="icon-list" />
              And much more!
            </li>
          </ul>

          <form
            onSubmit={handleSubmit}
            className="subscribe flex flex-col gap-2 mt-5 mb-10"
          >
            <Input
              id="email"
              element="input"
              type="email"
              label="Email address"
              validators={[VALIDATOR_EMAIL()]}
              placeholder="email@company.com"
              errorText="Valid email required"
              onInput={inputHandler}
              value={formState.email.value}
            />
            <Button type="submit">Subscribe to monthly newsletter</Button>
          </form>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}

export default App;
