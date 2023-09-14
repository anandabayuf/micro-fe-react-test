import { APP_ASSETS_URL } from "./env";

const BANNERS_PATH = `./${APP_ASSETS_URL}/images/banners/`;

const bannerItems = [
  "banner1.png",
  "banner2.png",
  "banner3.png",
  "banner4.png",
];

export const banners = bannerItems.map(
  (bannerItem) => `${BANNERS_PATH}${bannerItem}`
);
