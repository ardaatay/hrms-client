export const UPDATE_COUNT = "UPDATE_COUNT";

export function updateCount(i) {
    return {
        type: UPDATE_COUNT,
        payload: i,
    };
}
