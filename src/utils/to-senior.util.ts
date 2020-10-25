import {handleEntry} from "./handle-entry.util";
import {DEFAULT_ENTRY_ADVANCED} from "../const/default-entry-advanced.const";
import {clearBlocks} from "./clear-blocks.util";

function toSenior(): void {
    clearBlocks();
    handleEntry(DEFAULT_ENTRY_ADVANCED);
}
