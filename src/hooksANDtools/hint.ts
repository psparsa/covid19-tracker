import React from "react";

const hintList = [
  {
    en: "wash your damn hands",
    de: "Wasche deine verdammten Hände",
    fa: "دستهای لعنتیت رو بشور",
  },
  {
    en: "Wear a mask. Save lives.",
    de: "Eine Maske tragen. Leben retten.",
    fa: "ی ماسک بپوش. زندگی هارو نجات بده.",
  },
  {
    en: "Keep a safe distance",
    de: "Halten Sie einen Sicherheitsabstand ein",
    fa: "فاصله ایمن رو رعایت کنید",
  },
  {
    en: "do not touch your eyes, nose or mouth if your hands are not clean",
    de:
      "Berühren Sie nicht Ihre Augen, Nase oder Mund, wenn Ihre Hände nicht sauber sind",
    fa: "اگر دستاتون تمیز نیست، به چشم، بینی یا دهنتون دست نزنید",
  },
  {
    en: "wash your hands as soon as you get home",
    de: "Waschen Sie Ihre Hände, sobald Sie nach Hause kommen",
    fa: "دستاتون رو به محض اینکه رسیدید خونه بشورید",
  },
];

function useHint(lang: "en" | "de" | "fa") {
  const [state, setState] = React.useState<string | null>(null);

  React.useEffect(() => {
    setState(hintList[Math.floor(Math.random() * hintList.length)][lang]);
  }, [lang]);

  return { wait: !state, randomHint: state };
}

export default useHint;
