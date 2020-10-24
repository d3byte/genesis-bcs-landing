import {SAVED_BLOCKS_KEY} from "../const/saved-blocks-key.const";

export function getSavedBlocks(): string[] {
    return JSON.parse(localStorage.getItem(SAVED_BLOCKS_KEY) || '[]');
}
