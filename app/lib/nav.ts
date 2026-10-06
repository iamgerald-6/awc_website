import type { NavEntry } from "@/app/content/siteContent";

export function flattenNav(entries: readonly NavEntry[]) {
  const links: { label: string; href: string }[] = [];
  for (const entry of entries) {
    if (entry.type === "link") {
      links.push({ label: entry.label, href: entry.href });
    } else {
      for (const child of entry.children) {
        links.push({ label: child.label, href: child.href });
      }
    }
  }
  return links;
}

export function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isDropdownActive(
  pathname: string,
  children: readonly { href: string }[]
) {
  return children.some((c) => isNavActive(pathname, c.href));
}

export const WHAT_WE_DO_PREFIXES = ["/services"];

export function isWhatWeDoActive(pathname: string) {
  return WHAT_WE_DO_PREFIXES.some((p) => isNavActive(pathname, p));
}
