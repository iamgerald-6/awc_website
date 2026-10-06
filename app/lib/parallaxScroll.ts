/** Single rAF loop for all parallax layers — avoids scroll jank. */

type Subscriber = () => void;

const subscribers = new Set<Subscriber>();
let listening = false;
let rafId = 0;

function tick() {
  subscribers.forEach((fn) => fn());
  rafId = 0;
}

function onScroll() {
  if (rafId !== 0) return;
  rafId = requestAnimationFrame(tick);
}

function ensureListener() {
  if (listening || subscribers.size === 0) return;
  listening = true;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}

function maybeRemoveListener() {
  if (subscribers.size > 0) return;
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
}

export function subscribeParallax(fn: Subscriber) {
  subscribers.add(fn);
  ensureListener();
  fn();
  return () => {
    subscribers.delete(fn);
    maybeRemoveListener();
  };
}
