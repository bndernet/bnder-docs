/**
 * Remove trailing slash from url
 * e.g. /docs/tmb/ -> /docs/tmb
 */
if (typeof window !== "undefined") {
    const hash = window.location.hash;
    const path = window.location.pathname;
    if (path.endsWith("/")) {
        window.history.replaceState({}, "", path.slice(0, -1) + hash);
    }
}