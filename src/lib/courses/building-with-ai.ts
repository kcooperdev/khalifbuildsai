import type { Course } from "../courses";

export const buildingWithAI: Course = {
  slug: "building-with-ai",
  title: "Building with AI",
  description:
    "Build real AI-powered projects using just prompts and no-code tools. No coding required — you'll build apps, automations, and tools using ChatGPT, Claude, and free platforms.",
  category: "AI",
  price: 69,
  lessons: [
    {
      slug: "what-you-can-build",
      title: "What You Can Build with AI (No Code Required)",
      description: "The new reality — anyone can build apps, tools, and businesses with AI.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "You don't need to know how to code to build with AI. That's not a motivational quote — it's the reality in 2026.\n\nPeople with zero technical background are building:\n\n- **AI chatbots** that handle customer support\n- **Content pipelines** that create weeks of social media in minutes\n- **Automated email systems** that respond to leads while they sleep\n- **AI-powered courses and guides** personalized for each student\n- **Business tools** like invoice generators, proposal writers, and report builders\n\nAll using prompts and free no-code tools.\n\n### How Is This Possible?\n\nAI tools like ChatGPT and Claude can now:\n- Write complete documents from a description\n- Build entire websites when you describe what you want\n- Create automations by explaining the steps in plain English\n- Generate business tools, templates, and systems on demand\n\nThe skill isn't coding anymore. It's knowing **what to ask for** and **which tools to use**.",
        },
        {
          type: "callout",
          variant: "info",
          content:
            "For this course, you'll need free accounts on: ChatGPT (chat.openai.com) or Claude (claude.ai), and optionally Zapier (zapier.com) for automations. Everything we build uses free tiers.",
        },
        {
          type: "text",
          content:
            "### The 3-Step Building Process\n\nEvery project in this course follows the same pattern:\n\n**Step 1: Describe what you want** — Write a clear, detailed description of what you're building. The more specific, the better.\n\n**Step 2: Use AI to create it** — Paste your description into ChatGPT or Claude. Ask for exactly what you need — copy, content, structure, plans, templates.\n\n**Step 3: Assemble with no-code tools** — Use free tools like Google Docs, Notion, Canva, Carrd, or Zapier to put everything together into a working product.\n\n### What We'll Build in This Course\n\n1. An AI-powered lead magnet (free guide/resource)\n2. A content system that creates a month of posts\n3. An automated email sequence\n4. A customer support chatbot\n5. A mini digital product you can sell\n6. A full business automation workflow\n\nLet's start building.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the most important skill for building with AI in 2026?",
            options: [
              "Learning Python or JavaScript",
              "Having a computer science degree",
              "Knowing what to ask for and which tools to use",
              "Understanding machine learning algorithms",
            ],
            correctIndex: 2,
            explanation: "The skill is knowing what to ask for and which tools to connect. AI handles the technical heavy lifting — you provide the vision, strategy, and clear instructions.",
          },
        },
      ],
    },
    {
      slug: "project-1-lead-magnet",
      title: "Project 1: Build an AI-Powered Lead Magnet",
      description: "Create a professional free guide or resource in under an hour.",
      sections: [
        {
          type: "text",
          content:
            "A lead magnet is a free resource you give away in exchange for someone's email address. It's how every online business builds an audience. Let's build one using AI.\n\n### What We're Building\nA professional PDF guide on a topic you know about. It could be:\n- \"5 Ways to Use AI at Work (Without Being a Techie)\"\n- \"The Beginner's Guide to Starting a Side Hustle\"\n- \"10 AI Tools Every Small Business Owner Needs\"\n\nPick a topic you know about or are passionate about.\n\n### Step 1: Plan Your Guide\n\nOpen ChatGPT or Claude and paste this prompt (fill in the brackets):\n\n\"I want to create a free PDF guide called [your title idea]. The target audience is [who it's for]. The guide should be practical and actionable, not fluffy. Create an outline with:\n- A compelling title (give me 3 options)\n- 5-7 main sections\n- For each section: a heading and 2-3 bullet points of what to cover\n- A call-to-action at the end that directs people to [your website, course, or social media]\"",
        },
        {
          type: "text",
          content:
            "### Step 2: Write the Content\n\nOnce you pick the outline you like, paste this follow-up prompt:\n\n\"Now write the full content for this guide. For each section:\n- Write 2-3 short paragraphs (keep it scannable, not dense)\n- Include a specific, actionable tip or example\n- Use simple language — no jargon\n- Add a pro tip or quick win where relevant\n\nWrite the introduction and conclusion too. The introduction should hook the reader with a bold statement. The conclusion should summarize the key takeaways and include a clear call-to-action.\"\n\n### Step 3: Make It Look Professional\n\nYou have several free options:\n- **Canva** (canva.com) — Use a free ebook template, paste your content in\n- **Google Docs** — Format it nicely with headers, export as PDF\n- **Notion** — Create a page, share as a public link\n\nFor Canva, try this prompt in ChatGPT:\n\"Write alt text and design suggestions for a Canva ebook template. The guide is about [topic]. Suggest a color scheme, font pairing, and layout style that looks professional and modern.\"\n\n### Step 4: Set Up the Download\n\nUse a free tool to collect emails in exchange for the guide:\n- **Mailchimp** (free up to 500 contacts) — Create a landing page + email signup\n- **Gumroad** (gumroad.com) — List it as a free product, collects emails automatically\n- **Carrd** (carrd.co) — Build a simple one-page landing page for free",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "You can build and launch a lead magnet in one sitting. Don't overthink it — done is better than perfect. Get it out there, see if people want it, and improve based on feedback.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the purpose of a lead magnet?",
            options: [
              "To make money directly",
              "To give away free value in exchange for email addresses",
              "To show off your design skills",
              "To replace your main product",
            ],
            correctIndex: 1,
            explanation: "A lead magnet builds your audience by trading free value for email addresses. Once someone's on your email list, you can nurture the relationship and eventually offer paid products.",
          },
        },
      ],
    },
    {
      slug: "project-2-content-system",
      title: "Project 2: Build a 30-Day Content System",
      description: "Create a month of social media content in one sitting using AI.",
      sections: [
        {
          type: "text",
          content:
            "Most people struggle with content because they try to create it day by day. The better approach: batch-create a full month of content in one session using AI.\n\n### What We're Building\n30 days of social media content — ideas, captions, and a posting schedule — for any platform.\n\n### Step 1: Define Your Content Pillars\n\nOpen ChatGPT or Claude:\n\n\"I'm building a personal brand / business around [your topic]. My audience is [who]. Help me define 4-5 content pillars — recurring themes I can post about consistently. For each pillar, give me:\n- The pillar name\n- Why my audience cares about it\n- 3 example post ideas\"\n\n### Step 2: Generate 30 Days of Content Ideas\n\nOnce you have your pillars, paste this:\n\n\"Using these content pillars, create a 30-day content calendar. For each day give me:\n- Day number\n- Which pillar it falls under\n- Post type (educational, personal story, tip, question, behind-the-scenes)\n- The specific post idea in one sentence\n\nMix up the pillars and post types so it doesn't feel repetitive. Include 2 'engagement' posts per week (questions or polls).\"",
        },
        {
          type: "text",
          content:
            "### Step 3: Write the Actual Posts\n\nNow batch-write the content. You don't need to do all 30 at once — do a week at a time:\n\n\"Write the full captions for days 1-7 of my content calendar. For each post:\n- Write for [platform — Instagram, LinkedIn, Twitter]\n- Match this tone: [casual/professional/inspiring]\n- Keep it under [length — 150 words for Instagram, 200 for LinkedIn]\n- End with a call-to-action or question to drive engagement\n\nHere's the calendar for this week: [paste the 7 days from your calendar]\"\n\n### Step 4: Schedule Everything\n\nFree scheduling tools:\n- **Buffer** (buffer.com) — Free for 3 channels, schedule posts in advance\n- **Later** (later.com) — Free plan, great for Instagram\n- **Native scheduling** — Most platforms let you schedule posts for free now\n\n### Step 5: Repurpose Across Platforms\n\nOnce you have content for one platform, repurpose it:\n\n\"Take this Instagram post and rewrite it for LinkedIn. Make it more professional but keep the core message. Add a thought-provoking question at the end: [paste your Instagram caption]\"",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Do this on the first day of every month. One batch session = 30 days of content. You'll spend 2-3 hours once instead of 30 minutes every single day struggling to come up with something.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the biggest advantage of batch-creating content with AI?",
            options: [
              "The content is always perfect on the first try",
              "You create a month of content in hours instead of daily struggle",
              "You never need to check the content before posting",
              "AI content always goes viral",
            ],
            correctIndex: 1,
            explanation: "Batch creation saves massive time. One focused session with AI produces a full month of content, freeing you from the daily grind of 'what should I post today?'",
          },
        },
      ],
    },
    {
      slug: "project-3-email-sequence",
      title: "Project 3: Build an Automated Email Sequence",
      description: "Create a welcome email series that nurtures leads on autopilot.",
      sections: [
        {
          type: "text",
          content:
            "When someone signs up for your lead magnet or joins your email list, you don't want silence. You want an automated sequence that:\n\n1. Welcomes them\n2. Delivers value\n3. Builds trust\n4. Eventually offers something paid\n\n### What We're Building\nA 5-email welcome sequence that runs automatically when someone joins your list.\n\n### Step 1: Plan the Sequence\n\nOpen ChatGPT or Claude:\n\n\"I need a 5-email welcome sequence for my email list. My business is [what you do]. My audience is [who]. They signed up because [reason — downloaded a guide, joined a waitlist, etc.].\n\nPlan the 5 emails:\n- Email 1 (Day 0): Welcome + deliver the thing they signed up for\n- Email 2 (Day 2): Share your story — why you do what you do\n- Email 3 (Day 4): Your best piece of advice or most valuable tip\n- Email 4 (Day 7): Social proof — results, testimonials, community\n- Email 5 (Day 10): Soft pitch for your paid product/service\n\nFor each email, give me:\n- Subject line (2 options)\n- The key message in one sentence\n- Call-to-action\"",
        },
        {
          type: "text",
          content:
            "### Step 2: Write Each Email\n\nTake it one email at a time:\n\n\"Write Email 1 of my welcome sequence. Subject line: [pick one from the plan].\n\nDetails:\n- Greet them warmly\n- Deliver the [lead magnet / resource] with a download link placeholder\n- Tell them what to expect from your emails (how often, what kind of content)\n- Keep it under 200 words\n- Tone: [friendly/professional/casual]\n- Sign off with my name: [your name]\"\n\nRepeat for each email, adjusting the prompt for the email's purpose.\n\n### Step 3: Set It Up in an Email Tool\n\nFree options:\n- **Mailchimp** — Free up to 500 contacts, has automation builder\n- **MailerLite** — Free up to 1,000 contacts, great automation\n- **ConvertKit** (free plan) — Built for creators\n\nIn any of these tools:\n1. Create the 5 emails\n2. Set up an automation: \"When someone signs up → send Email 1 immediately → wait 2 days → send Email 2 → etc.\"\n3. Connect it to your lead magnet signup form\n\n### Step 4: Test It\n\nSign up with your own email and go through the sequence. Ask yourself:\n- Does each email feel natural and valuable?\n- Is there a clear next step in each email?\n- Would I stay subscribed if I received these?",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Your email sequence works while you sleep. Once it's set up, every new subscriber gets the same great experience automatically. This is one of the highest-ROI things you can build.",
        },
        {
          type: "quiz",
          quiz: {
            question: "When should your email sequence first mention a paid product?",
            options: [
              "Email 1 — pitch immediately",
              "Never — only send free content",
              "After delivering value and building trust (around Email 4-5)",
              "Every single email should pitch",
            ],
            correctIndex: 2,
            explanation: "Build trust first, pitch later. Your first emails should deliver value and build a relationship. By Email 4-5, they trust you and a soft pitch feels natural, not pushy.",
          },
        },
      ],
    },
    {
      slug: "project-4-chatbot",
      title: "Project 4: Build a Customer Support Chatbot",
      description: "Create an AI chatbot that answers questions about your business 24/7.",
      sections: [
        {
          type: "text",
          content:
            "AI chatbots can handle 80% of customer questions automatically. Let's build one using just prompts and free tools.\n\n### What We're Building\nA chatbot that knows about your business/product and can answer common questions from customers or visitors.\n\n### Step 1: Create Your Knowledge Base\n\nFirst, we need to give the chatbot all the information it needs. Open ChatGPT or Claude:\n\n\"Help me create a knowledge base for a customer support chatbot. My business is [what you do]. Here's what the chatbot needs to know:\n\n- What we offer: [your products/services]\n- Pricing: [your prices]\n- How to get started: [signup process]\n- Refund policy: [your policy]\n- Contact info: [email, social media]\n- FAQs: [list 5-10 common questions you get]\n\nOrganize this into a clean Q&A format with clear, concise answers for each topic.\"\n\n### Step 2: Create the Chatbot's Personality\n\n\"Write a system prompt for my customer support chatbot. The bot should:\n- Have a name: [pick a name]\n- Be [friendly/professional/casual] in tone\n- Answer ONLY from the knowledge base — never make things up\n- Say 'I don't have info on that, but you can email us at [email]' when unsure\n- Keep answers short and helpful (2-3 sentences max)\n- Offer to connect with a human for complex issues\"",
        },
        {
          type: "text",
          content:
            "### Step 3: Test Your Chatbot\n\nBefore setting up any tool, test the chatbot right in ChatGPT or Claude:\n\n1. Paste your system prompt\n2. Paste your knowledge base\n3. Then ask it questions as if you were a customer:\n   - \"How much does your course cost?\"\n   - \"Can I get a refund?\"\n   - \"How do I sign up?\"\n   - \"Do you offer certificates?\" (something NOT in the knowledge base)\n\nCheck: Does it answer correctly? Does it say \"I don't know\" for things not in the knowledge base? Is the tone right?\n\n### Step 4: Deploy It (Free Options)\n\n**Option A: Tidio** (tidio.com)\n- Free plan includes AI chatbot\n- Paste your knowledge base as training data\n- Embed on your website with one line of code\n\n**Option B: Chatbase** (chatbase.co)\n- Upload your FAQ/knowledge base\n- Generates a chatbot you can embed anywhere\n- Free tier available\n\n**Option C: CustomGPT or ChatGPT Custom GPT**\n- If you have ChatGPT Plus, create a Custom GPT with your knowledge base\n- Share a link — no website needed\n\n### Step 5: Monitor and Improve\n\nCheck your chatbot conversations weekly:\n- What questions is it getting that it can't answer? → Add to knowledge base\n- What answers feel off? → Refine the system prompt\n- What questions come up most? → Make sure those answers are great",
        },
        {
          type: "quiz",
          quiz: {
            question: "What should a chatbot do when asked something not in its knowledge base?",
            options: [
              "Make up a plausible answer",
              "Ignore the question",
              "Admit it doesn't know and offer to connect with a human",
              "Redirect to Google",
            ],
            correctIndex: 2,
            explanation: "A good chatbot is honest about its limits. Admitting 'I don't have that info, but here's how to reach our team' builds trust. Making things up destroys it.",
          },
        },
      ],
    },
    {
      slug: "project-5-digital-product",
      title: "Project 5: Create and Sell a Digital Product",
      description: "Build a digital product you can sell — templates, guides, or toolkits.",
      sections: [
        {
          type: "text",
          content:
            "Digital products are the easiest things to sell online — no inventory, no shipping, near-100% profit margins. AI makes creating them incredibly fast.\n\n### What You Can Build\n\n- **Template packs** — Email templates, social media templates, business plan templates\n- **Toolkits** — A collection of prompts, checklists, and guides for a specific task\n- **Mini-courses** — A series of lessons delivered as PDFs or Notion pages\n- **Swipe files** — Curated examples of great copy, designs, or strategies\n- **Planners & trackers** — Goal planners, habit trackers, budget spreadsheets\n\n### Step 1: Pick Your Product\n\nOpen ChatGPT or Claude:\n\n\"I want to create a digital product I can sell for $9-29. My audience is [who]. Their biggest challenges are [what they struggle with]. Suggest 5 digital product ideas that:\n- Solve a specific problem\n- Can be created in a day with AI\n- Are worth paying for (save time or provide real value)\n- Don't require ongoing maintenance\"\n\n### Step 2: Create the Content\n\nOnce you pick your product, use AI to build it:\n\n\"I'm creating a [product type] called [name]. It's for [audience] who want to [goal]. Create the complete content including:\n- A table of contents / overview\n- All sections with detailed, actionable content\n- Templates or examples they can copy and customize\n- A quick-start guide so they can use it immediately\"",
        },
        {
          type: "text",
          content:
            "### Step 3: Package It Professionally\n\n**For PDFs:** Use Canva — search for \"ebook template\" or \"workbook template\", paste your AI-generated content in, customize colors and fonts.\n\n**For Notion templates:** Build it in Notion, then duplicate it as a template others can copy.\n\n**For spreadsheets:** Use Google Sheets, ask ChatGPT to help you create formulas and formatting.\n\nAsk AI to help with design direction:\n\"I'm designing a [product type] in Canva. Suggest a professional color scheme, font pairing, and layout structure that would appeal to [audience].\"\n\n### Step 4: Set Up Sales\n\n**Gumroad** (gumroad.com) — The easiest option:\n1. Create a free account\n2. Upload your product file\n3. Set your price\n4. Write a product description (use AI!)\n5. Share the link\n\nFor the product description, try:\n\"Write a compelling product description for my [product]. Target buyer: [who]. Main benefit: [what they get]. Include 3-4 bullet points of what's included and a strong call-to-action. Keep it under 150 words.\"\n\n### Step 5: Promote It\n\nUse the content system from Project 2 to promote:\n- Share value from the product as free social media content\n- Give away one section as a lead magnet\n- Ask early buyers for testimonials (even if they got it free)",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Start with a low price ($9-19) to get your first sales and reviews. You can always raise the price later. The goal of your first product isn't to get rich — it's to prove you can create and sell something.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the best strategy for pricing your first digital product?",
            options: [
              "Price it high ($99+) because AI helped create it",
              "Give it away for free forever",
              "Start low ($9-19) to get sales and reviews, raise the price later",
              "Match the most expensive competitor",
            ],
            correctIndex: 2,
            explanation: "Start low to get momentum. First sales and reviews are more valuable than maximizing price. Once you have social proof, you can confidently raise the price.",
          },
        },
      ],
    },
    {
      slug: "project-6-automation",
      title: "Project 6: Build a Business Automation",
      description: "Connect your tools together so work happens automatically.",
      sections: [
        {
          type: "text",
          content:
            "Automation is connecting your tools so that when something happens in one place, something else happens automatically in another. AI makes it possible to build these without any code.\n\n### What We're Building\nA workflow where one action triggers a chain of automated steps. Examples:\n\n- Someone fills out a contact form → AI drafts a personalized response → You review and send\n- You publish a blog post → AI creates social media posts → They get scheduled automatically\n- A customer buys your product → They get a welcome email → Added to your CRM → You get notified\n\n### The Tool: Zapier (Free Tier)\n\nZapier (zapier.com) connects 5,000+ apps with no code. You describe what should happen, and it wires it up.\n\nFree plan: 5 automations, 100 tasks per month — plenty to start.\n\n### Step 1: Map Your Workflow\n\nOpen ChatGPT or Claude:\n\n\"I want to automate this process in my business: [describe the manual process you do repeatedly].\n\nBreak it down into:\n1. The trigger (what starts the process)\n2. Each step that happens after\n3. The tools involved at each step\n4. What the final outcome should be\n\nKeep it simple — no more than 5 steps. Suggest which free tools to use for each step.\"",
        },
        {
          type: "text",
          content:
            "### Step 2: Set Up in Zapier\n\n1. Go to zapier.com and create a free account\n2. Click \"Create Zap\"\n3. Set your **trigger** — the event that starts everything\n   - Example: \"New form submission in Google Forms\"\n4. Add **action steps** — what happens next\n   - Example: \"Create a row in Google Sheets\" → \"Send an email via Gmail\"\n\n### Step 3: Add AI to Your Automation\n\nZapier has built-in AI steps. You can add:\n- \"AI by Zapier\" — Send a prompt and get a response as part of your automation\n- Example: Form submission comes in → AI writes a personalized reply → Email gets sent\n\nPrompt for the AI step:\n\"Write a brief, friendly response to this inquiry. The person's name is [name field]. They asked about [message field]. Thank them for reaching out and let them know we'll follow up within 24 hours. Keep it under 100 words.\"\n\n### Step 4: Test and Refine\n\n1. Run a test with sample data\n2. Check every step produced the right output\n3. Adjust your AI prompts if the responses feel off\n4. Turn it on and let it run\n\n### Automation Ideas to Try\n\n- **New follower on social media** → AI generates a DM welcome message → You review and send\n- **New email received** → AI categorizes it (support, sales, spam) → Routes to the right folder\n- **Weekly** → AI generates a content idea list → Saved to your Google Doc\n- **New sale on Gumroad** → Welcome email sent → Customer added to spreadsheet → You get a Slack notification",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Start with ONE automation — the task you do most often that follows the same steps every time. Get that working perfectly before building more. One great automation saves more time than five half-finished ones.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the best task to automate first?",
            options: [
              "The most complex task in your business",
              "Something you do once a year",
              "A repetitive task you do often that follows the same steps every time",
              "Something that requires a lot of judgment and creativity",
            ],
            correctIndex: 2,
            explanation: "Automate repetitive, predictable tasks first. They follow the same steps, are easy to set up, and save the most time because they happen frequently.",
          },
        },
      ],
    },
    {
      slug: "putting-it-all-together",
      title: "Putting It All Together",
      description: "Connect your projects into a complete AI-powered business system.",
      sections: [
        {
          type: "text",
          content:
            "You've built 6 projects. Now let's connect them into a system that works together.\n\n### The Full Stack (No Code)\n\nHere's how everything fits:\n\n**Attract** → Your 30-day content system (Project 2) brings people in\n\n**Capture** → Your lead magnet (Project 1) turns followers into email subscribers\n\n**Nurture** → Your email sequence (Project 3) builds trust automatically\n\n**Support** → Your chatbot (Project 4) answers questions 24/7\n\n**Sell** → Your digital product (Project 5) generates revenue\n\n**Automate** → Your automation (Project 6) connects everything together\n\nThis is a real business system. People charge consulting fees to set this up for companies. You just built it yourself with AI and free tools.",
        },
        {
          type: "text",
          content:
            "### Connecting the Pieces\n\nOpen ChatGPT or Claude:\n\n\"I've built these pieces for my business:\n1. A lead magnet (free guide on [topic])\n2. A 30-day content calendar for [platform]\n3. A 5-email welcome sequence\n4. A support chatbot\n5. A digital product ($[price])\n6. Automations in Zapier\n\nHelp me connect them into one system. For each connection, tell me:\n- What triggers what\n- Which tools to connect\n- What the user experience looks like from the customer's perspective\"\n\n### What's Next?\n\nOnce your system is running:\n\n- **Week 1-2:** Focus on content and growing your audience\n- **Week 3-4:** Check your email sequence — are people opening and clicking?\n- **Month 2:** Launch your digital product to your email list\n- **Ongoing:** Refine your AI prompts based on what's working and what isn't\n\n### The Big Lesson\n\nYou don't need to code to build with AI. You need:\n- **Clear thinking** — know what problem you're solving\n- **Good prompts** — describe what you want specifically\n- **The right tools** — free platforms that snap together\n- **Action** — done is better than perfect",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "The system doesn't need to be perfect on day one. Launch with the basics, then improve one piece at a time. The people who win with AI aren't the ones who plan the longest — they're the ones who start the fastest.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the most important step after building your AI-powered business system?",
            options: [
              "Spend more time making it perfect before launching",
              "Build 10 more projects before starting",
              "Launch it, get real feedback, and improve based on results",
              "Wait for better AI tools to come out",
            ],
            correctIndex: 2,
            explanation: "Launch and iterate. Real-world feedback is worth more than weeks of planning. Start with what you have, see what works, and improve from there.",
          },
        },
      ],
    },
  ],
};
