import {EntryInterface} from "../interfaces/entry.interface";
import {CompetenceLevelEnum} from "../enums/competence-level.enum";

export const DEFAULT_ENTRY_NEWBIE: EntryInterface = {
  route: {
    competenceLevel: CompetenceLevelEnum.NEWBIE,
    blocks: ['i-want', 'about-stocks', 'are-interested-bonds', 'how-works', 'dividends-trend', 'where-invest', 'why-us', 'company-advantages', 'get-consultation'],
  },
};
