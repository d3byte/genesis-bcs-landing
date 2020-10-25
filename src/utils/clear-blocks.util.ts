import {BLOCKS_CONTAINER_KEY} from "../const/blocks-container-key.const";

export function clearBlocks(): void {
    const parent: HTMLElement = document.getElementById(BLOCKS_CONTAINER_KEY);
    const blocks: ChildNode[] = Array.from(parent.childNodes);

    blocks.forEach((block: ChildNode) => {
        document.body.appendChild(block.cloneNode(true));
        block.remove();
    })
}
