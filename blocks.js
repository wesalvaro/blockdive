export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  {
    "type": "kit",
    "message0": "BCD %1 Exposure %2",
    "args0": [
      {
        "type": "input_value",
        "name": "bc",
        "check": ["bc", "rental"],
      },
      {
        "type": "input_value",
        "name": "suit",
        "check": ["suit", "rental"],
      },
    ],
    "inputsInline": false,
    "colour": 250,
    "tooltip": "Dive",
    "helpUrl": ""
  },
  {
    "type": "rental",
    "message0": "Rental %1",
    "args0": [
      {
        "type": "input_dummy",
      },
    ],
    "output": "rental",
    "colour": 100,
    "tooltip": "Rental",
    "helpUrl": ""
  },
  {
    "type": "bc_back",
    "message0": "Backmount %1 Weight Pockets %2 Weight %3",
    "args0": [
      {
        "type": "input_dummy",
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "input_value",
        "name": "weight",
        "check": "rental",
      }
    ],
    "output": "bc",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "bc_side",
    "message0": "Sidemount %1 Tank Rigging %2",
    "args0": [
      {
        "type": "input_dummy",
      },
      {
        "type": "input_dummy",
      }
    ],
    "output": "bc",
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "suit_wet",
    "message0": "Wetsuit %1 Fins %2",
    "args0": [
      {
        "type": "input_dummy",
      },
      {
        "type": "input_value",
        "name": "fins",
        "check": ["fins", "rental"],
      },
    ],
    "output": "suit",
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "suit_dry",
    "message0": "Drysuit %1 Inflator Hose %2 Spare Seals %3 Fins %4",
    "args0": [
      {
        "type": "input_dummy",
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "input_dummy",
      },
      {
        "type": "input_value",
        "name": "fins",
        "check": ["fins", "rental"],
      },
    ],
    "output": "suit",
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "fins_fullfoot",
    "message0": "Full-foot %1 Socks %2",
    "args0": [
      {
        "type": "input_dummy",
      },
      {
        "type": "input_value",
        "name": "socks",
        "check": ["socks", "rental"],
      },
    ],
    "output": "fins",
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "fins_openheel",
    "message0": "Open-heel %1 Boots %2",
    "args0": [
      {
        "type": "input_dummy",
      },
      {
        "type": "input_value",
        "name": "boots",
        "check": ["boots", "rental"],
      },
    ],
    "output": "fins",
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "feet_socks",
    "message0": "Socks %1",
    "args0": [
      {
        "type": "input_dummy",
      },
    ],
    "output": "socks",
    "colour": 170,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "feet_boots",
    "message0": "Boots %1",
    "args0": [
      {
        "type": "input_dummy",
      },
    ],
    "output": "boots",
    "colour": 170,
    "tooltip": "",
    "helpUrl": ""
  },
]);