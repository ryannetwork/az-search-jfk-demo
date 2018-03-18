import { HocrPreviewStyleMap } from "./hocr-common.style";

const style = require("./hocr-page.style.scss");


export interface HocrPageStyleMap {
  page?: string;
  background?: string;
  image?: string;
  placeholders?: string;
}

export const defaultPageStyle: HocrPageStyleMap = {
  page: style.page,
  background: style.background,
  image: style.image,
  placeholders: style.placeholders,
}

export const injectDefaultPageStyle = (userStyle: HocrPreviewStyleMap): HocrPreviewStyleMap => {
  return {
    ...defaultPageStyle,
    ...userStyle,
  };
}