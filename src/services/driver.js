import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const driverObj = driver({
  showProgress: true,
  allowClose: false,
  popoverClass: 'driverjs-theme',
  steps: [
    {
      element: ".main__list .list__item:nth-child(1)",
      popover: {
        title: "¡Get points by clicking on an image!",
        description:
          "Click on an image, but don't click on any more than once.",
        side: "left",
        align: "start",
      },
    },
    {
      element: ".header__score .score__info:nth-child(1)",
      popover: {
        title: "Score",
        description:
          "Get points every time you click on a card you haven't selected before.",
        side: "left",
        align: "start",
      },
    },
    {
      element: ".header__score .score__info:nth-child(2)",
      popover: {
        title: "Best Score",
        description: "Accumulate and keep your best score obtained",
        side: "left",
        align: "start",
      },
    },
  ],
});
