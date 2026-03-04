/**
 * Trusted domains allowed for https href attributes.
 * Only https URLs whose host is in this list (or a subdomain) are allowed.
 */
const TRUSTED_DOMAINS = [
    "github.com",
    "www.github.com",
    "linkedin.com",
    "www.linkedin.com",
    "raw.githubusercontent.com",
    "docs.google.com",
    "vercel.app",
    "adityarao-portfolio.vercel.app",
] as const;

/** Allowed non-https schemes (e.g. mailto, tel, hash-only). */
const ALLOWED_SCHEMES = ["mailto:", "tel:"] as const;

/**
 * Validates and sanitizes a URL for use in href attributes.
 * - Allows https only from trusted domains (and their subdomains).
 * - Allows mailto: and tel: for contact links.
 * - Allows hash-only anchors (#section).
 * Returns the URL if valid, otherwise "#" to prevent XSS or open redirects.
 */
export function sanitizeHref(url: string | undefined | null): string {
    if (url == null || typeof url !== "string") {
        return "#";
    }
    const trimmed = url.trim();
    if (trimmed === "" || trimmed === "#") {
        return "#";
    }

    // Allow hash-only (same-page anchors)
    if (trimmed.startsWith("#")) {
        return trimmed;
    }

    // Allow mailto: and tel: (optional: could validate email/phone format)
    for (const scheme of ALLOWED_SCHEMES) {
        if (trimmed.toLowerCase().startsWith(scheme)) {
            return trimmed;
        }
    }

    // For web URLs, require https and trusted domain
    let parsed: URL;
    try {
        parsed = new URL(trimmed);
    } catch {
        return "#";
    }

    if (parsed.protocol !== "https:") {
        return "#";
    }

    const hostname = parsed.hostname.toLowerCase();
    const isTrusted = TRUSTED_DOMAINS.some((domain) => {
        return hostname === domain || hostname.endsWith("." + domain);
    });

    return isTrusted ? trimmed : "#";
}
