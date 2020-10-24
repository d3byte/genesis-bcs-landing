import { UtmParamsInterface } from "../interfaces/utm-params.interface";
import {getUtmQueryParams} from "./get-utm-query-params.util";

export function parseUtm(): UtmParamsInterface {
    const params: any = getUtmQueryParams();

    const utmParams: UtmParamsInterface = {};

    if (params.utm_content) {
        utmParams.blocks = params.utm_content.split(',');
    }

    if (params.utm_term) {
        utmParams.competenceLevel = utmParams.competenceLevel;
    }

    return utmParams;

}
