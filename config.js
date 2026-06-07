/* ══════════════════════════════════════════════════
   ✏️  CONFIG.JS — Edit everything here to personalize
   ══════════════════════════════════════════════════ */

const CONFIG = {

  /* 🔑 Password */
  password: "iloveyou",

  /* 💌 Welcome letter */
  letter: {
    recipient: "my love",
    name: "You",
    date: "June 2026",
    text: `I've been thinking about how to say this for a long time. There are moments in life when words feel too small, when everything you want to express sits quietly in your chest, waiting. This is one of those moments — and yet here I am, trying anyway, because you deserve every attempt.\n\nI built this little place for you. Not because I had to. Not because it was easy. But because you are the kind of person who deserves to be reminded, in the most beautiful way I know how, that you matter. That the memories we've shared matter. That you are seen, remembered, and loved.\n\nScroll through. Take your time. Relive the moments. Read the letters. Look at the photos. This is all yours — a small collection of everything that makes our story worth telling.\n\nThank you for being exactly who you are.`
  },

  /* 🎵 Music — replace src with a real MP3 link */
  music: [
    { title: "Memory Lane",  artist: "♪ Add your song here",          src: "" },
    { title: "Our Waltz",    artist: "♪ Replace with real audio URL", src: "" }
  ]
};

/* ─── 📷 PHOTOS ───────────────────────────────────────
   Replace emoji + bg with a real image URL in 'src'.
   Leave src empty to keep the gradient placeholder.     */
const photos = [
  {
    emoji: "🌅",
    bg: "linear-gradient(135deg,#f9eef1,#fde4b8)",
    src: "",
    caption: "The morning everything changed",
    date: "March 2023",
    location: "Somewhere beautiful",
    desc: "I remember how the light fell that day. How ordinary it seemed, and how extraordinary it turned out to be."
  },
  {
    emoji: "🌊",
    bg: "linear-gradient(135deg,#d4e8f5,#b8d9f0)",
    src: "",
    caption: "That day at the water",
    date: "July 2023",
    location: "By the sea",
    desc: "The waves were cold and we laughed anyway. That's the thing about you — you make everything an adventure.",
    tall: true
  },
  {
    emoji: "🌿",
    bg: "linear-gradient(135deg,#d4f0d4,#b8e4b8)",
    src: "",
    caption: "A quiet afternoon",
    date: "September 2023",
    location: "The park",
    desc: "Nothing happened. Everything happened. You were there."
  },
  {
    emoji: "☕",
    bg: "linear-gradient(135deg,#f0e4d4,#e4d0b8)",
    src: "",
    caption: "Our usual table",
    date: "November 2023",
    location: "The coffee shop",
    desc: "We always got the same thing. I never got tired of it.",
    tall: true
  },
  {
    emoji: "✨",
    bg: "linear-gradient(135deg,#f5e4f0,#e8d0f5)",
    src: "",
    caption: "New Year's night",
    date: "January 2024",
    location: "Together",
    desc: "The sky lit up and all I could think was: I'm glad I'm here with you."
  },
  {
    emoji: "🌸",
    bg: "linear-gradient(135deg,#f9d4e0,#f5e0ec)",
    src: "",
    caption: "Spring again",
    date: "April 2024",
    location: "Under the cherry trees",
    desc: "Every year the blossoms come back. Every year I think of you."
  }
];

/* ─── 📅 TIMELINE ───────────────────────────────────── */
const timeline = [
  {
    date: "The very beginning",
    title: "When We First Met",
    emoji: "✨",
    text: "I don't think either of us knew what was starting. The kind of beginning that only makes sense looking backward."
  },
  {
    date: "A few weeks later",
    title: "The First Real Conversation",
    emoji: "💬",
    text: "We talked for hours. I forgot to check the time. That's when I knew something was different."
  },
  {
    date: "Summer",
    title: "Our First Adventure Together",
    emoji: "🌊",
    text: "We went somewhere neither of us had been. It felt like we'd always done this — explored things together."
  },
  {
    date: "Autumn",
    title: "The Moment I Was Sure",
    emoji: "🍂",
    text: "I can't explain exactly what happened. Just a quiet moment. And I knew."
  },
  {
    date: "Winter",
    title: "We Made It Through",
    emoji: "❄️",
    text: "Not everything was easy. But we stayed. And that mattered more than I can say."
  },
  {
    date: "This Year",
    title: "Everything We've Become",
    emoji: "🌱",
    text: "Look at how far we've come. Look at who we are now. I'm proud of us."
  }
];

/* ─── ✉️ LETTERS ─────────────────────────────────────── */
const letters = [
  {
    label: "The First Letter",
    occasion: "In the early days",
    seal: "💌",
    salutation: "Dear you,",
    body: `I wrote this when everything was still new and uncertain. When I wasn't sure if what I felt was real or just the kind of hope you carry before it's been tested.\n\nIt was real. It kept being real. And I'm so glad.\n\nI don't know what the future looks like. But I know I want you in it. That feels like enough to start with.`,
    closing: "With uncertain but certain love"
  },
  {
    label: "The Hard Days Letter",
    occasion: "When things were difficult",
    seal: "🕯️",
    salutation: "My dear,",
    body: `Some days I didn't know what to say. So I said nothing. And I hope my silence wasn't absence — I hope it felt like sitting with you, not leaving.\n\nYou carried things I didn't always know about. You were stronger than you needed to be. I wish I had said this more often: I see how hard you try. I see it, and I'm in awe of you.`,
    closing: "Your constant companion"
  },
  {
    label: "The Gratitude Letter",
    occasion: "Everything you've given me",
    seal: "🌹",
    salutation: "To you, my favorite person,",
    body: `Thank you for laughing at things that weren't quite funny. Thank you for texting back. Thank you for remembering the small things I mentioned once and never expected you to hold.\n\nThank you for being patient when I wasn't my best self. Thank you for choosing, again and again, to stay in the room.\n\nMost of all — thank you for being real. Perfectly, imperfectly, beautifully real.`,
    closing: "Grateful beyond words"
  },
  {
    label: "The Future Letter",
    occasion: "Written for someday",
    seal: "🌟",
    salutation: "Hello, future us,",
    body: `I'm writing this before I know how things turn out. Before I know which versions of ourselves we'll become.\n\nBut I already love whoever you are by the time you read this. I already trust that you've been through things and come out with more grace than before.\n\nKeep going. Keep choosing each other. Keep laughing at the ordinary things. That's where the real life is.`,
    closing: "From who we used to be"
  }
];

/* ─── 📝 STICKY NOTES ───────────────────────────────── */
const stickies = [
  { text: "The way you laugh when something genuinely surprises you. I could collect that sound.",                                                                            color: "#fef3e2", rotate: "-1.5deg" },
  { text: "You make everywhere feel like somewhere I want to be.",                                                                                                            color: "#fce4ec", rotate: "1.2deg"  },
  { text: "That thing you do where you quote a movie and then immediately explain it as if I didn't get it. I always get it. I love that you explain it anyway.",             color: "#e8f5e9", rotate: "-0.8deg" },
  { text: "You're the person I want to tell things to first.",                                                                                                               color: "#e3f2fd", rotate: "1.8deg"  },
  { text: "Remember the time we got completely lost and somehow ended up somewhere better? That was very us.",                                                                color: "#f3e5f5", rotate: "-1.2deg" },
  { text: "You've never once made me feel like too much. That's rarer than you know.",                                                                                       color: "#fff8e1", rotate: "0.6deg"  }
];

/* ─── 🎬 VIDEOS ──────────────────────────────────────── */
const videos = [
  { emoji: "🌅", title: "Golden Hour Together",    desc: "That late afternoon when the light was perfect and everything felt still." },
  { emoji: "🎵", title: "Dancing in the Kitchen",  desc: "Silly, unplanned, exactly right. This is what happy looks like."          },
  { emoji: "🌊", title: "At the Water's Edge",     desc: "The wind was loud but somehow we could still hear each other perfectly."  }
];