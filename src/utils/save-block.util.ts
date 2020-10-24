import {getSavedBlocks} from "./get-saved-blocks.util";
import {SAVED_BLOCKS_KEY} from "../const/saved-blocks-key.const";

export function saveBlock(blockId: string): void {
    const savedBlocks: string[] = [
        ...getSavedBlocks(),
        blockId,
    ];

    localStorage.setItem(SAVED_BLOCKS_KEY, JSON.stringify(savedBlocks));
}
