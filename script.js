UnicornStudio.addScene({
    elementId: "gravityCoding", // id of the HTML element to render your scene in (the scene will use its dimensions)
    fps: 100, // frames per second (0-120) [optional]
    scale: 1,
    dpi: 1, // pixel ratio [optional]
    lazyLoad: true, // will not initialize the scene until it scrolls into view
    filePath: "./WaterEffect/effect.json",
    interactivity: {
      // [optional]
      mouse: {
        disableMobile: true, // disable touch movement on mobile
      },
    },
  })
    .then((scene) => {
      // scene is ready
      // To remove a scene, you can use:
      // scene.destroy()
    })
    .catch((err) => {
      console.error(err);
    });