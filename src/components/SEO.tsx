// src/components/SEO.tsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const BASE_URL = "https://amritagupta.com.np";
const DEFAULT_TITLE = "Samrita Collection — Loksewa Computer Operator & IT Preparation Portal";
const DEFAULT_DESCRIPTION = "Nepal's premier open-access Loksewa Computer Operator, IT Officer & Corporate Exam Suite. 15,000+ MCQs, 74+ Old Question Papers, Mock Exams & Typing Practice.";
const DEFAULT_KEYWORDS = "Loksewa Nepal, Computer Operator Preparation, IT Officer Exam, Loksewa MCQ, Preeti Typing Test, Past Papers 2082, Amrita Gupta, Samrita Collection";
const DEFAULT_OG_IMAGE = "https://amritagupta.com.np/logo.png";

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Page Title
    const fullTitle = title 
      ? `${title} | Samrita Collection`
      : DEFAULT_TITLE;
    document.title = fullTitle;

    // 2. Canonical URL
    const canonicalUrl = canonical 
      ? canonical 
      : `${BASE_URL}${location.pathname === "/" ? "" : location.pathname}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 3. Helper for meta tags
    const setMetaTag = (selector: string, attr: string, key: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard Meta Tags
    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[name="keywords"]', "name", "keywords", keywords);
    setMetaTag('meta[name="author"]', "name", "author", "Amrita Gupta");
    setMetaTag('meta[name="robots"]', "name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Open Graph (Facebook / LinkedIn)
    setMetaTag('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:image"]', "property", "og:image", ogImage);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "Samrita Collection");

    // Twitter Cards
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMetaTag('meta[name="twitter:image"]', "name", "twitter:image", ogImage);

  }, [title, description, keywords, canonical, ogImage, ogType, noindex, location.pathname]);

  return null;
};

export default SEO;
