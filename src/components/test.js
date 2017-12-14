

var config = {
  webWorkerPath: "../lib/cornerstoneWADOImageLoaderWebWorker.js",
  taskConfiguration: {
    decodeTask: {
      codecsPath: "../lib/cornerstoneWADOImageLoaderCodecs.js"
    }
  }
};
cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
