onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
    // Remove loading animation after 1 second
    window.onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
      }, 1000);
    };

    // Redirect to another site after 7 seconds
      window.onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
      }, 1000);
    };

    // Redirect to another site after 7 seconds
        window.onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
      }, 1000);
    };

    // Redirect to another site after 7 seconds
    // 🌸 Slow down flower animation
// 🌸 Auto slow animation + play music on first click + redirect after 17s
document.addEventListener("DOMContentLoaded", () => {
  const flowers = document.querySelectorAll(".flower");
  const audio = document.createElement("audio");

  // 🎵 Prepare background song
  audio.src = "happy.mp3"; // your cover song file
  audio.autoplay = false; // we'll start it manually on click
  audio.loop = false;
  audio.volume = 0.9;
  audio.style.display = "none";
  document.body.appendChild(audio);

  // 🎧 Play automatically when user clicks anywhere on the page
  const enableAudio = async () => {
    try {
      await audio.play();
      console.log("🎵 Music started automatically!");
    } catch (err) {
      console.warn("⚠️ Audio couldn't autoplay:", err);
    }
    // Remove the event after first play to prevent replay
    document.removeEventListener("click", enableAudio);
  };

  // Wait for first click/tap to start music
  document.addEventListener("click", enableAudio, { once: true });

  // 🌸 Smooth flower animation (like tree growth)
  flowers.forEach((flower, index) => {
    flower.animate(
      [
        { transform: "scale(0) rotate(0deg)", opacity: 0 },
        { transform: "scale(1.2) rotate(10deg)", opacity: 1, offset: 0.6 },
        { transform: "scale(1) rotate(0deg)", opacity: 1 }
      ],
      {
        duration: 17000, // total animation duration
        delay: index * 400, // stagger start times
        easing: "ease-in-out",
        fill: "forwards"
      }
    );
  });

  // 🌞 Gentle sunrise-style background animation
  document.body.animate(
    [
      { backgroundPosition: "center bottom", filter: "brightness(0.6)" },
      { backgroundPosition: "center top", filter: "brightness(1)" }
    ],
    {
      duration: 17000,
      easing: "ease-in-out",
      fill: "forwards"
    }
  );

  // ⏰ Redirect after 17 seconds
  setTimeout(() => {
    window.location.href = "main.html";
  }, 17000);
});

