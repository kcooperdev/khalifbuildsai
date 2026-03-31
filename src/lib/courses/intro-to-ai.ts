import type { Course } from "../courses";

export const introToAI: Course = {
  slug: "introduction-to-ai",
  title: "Intro to AI",
  description:
    "Walk away understanding what AI is, how it works, what it can do for you, and where to go next. No tech background needed.",
  category: "AI",
  price: 0,
  lessons: [
    // ── Module 1: What Even Is AI? ──
    {
      slug: "ai-is-not-a-robot",
      title: "AI Is Not a Robot",
      description: "Breaking down the myths vs. reality.",
      free: true,
      sections: [
        {
          type: "callout",
          variant: "info",
          content: "Module 1 — What Even Is AI? Demystify before anything else.",
        },
        {
          type: "text",
          content:
            "When most people hear \"artificial intelligence\" they picture a robot from a movie — something that thinks, feels, and might take over the world. That's not what AI is.\n\nAI is software that can learn patterns from data and use those patterns to make predictions or generate content. That's it.\n\n### What AI Actually Is\n\n- The spam filter in your email — that's AI\n- Autocomplete when you type a text message — that's AI\n- Netflix recommending your next show — that's AI\n- ChatGPT writing an email for you — that's AI\n\nAll of these are software programs that learned patterns from massive amounts of data. None of them are conscious. None of them \"think.\" They're very sophisticated pattern-matching machines.\n\n### What AI Is NOT\n\n- It's not sentient or self-aware\n- It doesn't have feelings or opinions (even when it sounds like it does)\n- It's not always right — it can be confidently wrong\n- It's not magic — it's math and data at scale\n\n### Why This Matters for You\n\nOnce you stop being intimidated by AI and see it for what it is — a powerful tool — you can start using it. And that's what the rest of this course is about.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What is AI in simple terms?",
            options: [
              "A robot that thinks like a human",
              "Software that learns patterns from data to make predictions or generate content",
              "A supercomputer that knows everything",
              "A program that will replace all jobs",
            ],
            correctIndex: 1,
            explanation: "AI is software that learns patterns from data. It's not a robot, not conscious, and not magic — it's a tool that gets better with more data.",
          },
        },
      ],
    },
    {
      slug: "brief-history-of-ai",
      title: "A Brief, Non-Boring History",
      description: "From calculators to ChatGPT in 5 minutes.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "AI didn't appear out of nowhere in 2022. It's been building for decades. Here's the timeline that actually matters:\n\n### The Early Days (1950s-1990s)\n\nIn 1950, a mathematician named Alan Turing asked: \"Can machines think?\" That question kicked off the entire field. For the next 40 years, researchers tried to build intelligent systems by writing rules by hand — \"if this, then that.\" It sort of worked for simple stuff but couldn't handle the real world.\n\n### The Machine Learning Era (2000s-2010s)\n\nInstead of writing rules, researchers figured out how to let computers learn rules from data. Feed a program 10,000 pictures of cats and dogs, and it learns to tell them apart on its own. This is machine learning. It powered recommendation engines, search results, and fraud detection — you used it every day without knowing.\n\n### The AI Explosion (2017-Now)\n\nIn 2017, Google published a research paper called \"Attention Is All You Need\" that introduced a new architecture called the **Transformer**. This is the foundation of every major AI tool you use today — ChatGPT, Claude, Gemini, Midjourney.\n\nThen in November 2022, OpenAI released ChatGPT to the public. It reached 100 million users in 2 months — the fastest-growing product in history. AI went from a research topic to something everyone could use.\n\n### Where We Are Now (2026)\n\nAI can write, code, create images, analyze documents, generate video, clone voices, and automate workflows. It's improving every few months. The tools are mostly free or cheap. And most people still haven't learned how to use them properly — which is an opportunity for you.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What technology is behind ChatGPT, Claude, and most modern AI tools?",
            options: [
              "Rule-based programming",
              "Quantum computing",
              "The Transformer architecture",
              "Blockchain technology",
            ],
            correctIndex: 2,
            explanation: "The Transformer architecture, introduced in 2017 by Google, is the foundation behind virtually every major AI tool today — from ChatGPT to Claude to image generators.",
          },
        },
      ],
    },
    {
      slug: "three-types-of-ai",
      title: "The Three Types You Need to Know",
      description: "Narrow AI, Generative AI, and Agents — what each one does.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "There are hundreds of types of AI in textbooks. You only need to know three.\n\n### 1. Narrow AI\n\nAI designed to do one specific thing well. Your email spam filter. Siri setting a timer. A fraud detection system at your bank. These are everywhere and you've been using them for years without thinking about it.\n\n**Key point:** Narrow AI is great at its one job but can't do anything else. Your spam filter can't write an essay.\n\n### 2. Generative AI\n\nThis is the big one. Generative AI creates new content — text, images, code, music, video. ChatGPT, Claude, Midjourney, DALL-E — these are all generative AI.\n\nYou give it a prompt (instructions), and it generates something new based on patterns it learned from training data. This is the type of AI that's changing everything right now, and it's what most of this course focuses on.\n\n**Key point:** Generative AI doesn't copy — it creates. It learned patterns from billions of examples and uses those patterns to generate new content.\n\n### 3. AI Agents\n\nThe newest category. Agents are AI systems that can take actions, use tools, and complete multi-step tasks on their own. Instead of just answering a question, an agent might research a topic, write a report, and email it to you — all from a single instruction.\n\n**Key point:** Agents are early but growing fast. Think of them as AI that can actually DO things, not just SAY things.",
        },
        {
          type: "callout",
          variant: "tip",
          content: "For right now, focus on generative AI — that's where the biggest opportunities are for everyday people. You'll use tools like ChatGPT and Claude starting in Module 4.",
        },
        {
          type: "quiz",
          quiz: {
            question: "Which type of AI powers ChatGPT and Claude?",
            options: [
              "Narrow AI",
              "Generative AI",
              "AI Agents",
              "General AI",
            ],
            correctIndex: 1,
            explanation: "ChatGPT and Claude are generative AI — they create new text based on patterns learned from training data. You give them a prompt, they generate a response.",
          },
        },
      ],
    },
    // ── Module 2: How Does It Actually Work? ──
    {
      slug: "training-data",
      title: "Training Data & Why It Matters",
      description: "How AI \"learns\" — without the PhD explanation.",
      free: true,
      sections: [
        {
          type: "callout",
          variant: "info",
          content: "Module 2 — How Does It Actually Work? Enough to not feel lost in any conversation.",
        },
        {
          type: "text",
          content:
            "AI doesn't learn the way you do. You learn from experience, reasoning, and being corrected by other people. AI learns from data. Lots and lots of data.\n\n### What Is Training Data?\n\nBefore an AI model can be useful, it gets \"trained\" by processing massive amounts of text, images, or other data. For a language model like ChatGPT:\n\n- Books — millions of them\n- Websites — a significant chunk of the public internet\n- Code — from open-source repositories\n- Articles, papers, forums, conversations\n\nThe model reads all of this and learns patterns: what words tend to follow other words, how sentences are structured, what good writing looks like, how code works.\n\n### Why Training Data Matters\n\n**It determines what the AI knows.** If something wasn't in the training data, the AI doesn't know about it. That's why AI has a \"knowledge cutoff\" — a date after which it doesn't have information.\n\n**It determines the AI's biases.** If the training data contains biases (and it does, because the internet does), the AI can reproduce those biases. This is a real problem the industry is actively working on.\n\n**It determines quality.** Better data = better AI. This is why companies spend billions collecting and cleaning training data.\n\n### The Simple Analogy\n\nImagine you read every book in a library and every page on the internet. You'd start to notice patterns — how people write, what questions get asked, how problems get solved. Now imagine someone asks you a question. You don't look up the answer — you predict what the best answer would be based on everything you've read.\n\nThat's essentially what AI does. Except it reads billions of pages and finds patterns no human could.",
        },
        {
          type: "quiz",
          quiz: {
            question: "Why does AI sometimes give outdated information?",
            options: [
              "It's too lazy to look things up",
              "Its training data has a cutoff date — it doesn't know about things after that date",
              "It deliberately gives old information",
              "The internet connection is slow",
            ],
            correctIndex: 1,
            explanation: "AI models are trained on data up to a certain date. Anything that happened after that date isn't in their training data, so they don't know about it.",
          },
        },
      ],
    },
    {
      slug: "what-is-a-model",
      title: "What Is a Model?",
      description: "No math, just clarity.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "You'll hear the word \"model\" constantly in AI. GPT-4, Claude Sonnet, Gemini Pro — these are all models. Here's what that actually means.\n\n### A Model Is a Pattern-Matching Machine\n\nAfter processing all that training data, the result is a \"model\" — a massive mathematical system that has learned patterns. Think of it like this:\n\n- **Training data** = the textbooks\n- **Training process** = studying the textbooks\n- **The model** = the brain after studying\n\nThe model doesn't store copies of the data. It stores patterns, relationships, and probabilities. When you ask it a question, it uses those patterns to generate the most likely good response.\n\n### Why Are There Different Models?\n\nDifferent companies train different models on different data with different approaches:\n\n- **GPT-4o** (OpenAI) — Great all-rounder, good at conversation and vision\n- **Claude Sonnet** (Anthropic) — Excellent at long documents, analysis, and following instructions\n- **Gemini Pro** (Google) — Strong with Google ecosystem and multimodal tasks\n- **Llama** (Meta) — Open source, anyone can use and modify it\n\nBigger models generally produce better results but cost more to run. That's why companies offer different sizes (like Claude Haiku for fast/cheap tasks vs. Claude Opus for complex ones).\n\n### Parameters: The Model's \"Knowledge\"\n\nYou might hear that GPT-4 has \"over a trillion parameters.\" Parameters are the internal numbers the model learned during training — they encode all the patterns. More parameters generally means more capability, but it's not the only factor. Training data quality and training methods matter just as much.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What is an AI model?",
            options: [
              "A database that stores copies of everything on the internet",
              "A pattern-matching system that learned from training data",
              "A robot that can think for itself",
              "A search engine like Google",
            ],
            correctIndex: 1,
            explanation: "A model is the result of training — a system that learned patterns from data. It doesn't store copies of data; it stores patterns and probabilities to generate responses.",
          },
        },
      ],
    },
    {
      slug: "inputs-and-outputs",
      title: "Inputs & Outputs",
      description: "Text, images, voice, code — what AI can take in and give back.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "AI models work on a simple loop: you give it an input, it gives you an output. What's changed is how many types of inputs and outputs are now possible.\n\n### What AI Can Take In (Inputs)\n\n- **Text** — Questions, instructions, documents, code, data\n- **Images** — Photos, screenshots, charts, handwritten notes\n- **Audio** — Voice recordings, music, podcasts\n- **Video** — Clips for analysis, editing, or generation\n- **Files** — PDFs, spreadsheets, presentations\n\n### What AI Can Give Back (Outputs)\n\n- **Text** — Answers, essays, emails, code, translations, summaries\n- **Images** — Art, photos, logos, design mockups (Midjourney, DALL-E)\n- **Audio** — Voice clones, music, podcast editing (ElevenLabs, Suno)\n- **Video** — Generated clips, edited footage (Runway, Sora)\n- **Code** — Full programs, debugging, explanations\n- **Structured data** — JSON, spreadsheets, reports\n\n### Multimodal AI\n\nThe latest models are \"multimodal\" — they can handle multiple types of input and output in the same conversation. You can upload a photo of a whiteboard and ask AI to turn it into a formatted document. Or paste a spreadsheet and ask for a chart. Or describe an image and have it created.\n\n### The Practical Takeaway\n\nDon't think of AI as just a chatbot. Think of it as a tool that can process almost any type of information and transform it into almost any other type. Text to image. Voice to text. Data to insights. That's the real power.",
        },
        {
          type: "callout",
          variant: "tip",
          content: "You don't need to memorize all of this. The point is knowing what's possible. When you have a task, ask yourself: could AI help with this? The answer is yes more often than you'd think.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What does \"multimodal\" AI mean?",
            options: [
              "AI that only works with text",
              "AI that can handle multiple types of input and output (text, images, audio, etc.)",
              "AI that runs on multiple computers",
              "AI that speaks multiple languages",
            ],
            correctIndex: 1,
            explanation: "Multimodal AI can process and generate different types of content — text, images, audio, video — in the same conversation. Most modern AI tools are multimodal.",
          },
        },
      ],
    },
    // ── Module 3: The AI Landscape Right Now ──
    {
      slug: "the-big-names",
      title: "The Big Names in AI",
      description: "OpenAI, Anthropic, Google, Meta — what each one is building.",
      free: true,
      sections: [
        {
          type: "callout",
          variant: "info",
          content: "Module 3 — The AI Landscape Right Now. Who the players are and what they do.",
        },
        {
          type: "text",
          content:
            "The AI space has a few major players. Here's who they are and why you should care.\n\n### OpenAI\n**Known for:** ChatGPT, GPT-4, DALL-E\n\nThe company that brought AI to the mainstream. ChatGPT hit 100 million users in 2 months. Their models power thousands of apps and tools. If you've used AI, there's a good chance it was OpenAI under the hood.\n\n### Anthropic\n**Known for:** Claude\n\nFounded by former OpenAI researchers who wanted to focus on AI safety. Claude is known for being excellent at long documents, following complex instructions, and coding. Many developers and professionals prefer Claude over ChatGPT for serious work.\n\n### Google\n**Known for:** Gemini (formerly Bard)\n\nGoogle has been doing AI research longer than anyone. Gemini is deeply integrated with Google's ecosystem — Search, Gmail, Docs, YouTube. Strong at multimodal tasks (mixing text, images, and video).\n\n### Meta\n**Known for:** Llama (open source models)\n\nMeta took a different approach: they released their AI models as open source, meaning anyone can download, use, and modify them for free. This has been a game-changer for developers and startups who want to build AI products without paying per-use fees.\n\n### The Image and Video Players\n\n- **Midjourney** — The leading AI image generator. Type a description, get a stunning image.\n- **Runway** — AI video generation and editing\n- **ElevenLabs** — AI voice cloning and text-to-speech\n- **Stability AI** — Open source image generation",
        },
        {
          type: "quiz",
          quiz: {
            question: "Which company released their AI models as open source for anyone to use?",
            options: ["OpenAI", "Anthropic", "Google", "Meta"],
            correctIndex: 3,
            explanation: "Meta released their Llama models as open source, allowing anyone to download, use, and modify them. This has been a major catalyst for AI development globally.",
          },
        },
      ],
    },
    {
      slug: "tools-you-can-use-today",
      title: "Tools You Can Use Today",
      description: "ChatGPT, Claude, Gemini, Perplexity — a guided tour.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "Here are the AI tools you should actually try. All of them have free tiers.\n\n### ChatGPT (chat.openai.com)\n**Best for:** General questions, brainstorming, writing, casual conversation\n\nThe one everyone knows. Great starting point. The free tier gives you GPT-4o mini which is surprisingly good. Paid ($20/mo) gives you the full GPT-4o and image generation.\n\n### Claude (claude.ai)\n**Best for:** Long documents, detailed analysis, following specific instructions, coding\n\nMy personal favorite for serious work. If you paste a 50-page document and ask it to summarize the key points, Claude handles it beautifully. Free tier is generous.\n\n### Gemini (gemini.google.com)\n**Best for:** Anything connected to Google (search, email, docs), research\n\nIf you live in the Google ecosystem, Gemini integrates directly with your Gmail, Drive, and Docs. Good for research since it can access current web information.\n\n### Perplexity (perplexity.ai)\n**Best for:** Research with sources, fact-checking, staying current\n\nThink of it as AI-powered search. Unlike ChatGPT or Claude, Perplexity always cites its sources so you can verify information. Great for research and staying informed.\n\n### Which One Should You Start With?\n\nStart with **ChatGPT** (it's the easiest) and **Claude** (it's the most capable for free). Use both for a week and you'll quickly learn which one you prefer for different tasks.",
        },
        {
          type: "callout",
          variant: "tip",
          content: "Open ChatGPT and Claude right now in separate tabs. Ask both the same question and compare the responses. You'll immediately see they have different strengths.",
        },
        {
          type: "quiz",
          quiz: {
            question: "Which AI tool is best for research with cited sources?",
            options: ["ChatGPT", "Claude", "Perplexity", "Midjourney"],
            correctIndex: 2,
            explanation: "Perplexity is designed for research — it always cites its sources so you can verify the information. It's like AI-powered search with receipts.",
          },
        },
      ],
    },
    {
      slug: "free-vs-paid",
      title: "Free vs. Paid",
      description: "What you actually need to get started (spoiler: not much).",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "You do not need to pay for anything to start using AI effectively. Here's an honest breakdown.\n\n### What You Get for Free\n\n| Tool | Free Tier | What You Get |\n|------|-----------|-------------|\n| ChatGPT | Yes | GPT-4o mini, unlimited basic chat |\n| Claude | Yes | Claude Sonnet, generous daily limits |\n| Gemini | Yes | Full Gemini Pro, Google integration |\n| Perplexity | Yes | 5 Pro searches/day, unlimited basic |\n| Midjourney | Trial | ~25 free image generations |\n\n### When to Consider Paying\n\n**ChatGPT Plus ($20/mo)** — Worth it if you use it daily for work. Full GPT-4o, image generation, file uploads, and custom GPTs.\n\n**Claude Pro ($20/mo)** — Worth it if you hit the free tier limits regularly. More usage, priority access.\n\n**Perplexity Pro ($20/mo)** — Worth it if you do heavy research.\n\n### My Honest Recommendation\n\nStart free. Use AI every day for 2 weeks. After that, you'll know exactly which tool you use most — pay for that one and only that one. Most people need at most one paid AI subscription.\n\n### What NOT to Pay For\n\n- Random \"AI tools\" that are just wrappers around ChatGPT with a markup\n- AI courses that charge hundreds of dollars (this one's free for a reason)\n- \"AI productivity bundles\" that combine tools you don't need\n\nIf a tool's main feature is something ChatGPT or Claude can already do, you probably don't need it.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the best approach to paying for AI tools?",
            options: [
              "Pay for everything to get the best experience",
              "Never pay — free tools are always enough",
              "Start free, use AI daily for 2 weeks, then pay for the one you use most",
              "Only pay for tools that cost over $50/month",
            ],
            correctIndex: 2,
            explanation: "Start free and experiment. After 2 weeks of daily use, you'll know which tool you rely on. Pay for that one. Most people need at most one paid AI subscription.",
          },
        },
      ],
    },
    // ── Module 4: Prompting 101 ──
    {
      slug: "what-is-a-prompt",
      title: "What Is a Prompt?",
      description: "And why most people do it wrong.",
      free: true,
      sections: [
        {
          type: "callout",
          variant: "info",
          content: "Module 4 — Prompting 101. The skill that unlocks everything.",
        },
        {
          type: "text",
          content:
            "A prompt is the instruction you give to AI. It's how you talk to it. And the quality of your prompt determines the quality of the response — every single time.\n\n### Why Most People Get Bad Results\n\nMost people type something like:\n\n\"Write me an email\"\n\nAnd then complain that AI gives generic, useless responses. The problem isn't the AI. The problem is the prompt.\n\n### The Difference Is Night and Day\n\n**Vague prompt:** \"Write me an email\"\n→ Generic, could be for anyone, about anything.\n\n**Good prompt:** \"Write a follow-up email to a potential client I met at a tech conference last week. I offer AI consulting for small businesses. Keep it under 100 words, professional but warm. Mention that I enjoyed our conversation about automating their customer support.\"\n→ Specific, personal, actually useful.\n\nSame AI. Same model. Completely different results.\n\n### The Rule of Thumb\n\nIf your prompt is one sentence, your result will be generic.\nIf your prompt includes what you want, who it's for, and how it should look — you'll get something great.\n\nThe next two lessons teach you exactly how to do this every time.",
        },
        {
          type: "callout",
          variant: "tip",
          content: "Try it right now. Open ChatGPT or Claude. Type 'Write me an email.' Then try the detailed version above. Compare the two results. This is the difference prompting makes.",
        },
        {
          type: "quiz",
          quiz: {
            question: "Why do most people get mediocre results from AI?",
            options: [
              "AI tools are bad",
              "The free tiers are limited",
              "Their prompts are too vague — they don't give enough detail",
              "AI only works well for technical people",
            ],
            correctIndex: 2,
            explanation: "Vague prompts get vague results. The fix is simple: tell AI what you want, who it's for, and how it should look. More detail = better output.",
          },
        },
      ],
    },
    {
      slug: "the-simple-formula",
      title: "The Simple Formula",
      description: "Role + Task + Context + Format — works every time.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "Here's a formula that makes any prompt better. You don't need to memorize it — just remember the four parts.\n\n### Role + Task + Context + Format\n\n**Role** — Tell the AI who to be.\n\"You are an experienced marketing consultant.\"\n\n**Task** — Say exactly what you want.\n\"Write 3 Instagram caption ideas for a product launch.\"\n\n**Context** — Give background info.\n\"The product is a free AI course for beginners. Target audience is young professionals who want to learn AI but don't know where to start.\"\n\n**Format** — Describe how you want the output.\n\"Each caption should be under 150 characters. Include a call-to-action. Use a casual, energetic tone.\"\n\n### Putting It Together\n\nHere's the full prompt:\n\n\"You are an experienced marketing consultant. Write 3 Instagram caption ideas for a product launch. The product is a free AI course for beginners. Target audience is young professionals who want to learn AI but don't know where to start. Each caption should be under 150 characters. Include a call-to-action. Use a casual, energetic tone.\"\n\nCopy that into ChatGPT or Claude. The result will be significantly better than just typing \"write me some Instagram captions.\"\n\n### You Don't Need All Four Every Time\n\nFor simple tasks, Task + Context is usually enough. But for anything important — content, emails, analysis, planning — using all four parts makes a massive difference.",
        },
        {
          type: "callout",
          variant: "tip",
          content: "Practice: Open ChatGPT or Claude and try building prompts with this formula for 3 different tasks — an email, a social post, and a meal plan. Notice how the quality changes when you add Role, Context, and Format.",
        },
        {
          type: "quiz",
          quiz: {
            question: "In the Role + Task + Context + Format formula, what does 'Context' do?",
            options: [
              "Tells AI which language to respond in",
              "Gives background info so AI understands your specific situation",
              "Sets a time limit on the response",
              "Tells AI which model to use",
            ],
            correctIndex: 1,
            explanation: "Context gives the AI your background information — who the audience is, what the situation is, what you've already tried. It personalizes the response to your specific needs.",
          },
        },
      ],
    },
    {
      slug: "five-prompts-that-work",
      title: "5 Prompts That Actually Work",
      description: "Real examples with before-and-after rewrites.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "Here are 5 common tasks with bad prompts and good prompts side by side. Try both versions in ChatGPT or Claude.\n\n### 1. Writing a Bio\n\n❌ \"Write me a bio\"\n\n✅ \"Write a 2-sentence professional bio for a self-taught software engineer who builds AI tools. Tone: confident but approachable. Mention that I teach AI to beginners through free online courses.\"\n\n### 2. Summarizing Something\n\n❌ \"Summarize this article\" (pastes article)\n\n✅ \"Summarize this article in 5 bullet points. Each bullet should be one sentence. Focus on actionable takeaways, not background info.\" (pastes article)\n\n### 3. Brainstorming Ideas\n\n❌ \"Give me business ideas\"\n\n✅ \"Give me 10 side hustle ideas that use AI tools. I have no technical background, 5-10 hours per week, and under $100 to start. For each idea, include: what it is, who would pay for it, and estimated monthly income.\"\n\n### 4. Writing an Email\n\n❌ \"Help me write an email to my boss\"\n\n✅ \"Write a short email to my manager requesting to work from home on Fridays. I want to frame it around productivity — I get more focused work done at home. Keep it professional and under 100 words. My manager values data, so include a brief mention of a study on remote work productivity.\"\n\n### 5. Learning Something New\n\n❌ \"Explain machine learning\"\n\n✅ \"Explain machine learning to someone with zero technical background. Use a real-world analogy. Keep it under 200 words. No jargon — if you use a technical term, define it immediately.\"\n\n### The Pattern\n\nEvery good prompt has the same ingredients: **be specific about what you want, who it's for, and how it should look.** That's it. Copy any of these into ChatGPT or Claude right now and see the difference.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What do all good prompts have in common?",
            options: [
              "They're at least 500 words long",
              "They use technical language",
              "They're specific about what, who, and how",
              "They always start with 'please'",
            ],
            correctIndex: 2,
            explanation: "Good prompts are specific: what do you want, who is it for, and how should it look. Length doesn't matter — clarity does.",
          },
        },
      ],
    },
    // ── Module 5: Real-World Use Cases ──
    {
      slug: "ai-for-everyday-life",
      title: "AI for Everyday Life",
      description: "Writing, planning, research, summarizing — practical uses right now.",
      free: true,
      sections: [
        {
          type: "callout",
          variant: "info",
          content: "Module 5 — Real-World Use Cases. Make it personal and practical.",
        },
        {
          type: "text",
          content:
            "AI isn't just for work. Here's how to use it in your daily life starting today.\n\n### Writing Anything\n- Draft emails you've been putting off\n- Write thank-you notes, complaints, or tricky messages\n- Get help with cover letters and resumes\n- Edit your own writing: \"Make this clearer and more concise\"\n\n### Planning & Organizing\n- Plan meals for the week based on what's in your fridge\n- Create a travel itinerary: \"Plan a 3-day trip to Chicago, budget $500, I like food and architecture\"\n- Break a big goal into weekly action steps\n- Organize your schedule: paste your commitments and ask AI to prioritize\n\n### Research & Learning\n- \"Explain [any topic] like I'm a complete beginner\"\n- Compare options: \"What are the pros and cons of buying vs. leasing a car?\"\n- Summarize long articles: paste the text and ask for key takeaways\n- Learn a new skill: \"Give me a 30-day learning plan for [topic]\"\n\n### Decision Making\n- \"I'm deciding between [A] and [B]. Here's my situation: [context]. Think through the pros and cons step by step.\"\n- \"What questions should I ask before [big decision]?\"\n- \"Play devil's advocate on this decision: [your plan]\"\n\n### The Key Mindset\n\nAnytime you're about to spend 20+ minutes on a task that involves writing, research, planning, or decision-making — ask yourself: could AI help with this? The answer is almost always yes.",
        },
        {
          type: "quiz",
          quiz: {
            question: "When should you consider using AI?",
            options: [
              "Only for complicated technical tasks",
              "Only at work",
              "Anytime you're spending 20+ minutes on writing, research, planning, or decisions",
              "Only when the free tools can't do it",
            ],
            correctIndex: 2,
            explanation: "If a task involves writing, research, planning, or decisions and would take you 20+ minutes — try AI first. You'll be surprised how often it saves you significant time.",
          },
        },
      ],
    },
    {
      slug: "ai-for-work-and-business",
      title: "AI for Work & Business",
      description: "Marketing, ops, customer service, content — where AI saves real time.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "Whether you work a 9-to-5 or run your own thing, AI can make you dramatically faster at your job.\n\n### Marketing & Content\n- Generate social media post ideas for the entire month\n- Write first drafts of blog posts, newsletters, and ad copy\n- Repurpose one piece of content across platforms: \"Turn this blog post into 5 tweets and a LinkedIn post\"\n- Analyze competitors: paste their website copy and ask \"What messaging are they using?\"\n\n### Operations & Admin\n- Draft SOPs (standard operating procedures) for any process\n- Summarize meeting notes into action items\n- Create templates: \"Build me an onboarding email template for new clients\"\n- Clean up data: paste messy data and ask AI to organize it\n\n### Customer Service\n- Draft responses to common customer questions\n- Create a FAQ document: \"Based on these 20 customer emails, what are the top 10 questions and best answers?\"\n- Write professional responses to complaints\n\n### Strategy & Planning\n- \"I'm launching [product/service]. Create a 90-day marketing plan with specific tactics for each month.\"\n- \"Analyze these sales numbers and tell me what trends you see\" (paste data)\n- \"What are 5 ways I could reduce costs in my business?\" (give context about your business)\n\n### The Competitive Advantage\n\nMost people in your industry aren't using AI well yet. If you start now, you'll be 2-3x more productive than your peers. That gap will only widen as AI improves.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the biggest advantage of using AI at work right now?",
            options: [
              "It replaces the need for a team",
              "Most people aren't using it well yet — learning now gives you a competitive edge",
              "It eliminates all mistakes",
              "It's required by most employers",
            ],
            correctIndex: 1,
            explanation: "Most people in most industries aren't using AI effectively yet. Learning now puts you ahead. That advantage gets bigger as AI improves and the gap widens.",
          },
        },
      ],
    },
    {
      slug: "ai-for-builders-and-creators",
      title: "AI for Builders & Creators",
      description: "Prototyping, idea generation, and turning ideas into real things.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "If you want to build things — products, content, businesses — AI is the most powerful tool you've ever had access to.\n\n### Turning Ideas Into Reality\n\nBefore AI, going from idea to prototype required either technical skills or money to hire someone. Now:\n\n- **Want a website?** Describe it to AI and use a no-code builder to create it\n- **Want an app?** Describe the features and let AI help you build it with tools like Cursor or Bolt\n- **Want a course?** AI can help you outline, write, and structure the entire thing\n- **Want a business?** AI can write your business plan, create your marketing, and build your systems\n\n### Content Creation\n\n- Write scripts for videos and podcasts\n- Generate thumbnails and graphics with Midjourney or DALL-E\n- Turn a 30-minute video into blog posts, tweets, and newsletter content\n- Create lead magnets (free guides, checklists, templates) in an afternoon\n\n### Prototyping & Testing\n\n- Build a landing page to test an idea before building the full product\n- Create a mockup of an app or tool to show potential users\n- Write product descriptions and sales copy to test messaging\n- Build automated workflows with tools like Zapier + AI\n\n### The Mindset Shift\n\nThe barrier to building used to be: \"Do I have the skills?\" Now it's: \"Do I have the idea?\" AI handles the execution. You provide the vision, the taste, and the judgment. That's the new game.\n\n### What's Next\n\nIf this excites you, our **Building with AI** course (coming soon) walks you through building real projects step by step — lead magnets, content systems, chatbots, digital products, and automations. All with no code.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the biggest shift AI creates for builders and creators?",
            options: [
              "You don't need ideas anymore",
              "The barrier moves from 'do I have the skills?' to 'do I have the idea?'",
              "AI builds everything perfectly with no guidance",
              "You no longer need to understand your audience",
            ],
            correctIndex: 1,
            explanation: "AI handles more and more of the execution. The new competitive advantage is having good ideas, taste, and judgment — not technical skills alone.",
          },
        },
      ],
    },
    // ── Module 6: What's Next & What to Watch ──
    {
      slug: "what-ai-cant-do",
      title: "What AI Still Can't Do",
      description: "Important limitations to understand — and why they matter.",
      free: true,
      sections: [
        {
          type: "callout",
          variant: "info",
          content: "Module 6 — What's Next & What to Watch. Leave informed and ready.",
        },
        {
          type: "text",
          content:
            "AI is powerful, but it's not magic. Understanding its limitations makes you a better user.\n\n### It Doesn't Know If It's Right\n\nAI can be confidently wrong. It doesn't \"know\" things — it predicts what a good response looks like based on patterns. Sometimes that prediction is wrong, and the AI has no way of knowing. This is called a **hallucination.**\n\n**What to do:** Always verify important information. Don't trust AI with facts you haven't checked — especially medical, legal, or financial advice.\n\n### It Doesn't Truly Understand\n\nAI processes language as math. It can produce a beautiful essay about grief without ever experiencing an emotion. It can explain physics without understanding what gravity feels like. It's pattern matching, not comprehension.\n\n**What to do:** Use AI as a starting point, not the final word. Your judgment, experience, and context are things AI doesn't have.\n\n### It Can't Access Real-Time Information (Usually)\n\nMost AI models have a knowledge cutoff date. They don't know what happened yesterday unless they have web access (some tools like Perplexity do). Basic ChatGPT and Claude are working from their training data.\n\n**What to do:** For current events and recent information, use Perplexity or tools with web access.\n\n### It Reflects Its Training Data (Including Biases)\n\nIf bias exists in the data AI was trained on, it can appear in AI outputs. This is a known problem the industry is working on but hasn't solved.\n\n**What to do:** Be aware of this. Question outputs that seem biased. Don't use AI as the sole decision-maker for hiring, lending, or anything that affects people's lives.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What is an AI 'hallucination'?",
            options: [
              "When AI generates images",
              "When AI confidently produces incorrect information",
              "When AI becomes self-aware",
              "When AI runs out of computing power",
            ],
            correctIndex: 1,
            explanation: "A hallucination is when AI confidently states something that's incorrect. It happens because AI predicts likely responses — not because it knows something is true. Always verify important information.",
          },
        },
      ],
    },
    {
      slug: "ethics-and-bias",
      title: "Ethics, Bias & The Stuff Worth Caring About",
      description: "The responsible side of AI — real issues, not fear-mongering.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "AI is a tool. Like any powerful tool, how it's used matters. Here's what's worth thinking about — no doom and gloom, just honest awareness.\n\n### Privacy\n\nWhen you use ChatGPT, Claude, or any AI tool — the data you share could be used to improve their models (unless you opt out). Don't paste confidential business data, passwords, personal medical records, or sensitive information into AI tools without checking their data policies.\n\n**The move:** Most tools have settings to opt out of training data collection. Check them. For truly sensitive work, use tools that guarantee your data isn't used for training.\n\n### Jobs\n\nAI won't replace everyone. But it will change what every job looks like. Tasks that are repetitive and predictable will be automated. Tasks that require creativity, empathy, judgment, and human connection will become more valuable.\n\n**The move:** Instead of fearing AI, learn to use it. The people who combine human skills with AI tools will be the most valuable workers in every industry.\n\n### Intellectual Property\n\nWho owns AI-generated content? If AI was trained on an artist's work without permission, is the output ethical? These questions are being debated in courts and legislatures right now. There's no clear answer yet.\n\n**The move:** Use AI as a starting point and add your own voice, perspective, and edits. The combination of AI efficiency and human creativity is both more ethical and more valuable.\n\n### Deepfakes & Misinformation\n\nAI can create realistic fake images, audio, and video. This makes misinformation easier to create and harder to detect.\n\n**The move:** Be skeptical of content that seems designed to provoke an emotional reaction. Check sources. As AI gets better, media literacy becomes more important than ever.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the smartest approach to AI and your career?",
            options: [
              "Avoid AI to protect your job",
              "Learn AI because it will replace your job no matter what",
              "Learn to combine human skills with AI tools — that's the most valuable position",
              "Only use AI if your employer requires it",
            ],
            correctIndex: 2,
            explanation: "The most valuable people will be those who combine human skills (creativity, empathy, judgment) with AI tools. Not pure AI, not avoiding AI — the combination.",
          },
        },
      ],
    },
    {
      slug: "your-next-step",
      title: "Your Next Step",
      description: "How to go from knowing to building.",
      free: true,
      sections: [
        {
          type: "text",
          content:
            "You made it through the entire course. You now understand more about AI than 90% of people. Here's what to do with that knowledge.\n\n### This Week: Build the Habit\n\n1. **Use AI every single day.** Even for small things — emails, planning, research. The more you use it, the better you get at prompting.\n2. **Try at least 2 tools.** Use both ChatGPT and Claude. Compare them. Find your preference.\n3. **Save prompts that work.** When you get a great result, save the prompt somewhere. Start building your personal prompt library.\n\n### This Month: Go Deeper\n\n1. **Pick one area** — writing, research, content creation, business — and really learn how to use AI for that one thing.\n2. **Join the community.** Connect with other people learning AI. Share what you're discovering. Ask questions.\n3. **Build something.** Even something small — a lead magnet, a content calendar, an automated email. Going from knowing to doing is the biggest leap.\n\n### Keep Learning\n\nAI changes fast. Stay current by:\n- Following AI news on Twitter/X and YouTube\n- Trying new tools as they launch\n- Joining communities (like ours) where people share what's working\n\n### What khalifbuildsai Offers Next\n\nThis was the foundation. If you want to go deeper:\n\n- **Building with AI** (coming soon) — Build real projects step by step using AI and no-code tools. Lead magnets, content systems, chatbots, digital products, and automations.\n\n- **The Community** (free on Discord) — Connect with other people learning and building with AI. Share wins, get feedback, and stay accountable.",
        },
        {
          type: "callout",
          variant: "tip",
          content: "The biggest gap in AI isn't between people who know about it and people who don't. It's between people who USE it and people who just read about it. You've read about it. Now go use it. Every day. That's the whole game.",
        },
        {
          type: "quiz",
          quiz: {
            question: "What's the most important thing to do after finishing this course?",
            options: [
              "Read more articles about AI",
              "Wait for AI to get better before using it",
              "Use AI every single day on real tasks — build the habit",
              "Memorize everything from this course",
            ],
            correctIndex: 2,
            explanation: "Knowing about AI is step one. Using it daily is what actually changes things. Start with small tasks, build the habit, and you'll naturally get better at prompting and finding use cases.",
          },
        },
      ],
    },
  ],
};
