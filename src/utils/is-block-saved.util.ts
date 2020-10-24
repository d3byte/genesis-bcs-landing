import {getSavedBlocks} from "./get-saved-blocks.util";

export function isBlockSaved(blockId: string): boolean {
    const savedBlocks: string[] = getSavedBlocks();

    return savedBlocks.includes(blockId);
}
