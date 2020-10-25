import {EntryInterface} from "../interfaces/entry.interface";
import {CompetenceLevelEnum} from "../enums/competence-level.enum";

export const DEFAULT_ENTRY_INTERMEDIATE: EntryInterface = {
  route: {
    competenceLevel: CompetenceLevelEnum.INTERMEDIATE,
    blocks: ['i-want', 'about-stocks', 'are-interested-bonds', 'dividends-trend-bd', 'where-invest', 'company-advantages', 'check-competence', 'get-consultation'],
  },
};
