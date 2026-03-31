import type { Course } from "../courses";

export const promptEngineering: Course = {
  slug: "prompt-engineering",
  title: "Prompt Engineering & AI Tools",
  description:
    "Learn how to talk to AI and get great results every time. No coding required — just you and free AI tools like ChatGPT and Claude.",
  category: "AI",
  price: 49,
  lessons: [
    {
      slug: "your-first-prompt",
      title: "Your First Prompt",
      description: "The basics of talking to AI — and why how you ask changes everything.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "The #1 skill in the AI era isn't coding. It's knowing how to talk to AI.\n\nThe same AI tool can give you garbage or gold — the only difference is how you ask. Let's see the difference right now.",
        },
        {
          type: "callout",
          variant: "info",
          content:
            "For this entire course, you'll need a free AI tool open in another tab. Go to chat.openai.com (ChatGPT) or claude.ai (Claude) and create a free account. Both work great.",
        },
        {
          type: "text",
          content:
            "### Bad Prompt vs. Good Prompt\n\nOpen ChatGPT or Claude and try both of these:\n\n**Bad prompt:** \"Write me a bio\"\n\nNotice the result — it's generic, boring, and could be about anyone.\n\n**Now try this good prompt:** \"Write a 2-sentence professional bio for a self-taught software engineer who specializes in AI. Tone: confident but approachable. Include that they founded an AI education platform and grew a tech community to 900+ members.\"\n\nNotice the difference? The second one gives you something you can actually use.\n\n### The Secret: Specificity\n\nThe more detail you give, the better the output. Every time you prompt AI, ask yourself:\n\n- **What** do I want? (email, bio, idea, plan)\n- **Who** is it for? (my boss, my website, a client)\n- **How** should it sound? (professional, casual, funny)\n- **How long** should it be? (2 sentences, 100 words, a full page)",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Try it now: Take the bad prompt 'Write me a bio' and add details about yourself — your job, your personality, what makes you unique. Paste it into ChatGPT or Claude and see how much better the result is.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the #1 thing that makes a prompt better?",
            options: [
              "Using fancy vocabulary",
              "Making it as long as possible",
              "Being specific about what you want",
              "Starting with 'Please'",
            ],
            correctIndex: 2,
            explanation: "Specificity is everything. Tell the AI exactly what you want — who it's for, what tone, how long, what to include. The more specific, the better the output.",
          },
        },
      ],
    },
    {
      slug: "the-rice-framework",
      title: "The RICE Framework",
      description: "A simple 4-part formula that makes every prompt better.",
      sections: [
        {
          type: "text",
          content:
            "Here's a simple formula you can use for any prompt. It works with ChatGPT, Claude, Gemini — any AI tool.\n\n### RICE = Role + Instructions + Context + Examples\n\n**R — Role:** Tell the AI who to be.\n\"You are a social media manager with 5 years of experience.\"\n\n**I — Instructions:** Say exactly what you want.\n\"Write 3 Instagram caption ideas for a product launch.\"\n\n**C — Context:** Give background info.\n\"The product is an online AI course for beginners. Price is $29. Target audience is young professionals.\"\n\n**E — Examples:** Show what good looks like.\n\"Here's a caption style I like: 'Stop scrolling. Start building. Our new AI course just dropped and your career is about to change.'\"\n\nYou don't always need all four, but the more you include, the better your results.",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Try it now: Open ChatGPT or Claude and paste this full RICE prompt:\n\n\"You are a social media manager with 5 years of experience. Write 3 Instagram caption ideas for a product launch. The product is an online AI course for beginners, priced at $29. Target audience is young professionals who want to level up their careers. Here's a caption style I like: 'Stop scrolling. Start building. Our new AI course just dropped and your career is about to change.'\"",
        },
        {
          type: "text",
          content:
            "### Practice: Build Your Own RICE Prompts\n\nTry building RICE prompts for these tasks. Open ChatGPT or Claude and test each one:\n\n**Task 1: Write a follow-up email**\n- Role: professional email writer\n- Instructions: write a follow-up email after a networking event\n- Context: you met a potential client who runs a small business, you offer consulting\n- Example: keep it under 100 words, friendly but professional\n\n**Task 2: Create a meal plan**\n- Role: nutritionist\n- Instructions: create a 3-day meal plan\n- Context: you're busy, want healthy but quick meals, budget-friendly\n- Example: include prep time for each meal\n\n**Task 3: Plan a presentation**\n- Role: presentation coach\n- Instructions: outline a 10-minute presentation\n- Context: presenting to your team about why your company should use AI tools\n- Example: include an attention-grabbing opening",
        },
        {
          type: "quiz",
          quiz: {
            question: "In the RICE framework, what does giving the AI a 'Role' do?",
            options: [
              "Nothing — it's just a formality",
              "It tells AI to respond as an expert in that area, improving quality",
              "It makes the AI respond faster",
              "It only works with paid AI tools",
            ],
            correctIndex: 1,
            explanation: "Setting a role (like 'You are an experienced copywriter') makes the AI respond with that expertise. It changes the vocabulary, depth, and style of the response.",
          },
        },
      ],
    },
    {
      slug: "think-step-by-step",
      title: "Make AI Think Step by Step",
      description: "One simple trick that dramatically improves AI answers.",
      sections: [
        {
          type: "text",
          content:
            "Here's the easiest prompt upgrade you'll ever learn:\n\nAdd **\"Think through this step by step\"** to any question.\n\nThat's it. This one phrase dramatically improves the quality of AI answers because it forces the AI to reason through the problem instead of jumping to an answer.\n\n### See It In Action\n\nOpen ChatGPT or Claude and try these two prompts:\n\n**Without step-by-step:**\n\"Should I learn Python or JavaScript first if I want to work with AI?\"\n\n**With step-by-step:**\n\"Should I learn Python or JavaScript first if I want to work with AI? Think through this step by step. Consider my goals, the job market, available learning resources, and how each language is used in AI. Show your reasoning before giving your final recommendation.\"\n\nThe second response will be dramatically more thorough and useful.",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Try it right now with YOUR question. Think of something you've been trying to decide — a career move, a purchase, a project idea. Ask ChatGPT or Claude twice: once normally, once with 'Think through this step by step.' Compare the two responses.",
        },
        {
          type: "text",
          content:
            "### When to Use Step-by-Step\n\n- **Big decisions:** \"Should I quit my job to start a business? Think step by step.\"\n- **Planning:** \"Help me plan a product launch. Walk through each phase step by step.\"\n- **Analysis:** \"Review my resume. Go through each section step by step and suggest improvements.\"\n- **Problem solving:** \"I'm not getting engagement on my social media. Think through possible reasons step by step.\"\n\n### Practice Prompts to Try Right Now\n\nCopy these into ChatGPT or Claude:\n\n1. \"I want to start a side hustle using AI. Think step by step about what kind of business would work for someone with no technical background. Consider time commitment, startup costs, and income potential.\"\n\n2. \"I need to give a 5-minute presentation at work about AI. Think step by step about how to structure it, what to include, and how to make it engaging for people who know nothing about AI.\"\n\n3. \"I'm deciding between 3 career paths: marketing, data analysis, and UX design. Think step by step about which one has the best outlook if AI changes these fields significantly.\"",
        },
        {
          type: "quiz",
          quiz: {
            question: "Why does 'think step by step' improve AI responses?",
            options: [
              "It activates a special AI mode",
              "It forces the AI to reason through the problem instead of guessing",
              "It uses fewer tokens so the AI tries harder",
              "It only works with GPT-4",
            ],
            correctIndex: 1,
            explanation: "Step-by-step prompting forces the AI to break down its reasoning. Each step constrains the next, leading to more accurate and thoughtful responses. It works with any AI tool.",
          },
        },
      ],
    },
    {
      slug: "show-dont-tell",
      title: "Show, Don't Tell",
      description: "Teach AI what you want by showing it examples.",
      sections: [
        {
          type: "text",
          content:
            "Sometimes explaining what you want is hard. It's easier to just **show** the AI.\n\nThis technique is called **few-shot prompting** — you give the AI 2-3 examples of what you want, and it follows the pattern.\n\n### How It Works\n\nInstead of explaining your writing style, show it:\n\n**Without examples:**\n\"Write a tip about learning to code.\"\n→ AI guesses what style you want. Hit or miss.\n\n**With examples:**\n\"Write a tip about learning to code.\n\nHere are examples of the style I want:\n\nTopic: Networking\nTip: Your network isn't who you know. It's who knows what you can do.\n\nTopic: Using AI\nTip: AI won't replace you. But someone using AI will.\n\nNow write one for: Learning to code\"\n→ AI matches your style perfectly.",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Try it now: Open ChatGPT or Claude and paste the 'with examples' prompt above. Then try changing the topic to something else — 'Building a business', 'Public speaking', 'Saving money'. Notice how the AI maintains the same punchy style every time.",
        },
        {
          type: "text",
          content:
            "### When to Use Examples\n\n- **Matching a specific tone or style** — Show 2-3 examples of writing you like\n- **Consistent formatting** — Show how you want things structured\n- **Translation between formats** — Show how to turn one thing into another\n\n### Practice: Try These Right Now\n\n**Email subject line generator:**\nPaste this into ChatGPT or Claude:\n\n\"Write an email subject line for my newsletter.\n\nExamples of subject lines I like:\n- Email about a new course → '🚀 New AI course drops Monday — first 50 seats are half off'\n- Email about community wins → 'This month our community built 47 AI projects (here are the best)'\n\nNow write one for: An email announcing our first in-person workshop in Baltimore\"\n\n**Product description writer:**\n\"Write a product description for my online course.\n\nExamples of descriptions I like:\n- Yoga app → 'Yoga for people who hate yoga. 10 minutes a day. No flexibility required. Just show up.'\n- Cooking course → 'Stop ordering takeout. Learn 20 meals you can make in under 30 minutes. No chef skills needed.'\n\nNow write one for: An AI prompt engineering course for beginners\"",
        },
        {
          type: "quiz",
          quiz: {
            question: "How many examples should you typically give the AI?",
            options: [
              "1 is always enough",
              "2-3 examples is the sweet spot",
              "At least 10 for best results",
              "Examples don't help",
            ],
            correctIndex: 1,
            explanation: "2-3 examples is the sweet spot. That's enough for the AI to see the pattern without overwhelming it. One example can work, but two or three is more reliable.",
          },
        },
      ],
    },
    {
      slug: "everyday-ai-prompts",
      title: "AI Prompts for Everyday Tasks",
      description: "Ready-to-use prompts for emails, social media, planning, and more.",
      sections: [
        {
          type: "text",
          content:
            "Here are prompts you can copy and customize for things you do every day. Open ChatGPT or Claude and try each one — just fill in the [brackets] with your own details.\n\n### Email Prompts\n\n**Follow-up email:**\n\"Write a short follow-up email to [person/role] I met at [event]. I want to [goal — schedule a call, stay in touch, etc.]. Keep it under 100 words. Tone: [professional/casual/friendly].\"\n\n**Difficult email:**\n\"Help me write a diplomatic email to [person] about [sensitive topic]. I want to [desired outcome] without [thing to avoid]. Keep it respectful but clear.\"\n\n### Social Media Prompts\n\n**Instagram/LinkedIn post:**\n\"Write a [platform] post about [topic]. My audience is [who]. End with a call-to-action: [what you want them to do]. Tone: [casual/professional/inspiring].\"\n\n**Content ideas:**\n\"Give me 10 [platform] post ideas about [your topic/niche]. My audience is [who]. Mix educational, personal story, and engagement posts.\"",
        },
        {
          type: "text",
          content:
            "### Work & Productivity Prompts\n\n**Meeting prep:**\n\"I have a meeting about [topic] with [who]. Help me prepare talking points. My goal is to [desired outcome]. What questions should I be ready to answer?\"\n\n**Summarize something long:**\n\"Summarize the key points of this in 5 bullet points: [paste article, document, or notes]\"\n\n**Learn something new:**\n\"Explain [topic] to me like I'm a complete beginner. Use simple language and real-world analogies. No jargon.\"\n\n### Personal Prompts\n\n**Decision making:**\n\"I'm trying to decide between [option A] and [option B]. Here's my situation: [context]. Think through the pros and cons step by step and give me a recommendation.\"\n\n**Gift ideas:**\n\"I need a gift for [person — age, interests, relationship]. Budget: [amount]. They like [interests] and don't like [things to avoid]. Give me 5 creative ideas.\"\n\n**Travel planning:**\n\"Plan a [length] trip to [destination]. Budget: [amount]. I like [preferences — food, adventure, relaxation]. Create a day-by-day itinerary.\"",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Save these prompts somewhere handy — a note on your phone, a Google Doc, or a bookmark folder. The more you reuse and customize them, the faster you get at working with AI. Over time, you'll build your own collection of go-to prompts.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the best way to build your AI skills over time?",
            options: [
              "Memorize prompt templates word for word",
              "Only use AI for complex tasks",
              "Use AI daily on real tasks and refine your prompts based on results",
              "Wait for AI to get better before starting",
            ],
            correctIndex: 2,
            explanation: "The best way to learn prompting is to use AI every day on real tasks — emails, ideas, planning, writing. Pay attention to what works and what doesn't, and adjust your approach.",
          },
        },
      ],
    },
    {
      slug: "getting-better-results",
      title: "Getting Better Results (Refining & Iterating)",
      description: "What to do when AI gives you a mediocre response.",
      sections: [
        {
          type: "text",
          content:
            "The first response from AI is almost never perfect. That's normal. The real skill is knowing how to **refine** — guide the AI toward exactly what you want.\n\n### The Refining Toolkit\n\nHere are phrases you can use to steer the AI after its first response:\n\n**Too long:** \"Make this shorter. Cut it in half.\"\n\n**Too formal:** \"Rewrite this in a more casual, conversational tone.\"\n\n**Too generic:** \"Make this more specific. Add concrete examples.\"\n\n**Wrong angle:** \"I like the structure but change the focus to [new angle].\"\n\n**Almost right:** \"Keep everything but change [specific thing].\"\n\n**Completely off:** \"Let's start over. What I actually need is [clearer description].\"",
        },
        {
          type: "text",
          content:
            "### Real Example: Refining a Bio\n\nTry this conversation in ChatGPT or Claude:\n\n**You:** \"Write a professional bio for my LinkedIn profile. I'm a marketing manager at a tech company.\"\n\n**AI gives you something generic.**\n\n**You:** \"Too formal. Make it more conversational — like I'm talking to a friend at a networking event.\"\n\n**AI adjusts the tone.**\n\n**You:** \"Better! But add that I'm passionate about AI and recently started an AI study group. Also make it 2 sentences max.\"\n\n**AI gives you exactly what you want.**\n\nSee how it takes 2-3 rounds to get something great? That's normal and expected.\n\n### The Golden Rule of Refining\n\n**Tell AI what to keep AND what to change.** Don't just say \"try again\" — say \"I like the tone but make it shorter\" or \"Keep the structure but change the examples.\"\n\nThis saves you time because the AI doesn't throw away the good parts.",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Practice right now: Ask ChatGPT or Claude to write anything — an email, a social post, an idea list. Then refine it 3 times using the phrases above. Notice how each round gets closer to what you actually want.",
        },
        {
          type: "quiz",
          quiz: {
            question: "If AI gives you a mediocre first response, what should you do?",
            options: [
              "Accept it and move on",
              "Try a completely different AI tool",
              "Tell AI what to keep and what to change, then refine",
              "Start a new conversation from scratch",
            ],
            correctIndex: 2,
            explanation: "Always refine! Tell the AI what you liked and what to change. 'Keep the tone but make it shorter' or 'Good structure but add specific examples.' 2-3 rounds usually gets you exactly what you need.",
          },
        },
      ],
    },
    {
      slug: "common-mistakes",
      title: "Common Mistakes (and How to Fix Them)",
      description: "The mistakes everyone makes when starting with AI — and simple fixes.",
      sections: [
        {
          type: "text",
          content:
            "Here are the 5 most common prompting mistakes. Once you know them, you'll avoid 90% of bad AI responses.\n\n### Mistake 1: Being Too Vague\n\n❌ \"Help me with marketing\"\n✅ \"Give me 5 Instagram post ideas for my AI course. My audience is young professionals who want to learn AI but don't know where to start.\"\n\n**Fix:** Always include what, who, and how.\n\n### Mistake 2: Not Telling AI the Format\n\n❌ \"Tell me about AI trends\"\n✅ \"List the top 5 AI trends for 2026 as bullet points, one sentence each.\"\n\n**Fix:** Say exactly how you want the response structured — bullet points, numbered list, paragraphs, table, etc.\n\n### Mistake 3: Asking Too Many Things at Once\n\n❌ \"Write me a bio, an email, and 3 social posts\"\n✅ Ask one thing at a time. Each gets full attention.\n\n**Fix:** One prompt, one task. You can always ask for the next thing after.",
        },
        {
          type: "text",
          content:
            "### Mistake 4: Not Giving Context\n\n❌ \"Write a professional email\"\n✅ \"Write a professional email to a potential client I met at a tech conference. I want to follow up and schedule a call about AI consulting services. Keep it under 100 words, warm but professional.\"\n\n**Fix:** Context is king. Tell AI your situation, your audience, and your goal.\n\n### Mistake 5: Accepting the First Response\n\n❌ Getting a mediocre answer and giving up\n✅ Refining: \"Make it shorter.\" \"More casual tone.\" \"Add a specific example about AI.\"\n\n**Fix:** The first response is a rough draft. Always refine at least once.\n\n### Quick Self-Check Before Sending Any Prompt\n\nBefore you hit enter, ask yourself:\n\n1. Did I say **what** I want?\n2. Did I say **who** it's for?\n3. Did I say **how** I want it? (tone, length, format)\n4. Did I give **context** about my situation?\n\nIf you can check all four, your prompt is going to work well.",
        },
        {
          type: "callout",
          variant: "tip",
          content:
            "Challenge: Go back to a prompt that gave you a bad result in the past. Apply what you've learned — add specificity, context, format, and role. Try it again. You'll be surprised how different the result is.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the fastest way to check if your prompt will work well?",
            options: [
              "Make sure it's at least 200 words long",
              "Check that it includes what, who, how, and context",
              "Use technical language so AI takes it seriously",
              "Ask someone else to review it first",
            ],
            correctIndex: 1,
            explanation: "The 4-point check: What do you want? Who is it for? How should it look/sound? What context does AI need? Hit all four and your prompt will work well every time.",
          },
        },
      ],
    },
  ],
};
