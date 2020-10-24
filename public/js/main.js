const SAVED_BLOCKS_KEY = 'passedBlocks';

function getSavedBlocks() {
    return JSON.parse(localStorage.getItem(SAVED_BLOCKS_KEY) || '[]');
}

function getUtmQueryParams() {
    const queryParams = window.location.href.split('?')[1];
    const paramsArray = queryParams.split('&');
    const paramsObj = {};
    paramsArray.forEach((param) => {
        const key = param.split('=')[0];
        const value = param.split('=')[1];
        paramsObj[key] = value;
    });
    return paramsObj;
}

function parseUtm() {
    const params = getUtmQueryParams();
    const utmParams = {};
    if (params.utm_content) {
        utmParams.blocks = params.utm_content.split(',');
    }
    if (params.utm_term) {
        utmParams.competenceLevel = utmParams.competenceLevel;
    }
    return utmParams;
}

const DEFAULT_ENTRY_NO_COMPETENCE = {
    route: null,
};

var CompetenceLevelEnum;
(function (CompetenceLevelEnum) {
    CompetenceLevelEnum["NEWBIE"] = "newbie";
    CompetenceLevelEnum["INTERMEDIATE"] = "intermediate";
    CompetenceLevelEnum["ADVANCED"] = "advanced";
})(CompetenceLevelEnum || (CompetenceLevelEnum = {}));

const DEFAULT_ENTRY_NEWBIE = {
    route: null,
};

const DEFAULT_ENTRIES = {
    [CompetenceLevelEnum.NEWBIE]: DEFAULT_ENTRY_NEWBIE,
    [CompetenceLevelEnum.INTERMEDIATE]: DEFAULT_ENTRY_NEWBIE,
    [CompetenceLevelEnum.ADVANCED]: DEFAULT_ENTRY_NEWBIE,
};

function isBlockSaved(blockId) {
    const savedBlocks = getSavedBlocks();
    return savedBlocks.includes(blockId);
}

function handleUtmParams(params) {
    // Assign default entry point
    let entry = DEFAULT_ENTRY_NO_COMPETENCE;
    // Handle utm tags
    if (params.blocks && params.competenceLevel) {
        entry.route = Object.assign({}, params);
    }
    else if (!params.blocks && params.competenceLevel) {
        entry.route = DEFAULT_ENTRIES[params.competenceLevel].route;
    }
    // Delete action blocks that were saved in localStorage
    entry.route.blocks = entry.route.blocks.filter((block) => !isBlockSaved(block));
    return entry;
}

const BLOCKS_CONTAINER_KEY = 'blocks-container';

function handleEntry(entry) {
    const parent = document.getElementById(BLOCKS_CONTAINER_KEY);
    const blocks = entry.route.blocks.map((blockId) => document.getElementById(blockId));
    // Move each block from default position to parent
    blocks.forEach((block) => {
        parent.appendChild(block.cloneNode(true));
        block.remove();
    });
}

const utmParams = parseUtm();
const entry = handleUtmParams(utmParams);
handleEntry(entry);
