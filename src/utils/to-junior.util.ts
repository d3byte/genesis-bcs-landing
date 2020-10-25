import {handleEntry} from "./handle-entry.util";
import {DEFAULT_ENTRY_NEWBIE} from "../const/default-entry-newbie.const";
import {clearBlocks} from "./clear-blocks.util";

function toJunior(): void {
    clearBlocks();
    handleEntry(DEFAULT_ENTRY_NEWBIE);
}
