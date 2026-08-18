export default function linkIcon(tech) {
  return `
    <a href="${tech.href}" target="_blank" onclick="event.stopPropagation()"
      class="link-icon w-9.5 h-9.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 rounded-full flex justify-center items-center">
      <img src="https://cdn.simpleicons.org/${tech.slug}" alt="${tech.slug}" class="w-5 h-5 object-contain"
        onerror="this.style.display='none'">
    </a>`;
}