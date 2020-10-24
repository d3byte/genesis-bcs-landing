import { parse } from 'qs';
import { UtmParamsInterface } from "../interfaces/utm-params.interface";

export function parseUtm(): UtmParamsInterface {
    const params: any = parse(window.location.search, { ignoreQueryPrefix: true });

    const utmParams: UtmParamsInterface = {};

    if (params.utm_content) {
        utmParams.blocks = params.utm_content.split(',');
    }

    if (params.utm_term) {
        utmParams.competenceLevel = utmParams.competenceLevel;
    }

    return utmParams;

}
