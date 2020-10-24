import './utils/save-block.util';
import { parseUtm } from "./utils/parse-utm.util";
import { handleUtmParams } from "./utils/handle-utm-params.util";
import {UtmParamsInterface} from "./interfaces/utm-params.interface";
import {EntryInterface} from "./interfaces/entry.interface";
import {handleEntry} from "./utils/handle-entry.util";


const utmParams: UtmParamsInterface = parseUtm();
const entry: EntryInterface = handleUtmParams(utmParams);

handleEntry(entry);
