/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.
const addText = {
  type: 'add_text',
  message0: 'Add text %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT',
      check: 'String',
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 160,
  tooltip: '',
  helpUrl: '',
};
const testFieldColour ={
  type: 'test_field_colour',
  message0: 'colour: %1',
  args0: [
    {
      type: 'field_colour',
      name: 'FIELDNAME',
      colour: '#ff4040',
      colourOptions: [
        '#ff4040',
        '#ff8080',
        '#ffc0c0',
        '#4040ff',
        '#8080ff',
        '#c0c0ff',
      ],
      colourTitles: [
        'dark pink',
        'pink',
        'light pink',
        'dark blue',
        'blue',
        'light blue',
      ],
      columns: 3,
    },
  ],
};
// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  addText,
  testFieldColour,
]);
