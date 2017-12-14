import React, { Component } from "react";
import PropTypes from "prop-types";
import prser from "dicom-parser";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import * as cornerstone from "cornerstone-core";
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;

var config = {
  webWorkerPath: "./cornerstone/cornerstoneWADOImageLoaderWebWorker.js",
  taskConfiguration: {
    decodeTask: {
      codecsPath: "cornerstoneWADOImageLoaderCodecs.js"
    }
  }
};
cornerstoneWADOImageLoader.webWorkerManager.initialize(config);

export default class Detail extends Component {
  static propType = {
    entity: PropTypes.object
  };
  async componentDidMount() {}
  async componentWillReceiveProps(nextProps) {
    const { entity } = nextProps;
    if (entity.dcmFileUrl) {
      const result = await fetch(entity.dcmFileUrl);
      const dcmBlob = await result.blob();
      //new console.warn("fetch result", dcmFile);
      const dcmFile = new File([dcmBlob], "test.dcm");
      console.warn("dcmFile", dcmFile);
      const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(
        dcmFile
      );
      const element = document.getElementById("dicomImage");
      cornerstone.enable(element);
      console.warn("after enable");
      console.warn("imageId", imageId);
      const image = await cornerstone.loadImage(imageId);
      const viewport = cornerstone.getDefaultViewportForImage(element, image);
      cornerstone.displayImage(element, image, viewport);
      console.warn("loaded result");
    }
  }
  render() {
    const { entity } = this.props;
    return (
      <div>
        {entity.dcmFileUrl && (
          <div id="dicomImage" style={{ width: "512", height: "512" }} />
        )}
        <h3>{`Dicom ${entity.name}`}</h3>
      </div>
    );
  }
}
