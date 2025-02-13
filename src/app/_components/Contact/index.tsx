"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SubmitButton from "./SubmitButton";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import FakePasswordInput from "./FakePasswordInput";
import InputControl from "./InputControl";
import TextAreaControl from "./TextAreaControl";

type ToastObject = {
  id: string;
  visible: boolean;
  dismiss: (id: string) => void;
};

export type ControlType = {
  type: string;
  placeholder: string;
  name: string;
  element: string;
  speacial: boolean;
};

emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
});
export default function ContactMe() {
  const links = [
    {
      name: "gmail",
      src: "/hero/social/gmail.webp",
      href: "mailto:nurisalihersoy@example.com",
    },
    {
      name: "linkedin",
      src: "/hero/social/linkedin.webp",
      href: "https://www.linkedin.com/in/nuri-salih-ersoy-12777627a/",
    },
    {
      name: "x",
      src: "/hero/social/x.webp",
      href: "https://x.com/NurioonSoftware",
    },
    {
      name: "insta",
      src: "/hero/social/insta.webp",
      href: "https://www.instagram.com/nurio3434/",
    },
  ];

  const formControls: ControlType[] = [
    {
      type: "text",
      placeholder: "Your Name",
      name: "name",
      element: "input",
      speacial: false,
    },
    {
      type: "email",
      placeholder: "Your Email",
      name: "email",
      element: "input",
      speacial: false,
    },
    {
      type: "text",
      placeholder: "Company name where my skills will shine",
      name: "company",
      element: "input",
      speacial: false,
    },
    {
      type: "text",
      placeholder: "Your Message",
      name: "message",
      element: "textarea",
      speacial: false,
    },
    {
      type: "text",
      placeholder: "Password Please !",
      name: "password",
      element: "input",
      speacial: true,
    },
  ];

  const FormRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendMail = async () => {
    try {
      setIsLoading(true);

      if (FormRef.current) {
        const formData = new FormData(FormRef.current);
        const name = formData.get("name");
        const email = formData.get("email");
        const company = formData.get("company");
        const message = formData.get("message");

        if (!name || !email || !company || !message) {
          toast.error("Something went wrong! Please try again ...");
          return;
        }

        const templateParams = {
          email,
          name,
          company,
          message,
        };

        const response = await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          templateParams
        );
        if (response.status === 200) {
          setTimeout(() => {
            FormRef.current?.reset();

            toast.custom((t: ToastObject) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } w-96 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 pt-0.5">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="/hero/avatar/avatar.webp"
                        alt=""
                      />
                    </div>
                    <div className="ml-3 flex-1 flex items-center">
                      <p className="text-sm font-medium text-gray-900">
                        Beep beep! I'm on my way! ☁️
                      </p>
                      <Image
                        src={"/contact/motorcycle.svg"}
                        width={30}
                        height={30}
                        alt="motocycle"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            ));
          }, 3000);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Error !");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center p-[2vw]">
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let&apos;s Build Something Great Together
      </motion.h2>
      <motion.p
        className="md:text-lg text-center mb-6 max-w-xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Whether you&apos;re looking for a passionate developer to join your team
        or collaborate on a project, feel free to reach out. I&apos;m always
        open to new opportunities and innovative ideas.
      </motion.p>
      <motion.form
        ref={FormRef}
        autoComplete="off"
        autoCorrect="off"
        className="min-w-96 bg-base-content py-[2vh] px-[2vw] rounded-xl shadow-lg space-y-[2vh]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={(e) => {
          e.preventDefault();
          if (isLoading) return;
          sendMail();
        }}
      >
        {formControls.map((control) => {
          if (control.speacial) {
            return <FakePasswordInput key={control.name} control={control} />;
          } else if (control.element === "input") {
            return <InputControl key={control.name} control={control} />;
          } else if (control.element === "textarea") {
            return <TextAreaControl key={control.name} control={control} />;
          }
        })}

        <SubmitButton isLoading={isLoading} />
      </motion.form>

      {/* Direct Contact Links */}
      <ul className="flex gap-x-[4vw] md:gap-x-[2vw] items-center py-[2vh]">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} target="_blank">
              <figure className="relative w-9 aspect-square rounded-md overflow-hidden transition-all hover:scale-110">
                <Image
                  src={link.src}
                  alt={link.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
