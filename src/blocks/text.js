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
      name: 'COLOUR',
      colour: '#eb2c47',
      colourOptions: [
        '#000000',
        '#495057',
        '#91979c',
        '#f8f9fa',
        '#eb2c47',
        '#8b412e',
        '#19b1f8',
        '#1315e0',
        '#fee610',
        '#958c32',
        '#2de13e',
        '#1d9410',
        '#f56dbb',
        '#aa3ac5',
        '#f57117',
        '#00000000'
      ],
      colourTitles: [
        '0',
        'L',
        '1',
        '2',
        '3',
        'C',
        '7',
        '5',
        '6',
        'F',
        '4',
        'D',
        '8',
        'H',
        '9',
        '.'
      ],
      columns: 4,
    },
  ],
};
// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  testFieldColour,
  addText,
]);
