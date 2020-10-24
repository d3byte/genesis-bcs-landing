import {DefaultEntriesType} from "../types/default-entries.type";
import {CompetenceLevelEnum} from "../enums/competence-level.enum";
import {DEFAULT_ENTRY_NEWBIE} from "./default-entry-newbie.const";

export const DEFAULT_ENTRIES: DefaultEntriesType = {
    [CompetenceLevelEnum.NEWBIE]: DEFAULT_ENTRY_NEWBIE,
    [CompetenceLevelEnum.INTERMEDIATE]: DEFAULT_ENTRY_NEWBIE,
    [CompetenceLevelEnum.ADVANCED]: DEFAULT_ENTRY_NEWBIE,
};
