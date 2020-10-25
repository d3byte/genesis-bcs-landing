const SAVED_BLOCKS_KEY = 'passedBlocks';

function getSavedBlocks() {
    return JSON.parse(localStorage.getItem(SAVED_BLOCKS_KEY) || '[]');
}

function saveBlock(blockId) {
    const savedBlocks = [
        ...getSavedBlocks(),
        blockId,
    ];
    localStorage.setItem(SAVED_BLOCKS_KEY, JSON.stringify(savedBlocks));
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

var CompetenceLevelEnum;
(function (CompetenceLevelEnum) {
    CompetenceLevelEnum["NEWBIE"] = "newbie";
    CompetenceLevelEnum["INTERMEDIATE"] = "intermediate";
    CompetenceLevelEnum["ADVANCED"] = "advanced";
})(CompetenceLevelEnum || (CompetenceLevelEnum = {}));

const DEFAULT_ENTRY_NEWBIE = {
    route: {
        competenceLevel: CompetenceLevelEnum.NEWBIE,
        blocks: ['i-want', 'about-stocks', 'are-interested-bonds', 'how-works', 'dividends-trend', 'where-invest', 'why-us', 'company-advantages', 'get-consultation'],
    },
};

function clearBlocks() {
    const parent = document.getElementById(BLOCKS_CONTAINER_KEY);
    const blocks = Array.from(parent.childNodes);
    blocks.forEach((block) => {
        document.body.appendChild(block.cloneNode(true));
        block.remove();
    });
}

function toJunior() {
    clearBlocks();
    handleEntry(DEFAULT_ENTRY_NEWBIE);
}

const DEFAULT_ENTRY_ADVANCED = {
    route: {
        competenceLevel: CompetenceLevelEnum.ADVANCED,
        blocks: ['i-want-tariff', 'why-us', 'are-interested-bonds', 'company-advantages', 'where-invest-cl', 'get-consultation'],
    },
};

function toSenior() {
    clearBlocks();
    handleEntry(DEFAULT_ENTRY_ADVANCED);
}

function getUtmQueryParams() {
    const queryParams = window.location.href.split('?')[1];
    const paramsArray = (queryParams || '').split('&');
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
        utmParams.competenceLevel = params.utm_term;
    }
    return utmParams;
}

const DEFAULT_ENTRY_INTERMEDIATE = {
    route: {
        competenceLevel: CompetenceLevelEnum.INTERMEDIATE,
        blocks: ['i-want', 'about-stocks', 'are-interested-bonds', 'dividends-trend-bd', 'where-invest', 'company-advantages', 'check-competence', 'get-consultation'],
    },
};

const DEFAULT_ENTRY_NO_COMPETENCE = Object.assign({}, DEFAULT_ENTRY_INTERMEDIATE);

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

const utmParams = parseUtm();
const entry = handleUtmParams(utmParams);
handleEntry(entry);
