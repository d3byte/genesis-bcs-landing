import {EntryInterface} from "../interfaces/entry.interface";
import {BLOCKS_CONTAINER_KEY} from "../const/blocks-container-key.const";

export function handleEntry(entry: EntryInterface): void {
    const parent: HTMLElement = document.getElementById(BLOCKS_CONTAINER_KEY);
    const blocks: HTMLElement[] = entry.route.blocks.map((blockId: string) => document.getElementById(blockId));

    // Move each block from default position to parent
    blocks.forEach((block: HTMLElement) => {
        parent.appendChild(block.cloneNode(true));
        block.remove();
    })
}
