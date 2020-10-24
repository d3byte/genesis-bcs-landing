import {UtmParamsInterface} from "../interfaces/utm-params.interface";
import {EntryInterface} from "../interfaces/entry.interface";
import {DEFAULT_ENTRY_NO_COMPETENCE} from "../const/default-entry-no-competence.const";
import {RouteInterface} from "../interfaces/route.interface";
import {DEFAULT_ENTRIES} from "../const/default-entries.const";
import {isBlockSaved} from "./is-block-saved.util";

export function handleUtmParams(params: UtmParamsInterface): EntryInterface {
    // Assign default entry point
    let entry: EntryInterface = DEFAULT_ENTRY_NO_COMPETENCE;

    // Handle utm tags
    if (params.blocks && params.competenceLevel) {
        entry.route = {
            ...params,
        } as RouteInterface;
    } else if (!params.blocks && params.competenceLevel) {
        entry.route = DEFAULT_ENTRIES[params.competenceLevel].route;
    }

    // Delete action blocks that were saved in localStorage
    entry.route.blocks = entry.route.blocks.filter((block: string) => !isBlockSaved(block));

    return entry;
}
