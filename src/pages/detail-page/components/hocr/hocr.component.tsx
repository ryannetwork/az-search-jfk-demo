import * as React from "react";
import { HocrProofreader } from "./hocr.business";

const style = require("./hocr.style.scss");

/**
 * HOCR-Proofreader third party wrapper for React.
 */

const layoutContainerId = "hocr-layout-container-id";
const editorContainerId = "hocr-editor-container-id";


interface HocrProps {
  hocr: string;
}

export class HocrComponent extends React.Component<HocrProps, {}> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    const hocrProofreader = new HocrProofreader({
      layoutContainer: layoutContainerId,
      editorContainer: editorContainerId,
    });
    hocrProofreader.setHocr(this.props.hocr);
  }

  public shouldComponentUpdate() {
    return false;
  }

  public render() {
    return (
      <div className={style.container}>
        <div className={style.layoutContainer} id={layoutContainerId}>
        </div>
        <div className={style.editorContainer} id={editorContainerId}>
        </div>
      </div>
    );
  }
}
