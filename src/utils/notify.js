import { Notify } from "quasar";

export function notify(
  msg,
  type = "success",
  color = "dark",
  icon = "success",
  position = "top"
) {
  if (type == "positive") {
    Notify.create({
      message: msg,
      icon,
      type: "positive",
      position,
      color: color,
      actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
    });
  } else if (type == "warning") {
    Notify.create({
      message: msg,
      position,
      icon,
      type: "warning",
      color: color,
      actions: [
        {
          label: "Dismiss",
          color: "white",
          handler: () => {
            /* ... */
          },
        },
      ],
    });
  } else if (type == "info") {
    Notify.create({
      message: msg,
      position,
      icon,
      type: "info",
      color: color,
      actions: [
        {
          label: "Dismiss",
          color: "white",
          handler: () => {
            /* ... */
          },
        },
      ],
    });
  } else {
    Notify.create({
      message: msg,
      position,
      icon,
      color: color,
      actions: [
        {
          label: "Dismiss",
          color: "white",
          handler: () => {
            /* ... */
          },
        },
      ],
    });
  }
}
