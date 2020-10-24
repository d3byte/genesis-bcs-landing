import { CompetenceLevelEnum } from "../enums/competence-level.enum";

export interface RouteInterface {
    competenceLevel?: CompetenceLevelEnum;
    blocks: string[];
}
