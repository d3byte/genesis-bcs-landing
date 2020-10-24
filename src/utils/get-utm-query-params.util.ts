export function getUtmQueryParams(): any {
    const queryParams = window.location.href.split('?')[1];
    const paramsArray = queryParams.split('&');

    const paramsObj: any = {};

    paramsArray.forEach((param: string) => {
        const key = param.split('=')[0];
        const value = param.split('=')[1];

        paramsObj[key] = value;
    })

    return paramsObj;
}
