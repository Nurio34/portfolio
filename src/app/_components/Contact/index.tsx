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
import { z } from "zod";

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
  icon: string;
};

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(3, "Come on, you have a real name, right? At least 3 letters, please!")
    .max(50, "Whoa there, keep it under 50 characters, Shakespeare!"),
  email: z
    .string()
    .email(
      "Are you sure that's an email? Because it looks like a WiFi password."
    ),
  company: z
    .string()
    .min(2, "A company with just one letter? Try at least two.")
    .max(
      100,
      "Is your company name an entire novel? Keep it under 100 characters!"
    ),
  message: z
    .string()
    .min(
      10,
      "Your message is so short, even a fortune cookie says more! (Min: 10 characters)"
    )
    .max(
      500,
      "Whoa! Trying to write an autobiography? Keep it under 500 characters."
    ),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;

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
      icon: "🕵️‍♂️",
    },
    {
      type: "email",
      placeholder: "Your Email",
      name: "email",
      element: "input",
      speacial: false,
      icon: "📧",
    },
    {
      type: "text",
      placeholder: "Company name where my skills will shine",
      name: "company",
      element: "input",
      speacial: false,
      icon: " 🏢",
    },
    {
      type: "text",
      placeholder: "Your Message",
      name: "message",
      element: "textarea",
      speacial: false,
      icon: " 🗣️",
    },
    {
      type: "text",
      placeholder: "Password Please !",
      name: "password",
      element: "input",
      speacial: true,
      icon: " 🔐",
    },
  ];

  const FormRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const sendMail = async () => {
    try {
      setIsLoading(true);
      setIsSubmitted(false);

      if (FormRef.current) {
        const formData = new FormData(FormRef.current);
        const name = formData.get("name");
        const email = formData.get("email");
        const company = formData.get("company");
        const message = formData.get("message");

        const validationResult = ContactFormSchema.safeParse({
          name,
          email,
          company,
          message,
        });

        if (!validationResult.success) {
          // Extract error messages
          const newErrors: Record<string, string | undefined> = {};
          validationResult.error.errors.forEach((err) => {
            if (err.path) {
              newErrors[err.path[0]] = err.message;
            }
          });
          setErrors(newErrors);
          setIsLoading(false);

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
            setIsSubmitted(true);
            setErrors({});
            toast.custom((t: ToastObject) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } w-96 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 pt-0.5">
                      <Image
                        src="/hero/avatar/avatar.webp"
                        width={40}
                        height={40}
                        alt="avatar"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="ml-3 flex-1 flex items-center">
                      <p className="text-sm font-medium text-gray-900">
                        Beep beep! I&apos;m on my way! ☁️
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
    <section
      id="Contact"
      className="Cutout_Section relative w-full h-screen grid place-content-center justify-items-center px-[2vw] overflow-hidden"
      style={
        {
          "--x1": "-10%",
          "--y1": "-5%",
          "--bg1": "url('/background-1.webp')",
          "--mask1": "url('/mask-images/3.webp')",
          "--size1": "50% 80%",
          "--x2": "110%",
          "--y2": "110%",
          "--bg2": "url('/background-1.webp')",
          "--mask2": "url('/mask-images/1.webp')",
          "--size2": "60% 60%",
        } as React.CSSProperties
      }
    >
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let&apos;s Build Something Great Together
      </motion.h2>
      <motion.p
        className="Contrast md:text-lg text-center mb-6 max-w-xl"
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
        className=" md:w-[80%] bg-base-content py-[2vh] px-[0.5vw] rounded-xl shadow-lg space-y-[1vh]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={(e) => {
          e.preventDefault();
          if (isLoading) return;
          sendMail();
        }}
      >
        <h2 className="relative max-w-96 justify-self-center text-3xl font-bold text-center text-base-300 overflow-hidden">
          Hire Me Before Someone Else Does! 🚀💼
          <motion.div
            className="absolute top-0 w-full h-full bg-base-content"
            initial={{
              rotateZ: -45,
              opacity: 0.9,
              filter: "blur(20px) brightness(100)",
            }}
            animate={{
              x: [
                "-100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
                "100%",
              ],
              transition: { duration: 8, delay: 3, repeat: Infinity },
            }}
          ></motion.div>
        </h2>
        {formControls.map((control) => {
          if (control.speacial) {
            return <FakePasswordInput key={control.name} control={control} />;
          } else if (control.element === "input") {
            return (
              <InputControl
                key={control.name}
                control={control}
                isSubmitted={isSubmitted}
                error={errors[control.name]}
              />
            );
          } else if (control.element === "textarea") {
            return (
              <TextAreaControl
                key={control.name}
                control={control}
                isSubmitted={isSubmitted}
                error={errors[control.name]}
              />
            );
          }
        })}

        <SubmitButton isLoading={isLoading} />
      </motion.form>

      {/* Direct Contact Links */}
      <ul className="flex gap-x-[4vw] md:gap-x-[2vw] items-center py-[2vh]">
        {links.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ x: "-25%", opacity: 0 }}
            whileInView={{
              x: "0%",
              opacity: 1,
              transition: { duration: 0.6, delay: 1 + 0.3 * index },
            }}
          >
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
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
