import {EntryInterface} from "../interfaces/entry.interface";
import {CompetenceLevelEnum} from "../enums/competence-level.enum";

export const DEFAULT_ENTRY_ADVANCED: EntryInterface = {
  route: {
    competenceLevel: CompetenceLevelEnum.ADVANCED,
    blocks: ['i-want-tariff', 'why-us', 'are-interested-bonds', 'company-advantages', 'where-invest-cl', 'get-consultation'],
  },
};
