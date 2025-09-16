export default function ParticleBackground() {
  return (
    <div
      class="fixed inset-0 w-full h-full pointer-events-none opacity-30"
      aria-hidden="true"
    >
      {/* Simple CSS-based particle effect as fallback */}
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400/20 rounded-full animate-pulse"></div>
      <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/20 rounded-full animate-pulse" style="animation-delay: 1s"></div>
      <div class="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-pink-400/20 rounded-full animate-pulse" style="animation-delay: 2s"></div>
      <div class="absolute top-1/2 right-1/4 w-1 h-1 bg-indigo-400/20 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
    </div>
  );
}
