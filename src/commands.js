import {
  whaleAscii,
  whaleSmall,
  sharkAscii,
  dolphinAscii,
  waveAscii,
  whaleCallPattern,
  bookCover,
  versaceLogo,
  pixelWhale,
  pixelShark,
  sonarAscii,
  dataStream,
  researchStation
} from './ascii-art';

export const commandRegistry = {
  help: {
    description: 'Display available commands',
    usage: 'help [command]',
    execute: (args) => {
      if (args.length > 0) {
        const cmd = commandRegistry[args[0]];
        if (cmd) {
          return `${args[0]}: ${cmd.description}\nUsage: ${cmd.usage}`;
        }
        return `Unknown command: ${args[0]}`;
      }
      
      return `
╔═══════════════════════════════════════════════════════════════╗
║                     AVAILABLE COMMANDS                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  help [command]    - Show this help or help for a command    ║
║  about             - Learn about Deep Blue                    ║
║  whale             - Display whale ASCII art                  ║
║  shark             - Display shark ASCII art                  ║
║  ocean             - Display ocean scene                      ║
║  listen            - Listen to whale communications           ║
║  signal            - Analyze whale signal patterns            ║
║  research          - View research station data               ║
║  book              - Information about the book               ║
║  author            - About Kristy McCaffrey                   ║
║  versace           - About this experience                    ║
║  animate           - Show animated sea creatures              ║
║  sonar             - Run sonar scan                           ║
║  data              - View data stream                         ║
║  clear             - Clear the terminal                       ║
║  credits           - Show credits                             ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝

Type any command to explore the depths of whale communication!
`;
    }
  },

  about: {
    description: 'Learn about Deep Blue',
    usage: 'about',
    execute: () => {
      return `
${versaceLogo}

DEEP BLUE - A Journey Into Whale Communication

In the vast expanse of the ocean, beneath waves that have witnessed
millennia, whales speak in a language we are only beginning to 
understand. Through clicks, whistles, and tones that travel across
hundreds of miles, these magnificent creatures communicate in ways
that challenge our understanding of intelligence itself.

This console serves as a gateway to explore the groundbreaking
research of marine biologist Dr. Isla Sutton, whose work reveals
the intricate patterns and meanings hidden within whale songs.

Based on the novel "Deep Blue" by Kristy McCaffrey, this experience
invites you to dive deep into the mysteries of marine communication.

Type "book" to learn more about the novel.
Type "listen" to experience whale communications.
Type "research" to view research data.
`;
    }
  },

  whale: {
    description: 'Display whale ASCII art',
    usage: 'whale',
    execute: () => {
      return whaleAscii + '\n' + waveAscii + '\n\nThe humpback whale - master communicator of the deep.';
    }
  },

  shark: {
    description: 'Display shark ASCII art',
    usage: 'shark',
    execute: () => {
      return sharkAscii + '\n\n' + waveAscii + '\n\nSilent hunter of the ocean depths.';
    }
  },

  ocean: {
    description: 'Display ocean scene',
    usage: 'ocean',
    execute: () => {
      return `
${whaleSmall}

${dolphinAscii}

${waveAscii}

The ocean - covering 71% of Earth's surface, home to countless wonders.
`;
    }
  },

  listen: {
    description: 'Listen to whale communications',
    usage: 'listen',
    execute: () => {
      return `
Initializing hydrophone array...
Connecting to deep ocean sensors...

${sonarAscii}

WHALE COMMUNICATION DETECTED:

● CLICK CLICK CLICK ... (echolocation)
  [High frequency clicks used for navigation and hunting]

♪ WoooOOOooo... WoooOOOooo... (song)
  [Complex melodic patterns, possibly social communication]

◆ PULSE... PULSE... PULSE... (coded pulse)
  [Rhythmic patterns, meaning unknown]

${whaleCallPattern}

ANALYSIS:
- Frequency Range: 20 Hz to 40 kHz
- Distance: Approximately 15 km
- Species: Likely Humpback Whale (Megaptera novaeangliae)
- Behavior: Social communication, possibly mating call

The whales are singing their ancient songs...
Each pattern tells a story written in sound.

Type "signal" to see detailed signal analysis.
`;
    }
  },

  signal: {
    description: 'Analyze whale signal patterns',
    usage: 'signal',
    execute: () => {
      return `
WHALE SIGNAL PATTERN ANALYSIS
═══════════════════════════════════════════════════════════

DETECTED PATTERNS:

Pattern A: ●●● ─── ●●●  (SOS-like structure)
  Repetition: Every 12 seconds
  Interpretation: Possible distress or location marker

Pattern B: ●─●─●─●─●─●  (Morse-like clicks)
  Frequency: 2-8 kHz
  Interpretation: Echolocation or environmental mapping

Pattern C: ～～～ ∿∿∿ ～～～ (Wave modulation)
  Frequency: 20-50 Hz
  Interpretation: Long-distance communication

${whaleCallPattern}

RESEARCH NOTES:
Dr. Isla Sutton's groundbreaking work has identified over 
50 distinct "words" in whale communication. Each pod develops
unique dialects, passed down through generations.

The clicks you hear are not random - they form a complex
language that rivals human communication in sophistication.

Recent discoveries suggest whales may even have names for
each other, using unique signature whistles.

Type "research" for more detailed findings.
`;
    }
  },

  research: {
    description: 'View research station data',
    usage: 'research',
    execute: () => {
      return `
${researchStation}

DEEP BLUE MARINE RESEARCH STATION
Status: OPERATIONAL
Location: Pacific Ocean, Coordinates: CLASSIFIED

═══════════════════════════════════════════════════════════

RECENT OBSERVATIONS:
─────────────────────────────────────────────────────────

[2024-12-20] Pod of 12 humpback whales observed
             Complex song patterns detected lasting 4+ hours
             Dr. Sutton notes: "Unprecedented complexity"

[2024-12-18] Whale calf learning songs from mother
             Remarkable mimicry observed
             Evidence of cultural transmission

[2024-12-15] Cross-species communication detected
             Whales and dolphins interacting vocally
             Possible inter-species understanding?

[2024-12-10] New click pattern identified
             Pattern designated as "Sequence Alpha-7"
             May indicate abstract thinking

═══════════════════════════════════════════════════════════

RESEARCH HYPOTHESIS:
Whale communication may be more sophisticated than 
previously understood. Evidence suggests:
  • Syntax and grammar structures
  • Cultural dialects
  • Individual identification
  • Abstract concept communication
  • Emotional expression

The ocean holds secrets we are only beginning to decode...

Type "book" to learn about Dr. Sutton's journey.
`;
    }
  },

  book: {
    description: 'Information about the Deep Blue book',
    usage: 'book',
    execute: () => {
      return `
${bookCover}

ABOUT THE NOVEL
═══════════════════════════════════════════════════════════

Title: Deep Blue
Author: Kristy McCaffrey
Genre: Romantic Suspense / Marine Adventure

SYNOPSIS:

Marine biologist Dr. Isla Sutton has dedicated her life to 
understanding whale communication. When she discovers a unique
pattern in humpback whale songs that could revolutionize our
understanding of marine intelligence, she finds herself drawn
into a dangerous world of corporate espionage and scientific
rivalry.

As she races to protect her research and the whales she studies,
Isla must trust Jake Reed, a former Navy SEAL turned ocean
conservationist with secrets of his own. Together, they navigate
treacherous waters—both literal and metaphorical—in a quest to
preserve one of nature's greatest mysteries.

THEMES:
  • Marine conservation
  • Scientific discovery
  • Romance and trust
  • Environmental protection
  • The intelligence of cetaceans

═══════════════════════════════════════════════════════════

WHERE TO GET THE BOOK:

🔗 Amazon: https://www.amazon.com/dp/[BOOK-ID]
🔗 Author's Website: https://kristymccaffrey.com
🔗 Goodreads: https://www.goodreads.com/book/show/[BOOK-ID]

Follow the author:
  Twitter: @KristyMcCaffrey
  Instagram: @kristymccaffreyauthor

Type "author" to learn more about Kristy McCaffrey.
`;
    }
  },

  author: {
    description: 'About Kristy McCaffrey',
    usage: 'author',
    execute: () => {
      return `
╔═══════════════════════════════════════════════════════════╗
║                   KRISTY MCCAFFREY                        ║
╚═══════════════════════════════════════════════════════════╝

Kristy McCaffrey is an award-winning author who writes about
the beauty and mystery of the natural world, weaving romance
and adventure into stories that celebrate the connection between
humans and nature.

ABOUT THE AUTHOR:

With a background in wildlife biology and a passion for marine
conservation, Kristy brings authenticity and depth to her writing.
Her research for Deep Blue included time spent with marine
biologists studying humpback whale communication in the Pacific.

"I've always been fascinated by the intelligence of whales,"
Kristy says. "The more we learn about them, the more we realize
how little we truly understand. Deep Blue is my love letter to
these magnificent creatures."

OTHER WORKS:
  • Wings of the Wild series
  • Into the Deep (Ocean Conservation thriller)
  • Beneath the Surface (Marine mystery)

═══════════════════════════════════════════════════════════

CONNECT WITH KRISTY:

🌐 Website: https://kristymccaffrey.com
✉️  Newsletter: Sign up for updates and exclusive content
📱 Social Media: @KristyMcCaffrey

Type "book" to return to book information.
`;
    }
  },

  versace: {
    description: 'About this Versace experience',
    usage: 'versace',
    execute: () => {
      return `
${versaceLogo}

VERSACE PRESENTS: DEEP BLUE
An Interactive Console Experience

═══════════════════════════════════════════════════════════

This unique digital experience combines the luxury aesthetic
of Versace with cutting-edge interactive storytelling to bring
you into the world of Deep Blue.

Inspired by classic sci-fi terminals and NASA mission control
interfaces, this console-style website offers an immersive
journey into marine biology and whale communication research.

DESIGN PHILOSOPHY:
  • Minimalist black & white aesthetic
  • Retro terminal interface
  • Interactive command-line experience
  • ASCII art and pixel animations
  • Educational and entertaining

EXPERIENCE FEATURES:
  ✓ Interactive command system
  ✓ Whale communication simulations
  ✓ ASCII art animations
  ✓ Research data visualization
  ✓ Book information and author details

═══════════════════════════════════════════════════════════

Versace: Where luxury meets innovation.

Type "help" to explore more commands.
`;
    }
  },

  animate: {
    description: 'Show animated sea creatures',
    usage: 'animate',
    execute: () => {
      return `
PIXEL ART ANIMATION SEQUENCE
═══════════════════════════════════════════════════════════

WHALE:
${pixelWhale.join('\n')}

${waveAscii}

SHARK:
${pixelShark.join('\n')}

${waveAscii}

Animation complete. Marine life detected in digital waters.
`;
    }
  },

  sonar: {
    description: 'Run sonar scan',
    usage: 'sonar',
    execute: () => {
      return `
INITIATING SONAR SCAN...

${sonarAscii}

SCANNING... ████████████████████ 100%

RESULTS:
═══════════════════════════════════════════════════════════
  Range: 0-5km     → 3 whales detected
  Range: 5-10km    → 7 dolphins detected
  Range: 10-15km   → 2 whale pods detected
  Range: 15-20km   → 1 large creature (possibly blue whale)
═══════════════════════════════════════════════════════════

OCEAN DEPTH: 2,847 meters
WATER TEMP: 14°C
SALINITY: 35 PSU

Active marine life signatures detected throughout scan range.
Whales are communicating at multiple frequencies.

Type "listen" to hear whale communications.
`;
    }
  },

  data: {
    description: 'View data stream',
    usage: 'data',
    execute: () => {
      return `
STREAMING RESEARCH DATA...

${dataStream}

WHALE VOCALIZATION DATA STREAM:
─────────────────────────────────────────────────────────
TIME     | FREQUENCY | PATTERN    | WHALE_ID
─────────────────────────────────────────────────────────
08:15:03 | 2.4 kHz   | ●●● ─── ● | WHALE_042
08:15:08 | 0.8 kHz   | ～～～～～  | WHALE_042
08:15:15 | 3.2 kHz   | ●─●─●─●   | WHALE_019
08:15:22 | 1.5 kHz   | ∿∿∿∿∿∿    | WHALE_042
08:15:30 | 2.1 kHz   | ●●● ●●●   | WHALE_019
─────────────────────────────────────────────────────────

PATTERN RECOGNITION: 87% match to known song structure
BEHAVIOR: Social communication, pod coordination
CONFIDENCE: High

Data stream active. Monitoring continues...
`;
    }
  },

  clear: {
    description: 'Clear the terminal screen',
    usage: 'clear',
    execute: () => {
      // This is a special command that will be handled differently
      return 'CLEAR_SCREEN';
    }
  },

  credits: {
    description: 'Show credits',
    usage: 'credits',
    execute: () => {
      return `
╔═══════════════════════════════════════════════════════════╗
║                        CREDITS                            ║
╚═══════════════════════════════════════════════════════════╝

DEEP BLUE - Interactive Console Experience

Book: Deep Blue
Author: Kristy McCaffrey

Presented by: VERSACE

Design: Sci-Fi Console Interface
Inspiration: NASA Mission Control, Retro Terminals
Technology: React, Modern Web Standards

Special Thanks:
  • Marine biologists worldwide studying whale communication
  • Ocean conservation organizations
  • Readers who support environmental literature

═══════════════════════════════════════════════════════════

"In the depths of the ocean, whales speak a language
 older than humanity. Listen closely, and you might
 hear the wisdom of the ages."
 
                                    - Deep Blue

═══════════════════════════════════════════════════════════

Type "help" to continue exploring.

© 2024 All Rights Reserved
`;
    }
  }
};

// Add easter egg commands
commandRegistry['hello'] = {
  description: 'Say hello',
  usage: 'hello',
  execute: () => '●●● ─── ●●● (The whales say hello back!)'
};

commandRegistry['whoami'] = {
  description: 'Who am I?',
  usage: 'whoami',
  execute: () => 'You are visitor@deepblue - An explorer of ocean mysteries.'
};

commandRegistry['exit'] = {
  description: 'Exit (just kidding, you can\'t leave the ocean)',
  usage: 'exit',
  execute: () => 'You cannot leave the ocean... The whales need you. Type "help" to continue.'
};
