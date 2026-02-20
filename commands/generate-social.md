---
description: Generate platform-optimized social content from blog posts or topics
thinking: true
---

# Generate Social Content

**Purpose**: Transform blog posts or topics into platform-specific social content ready for distribution.

## Input

The user should provide ONE of:
1. A blog post slug (e.g., `acos-zero-to-production-quickstart`)
2. A topic or announcement to write about
3. "latest" to use the most recent blog post

## Process

### Step 1: Source the Content

If blog slug provided:
- Read the full MDX file from `content/blog/{slug}.mdx`
- Extract title, description, key points, quotes, and stats

If topic provided:
- Research the topic using available context
- Identify 3-5 key talking points

If "latest":
- Check `content/blog/` for the most recently modified file
- Read and extract content

### Step 2: Generate Platform Content

Generate content for ALL platforms in a single response:

#### X/Twitter Thread (5-8 tweets)
- **Tweet 1**: Hook — bold statement or question. No hashtags. Under 250 chars.
- **Tweets 2-6**: Key insights. Each stands alone. Use specific numbers/results.
- **Tweet 7**: CTA — link to the blog post. One line.
- **Thread format**: Each tweet separated by `---`
- **Tone**: Direct, technical, confident. No emojis. No "🧵" thread emoji.
- **Max per tweet**: 280 chars

#### LinkedIn Post (1 post)
- **Hook**: First 2 lines visible before "see more" — must grab attention
- **Body**: 150-300 words. Professional but not corporate. Personal experience angle.
- **Structure**: Short paragraphs (1-3 sentences). White space between.
- **CTA**: Soft ask — "Link in comments" or "What's your experience with X?"
- **No hashtags in body**. 3-5 hashtags at the very end, separated by line break.

#### Newsletter Snippet (for email)
- **Subject line**: Under 50 chars. Curiosity or value-driven.
- **Preview text**: 40-90 chars. Complements subject.
- **Body**: 2-3 paragraph summary. Personal voice. Links to full post.

### Step 3: Save to Queue

Save generated content to `data/social-queue.json` with:
```json
{
  "id": "social-YYYY-MMDD-slug",
  "source": "blog-slug or topic",
  "createdAt": "ISO date",
  "status": "draft",
  "platforms": {
    "twitter": { "content": [...tweets], "status": "draft" },
    "linkedin": { "content": "post text", "status": "draft" },
    "newsletter": { "subject": "", "preview": "", "body": "", "status": "draft" }
  }
}
```

### Step 4: Review Output

Display all generated content in a formatted view:
- Show each platform's content with character counts
- Flag any tweets over 280 chars
- Show the social-queue.json entry ID for reference

## Voice Rules (CRITICAL)

**DO:**
- Lead with results and specific numbers
- Use Frank's voice — direct, technical, confident
- Reference actual tools, frameworks, and workflows
- "Here's what I built" not "Here's what you should do"

**DON'T:**
- Use spiritual/guru language
- Add emojis (none, ever)
- Use "Let's dive in" or "In this thread"
- Say "game-changer", "revolutionary", "unlock"
- Use hashtags in X threads (only LinkedIn, at end)

## Example Output Format

```
=== X/TWITTER THREAD (6 tweets) ===

1/6: ACOS v7.0 shipped. 630+ skills, 40+ agents, 130+ commands — all under one auto-router.

---

2/6: The key insight: complexity detection at the input layer. Simple questions get fast answers. Multi-step workflows get full orchestration. No manual routing.

---

3/6: ...

=== LINKEDIN ===

Full post text here...

#AIArchitecture #AgenticAI #CreatorTools

=== NEWSLETTER ===

Subject: ACOS v7.0 just shipped
Preview: 630+ skills, unified orchestration
Body: ...
```

**Generate the content now.**
