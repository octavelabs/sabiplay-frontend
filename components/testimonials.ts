export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  badge: string;
  badgeClass: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "“I won ₦15,000 in my first week on SabiPlay. The History questions were right up my alley — been topping the leaderboard ever since. This thing is addictive!”",
    name: "Adaeze Okonkwo",
    location: "Enugu · University of Nigeria, Nsukk...",
    badge: "Gold",
    badgeClass: "border-gold/40 bg-gold/[0.05] text-[#edb209]",
  },
  {
    quote:
      "“What I love most is the live battles. You match with someone in seconds and it's pure adrenaline. Lost my first 5 battles but now I'm on a 12-game win streak 😤”",
    name: "Segun Adewale",
    location: "Lagos · University of Lagos",
    badge: "Plantinium",
    badgeClass: "border-plum/30 bg-plum/15 text-plum",
  },
  {
    quote:
      "“SabiPlay actually made me study harder. Knowing that better general knowledge = real money? Best motivation I've ever had. My friends thought I was joking until I cashed out.”",
    name: "Fatima Aliyu",
    location: "Kano · Bayero University Kano",
    badge: "Silver",
    badgeClass: "border-stone/30 bg-stone/15 text-stone",
  },
];
