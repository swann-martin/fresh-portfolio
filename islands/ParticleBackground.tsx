import { useEffect } from "preact/hooks";

export default function ParticleBackground() {
  useEffect(() => {
    const loadParticles = async () => {
      try {
        // Dynamic import of tsParticles
        const tsParticles = await import(
          "https://cdn.jsdelivr.net/npm/tsparticles@2.9.3/+esm"
        );

        // Initialize tsParticles
        await tsParticles.default.load("tsparticles", {
          fpsLimit: 60,
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          particles: {
            color: {
              value: "#6366f1", // Indigo color
            },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        });
      } catch (error) {
        console.error("Failed to load particles:", error);
      }
    };

    loadParticles();

    return () => {
      // Clean up particles if needed
      const container = document.getElementById("tsparticles");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      id="tsparticles"
      class="fixed inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
