function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M14 8.5h2.5l-.5 3H14v9h-3.5v-9H9V8.5h1.5V6.8c0-2 1.2-3.3 3.2-3.3H14v3h-1.4c-.8 0-.9.4-.9 1v1.8z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SocialIcon({ platform }: { platform: 'instagram' | 'facebook' }) {
  return platform === 'instagram' ? <InstagramIcon /> : <FacebookIcon />;
}
