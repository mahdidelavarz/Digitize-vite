const interestsReducer = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_TO_INTERESTS':
            {
                const updatedInterestList = [...state.interestList];
                const index = updatedInterestList.findIndex((item) => item.id === payload.id);
                if (index < 0) {
                    updatedInterestList.push({ ...payload });
                }
                return { ...state, interestList: updatedInterestList, total: state.total + payload.price };
            }
        case 'REMOVE_FROM_INTERESTS':
            {
                const updatedList = [...state.interestList];
                const filteredList = updatedList.filter((item) => item.id !== payload.id);
                return { ...state, interestList: filteredList };
            }

        default: return state;
    }
}

export default interestsReducer;