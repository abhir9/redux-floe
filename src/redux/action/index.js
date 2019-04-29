export const ADD = 'ADD';

export function addNote(payload) {
    return {
        type: ADD,
        payload
    }
}