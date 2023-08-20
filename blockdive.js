import {toolbox} from './toolbox.js';
import {blocks} from './blocks.js';

Blockly.common.defineBlocks(blocks);
Blockly.inject('blockdive', {
  toolbox: toolbox,
  trashcan: true,
});
