import React from "react";

import { storiesOf } from "@storybook/react";
import { action, decorateAction } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";

import { Button, Welcome } from "@storybook/react/demo";

const firstArgAction = decorateAction([args => args.slice(0, 1)]);

storiesOf("My Story", module).add("test button",
  withNotes("Test note")(() => (
    <button
      onClick={args => {
        console.log(args);
        action(`Args`)(args, args, args);
        firstArgAction("Test")(args, args, args);
      }}
    >
      Test
    </button>
  ))
);
