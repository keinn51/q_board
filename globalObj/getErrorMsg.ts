function getErrorMsg(errorStatusCode: number) {
    switch (errorStatusCode) {
        case 401:
            return 'Auth Error.';
            break;
        default:
            return 'Unknown Error.';
    }
}

export default getErrorMsg;