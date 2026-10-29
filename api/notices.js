// Serverless API route to fetch & parse TU Service Commission notices
export default async function handler(req, res) {
  // CORS & Caching headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const response = await fetch("https://tusc.tu.edu.np/notices", {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9,ne;q=0.8",
      },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Upstream returned ${response.status}`);
    }

    const html = await response.text();
    const notices = [];

    // 1. Parse from main listing (recent-post-wrapper)
    const parts = html.split('<div class="recent-post-wrapper');
    for (let i = 1; i < parts.length; i++) {
      const chunk = parts[i];
      const dateMatch = chunk.match(/<span class="nep_date">([\s\S]*?)<\/span>/);
      const linkMatch = chunk.match(/<a href="(https:\/\/tusc\.tu\.edu\.np\/notices\/(\d+))"[\s\S]*?<h5[^>]*>([\s\S]*?)<\/h5>/);
      if (linkMatch) {
        const date = dateMatch ? dateMatch[1].trim() : "";
        const url = linkMatch[1].trim();
        const id = linkMatch[2].trim();
        const title = linkMatch[3].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

        let category = "सूचना (General)";
        if (title.includes("नतिजा")) category = "नतिजा (Result)";
        else if (title.includes("अन्तर्वार्ता")) category = "अन्तर्वार्ता (Interview)";
        else if (title.includes("दरखास्त") || title.includes("विज्ञापन")) category = "विज्ञापन (Vacancy)";
        else if (title.includes("पुनर्योग")) category = "पुनर्योग (Re-totaling)";
        else if (title.includes("नामावली")) category = "नामावली (List)";

        notices.push({ id, title, date, url, category, isRecent: true });
      }
    }

    // 2. Also parse ticker marquee items
    const tickerRegex = /<li class="me-4">[\s\S]*?<a href="(https:\/\/tusc\.tu\.edu\.np\/notices\/(\d+))">([\s\S]*?)<\/a>/g;
    let match;
    while ((match = tickerRegex.exec(html)) !== null) {
      const url = match[1].trim();
      const id = match[2].trim();
      const title = match[3].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      if (title && !notices.some((n) => n.id === id)) {
        let category = "सूचना (General)";
        if (title.includes("नतिजा")) category = "नतिजा (Result)";
        else if (title.includes("अन्तर्वार्ता")) category = "अन्तर्वार्ता (Interview)";
        else if (title.includes("दरखास्त") || title.includes("विज्ञापन")) category = "विज्ञापन (Vacancy)";
        else if (title.includes("पुनर्योग")) category = "पुनर्योग (Re-totaling)";
        else if (title.includes("नामावली")) category = "नामावली (List)";

        notices.push({ id, title, date: "२०८१/०८२", url, category, isRecent: false });
      }
    }

    return res.status(200).json({
      success: true,
      count: notices.length,
      latestNoticeId: notices[0]?.id || null,
      latestDate: notices[0]?.date || null,
      fetchedAt: new Date().toISOString(),
      notices,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to fetch notices",
    });
  }
}
