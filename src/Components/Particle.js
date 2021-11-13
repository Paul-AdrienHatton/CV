import Particles from "react-tsparticles";
import React from "react";

export default function Particle() {
  return (
    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          number: {
            value: 100,
            limit: 350,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#007bff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#007bff",
            },
            polygon: {
              nb_sides: 4,
            },
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 0.2,
            random: true,
            anim: {
              enable: true,
              speed: 0.2,
              size_min: 3,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#007bff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 100,
                smooth: 10,
              },
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 40,
              size: 1,
              duration: 2,
              opacity: 1,
              speed: 2,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        fps_limit: 60,
      }}
    />
  );
}
