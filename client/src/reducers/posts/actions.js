export const POSTS_ACTIONS = {
  FINISH_LOADING: "FINISH_LOADING",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_BEGIN: "FETCH_POSTS_BEGIN",
  FETCH_POSTS_ERROR: "FETCH_POSTS_ERROR",
  FETCH_REQUESTS_ACTIVE_SUCCESS: "FETCH_REQUESTS_ACTIVE_SUCCESS",
  FETCH_REQUESTS_INACTIVE_SUCCESS: "FETCH_REQUESTS_INACTIVE_SUCCESS",
  FETCH_OFFERS_ACTIVE_SUCCESS: "FETCH_OFFERS_ACTIVE_SUCCESS",
  FETCH_OFFERS_INACTIVE_SUCCESS: "FETCH_OFFERS_INACTIVE_SUCCESS",
  FETCH_POSTS_REQUESTS_SUCCESS: "FETCH_POSTS_REQUESTS_SUCCESS",
  FETCH_POSTS_OFFERS_SUCCESS: "FETCH_POSTS_OFFERS_SUCCESS",
  NEXT_PAGE: "NEXT_PAGE",
  SET_PAGE: "SET_PAGE",
  RESET_PAGE: "RESET_PAGE",
  SET_LIKE: "SET_LIKE",
  SET_LOADING: "SET_LOADING",
  SET_REPORTED: "SET_REPORTED",
  SHOW_ANYWAY: "SHOW_ANYWAY",
};

export const resetPageAction = ({ isLoading = false, loadMore = true }) => ({
  type: POSTS_ACTIONS.RESET_PAGE,
  payload: {
    isLoading,
    loadMore,
  },
});

export const setLikeAction = (postId, count) => ({
  type: POSTS_ACTIONS.SET_LIKE,
  payload: {
    postId,
    count,
  },
});

export const fetchPostsBegin = () => ({
  type: POSTS_ACTIONS.FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = ({ posts }) => ({
  type: POSTS_ACTIONS.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchRequestsActiveSuccess = ({ posts, userId }) => ({
  type: POSTS_ACTIONS.FETCH_REQUESTS_ACTIVE_SUCCESS,
  payload: { posts, userId },
})

export const fetchRequestsInactiveSuccess = ({ posts, userId }) => ({
  type: POSTS_ACTIONS.FETCH_REQUESTS_INACTIVE_SUCCESS,
  payload: { posts, userId },
})

export const fetchOffersActiveSuccess = ({ posts, userId }) => ({
  type: POSTS_ACTIONS.FETCH_OFFERS_ACTIVE_SUCCESS,
  payload: { posts, userId },
})

export const fetchOffersInactiveSuccess = ({ posts, userId }) => ({
  type: POSTS_ACTIONS.FETCH_OFFERS_INACTIVE_SUCCESS,
  payload: { posts, userId },
})

export const fetchPostsRequestsSuccess = ({ posts, userId }) => ({
  type: POSTS_ACTIONS.FETCH_POSTS_REQUESTS_SUCCESS,
  payload: { posts, userId },
})

export const fetchPostsOffersSuccess = ({ posts, userId }) => ({
  type: POSTS_ACTIONS.FETCH_POSTS_OFFERS_SUCCESS,
  payload: { posts, userId },
})

export const fetchPostsError = (error) => ({
  type: POSTS_ACTIONS.FETCH_POSTS_ERROR,
  payload: error,
});

export const finishLoadingAction = () => ({
  type: POSTS_ACTIONS.FINISH_LOADING,
});

export const setNextPageAction = () => ({
  type: POSTS_ACTIONS.NEXT_PAGE,
});

export const setPageAction = (page) => ({
  type: POSTS_ACTIONS.SET_PAGE,
  payload: { page },
});

export const setLoadingAction = ({ isLoading, loadMore }) => ({
  type: POSTS_ACTIONS.SET_LOADING,
  payload: { isLoading, loadMore },
});

export const setReported = ({ postId }) => ({
  type: POSTS_ACTIONS.SET_REPORTED,
  payload: { postId },
});

export const showAnyway = ({ postId }) => ({
  type: POSTS_ACTIONS.SHOW_ANYWAY,
  payload: { postId },
});

export const postsActions = {
  resetPageAction,
  setLikeAction,
  fetchPostsBegin,
  fetchPostsSuccess,
  fetchRequestsActiveSuccess,
  fetchRequestsInactiveSuccess,
  fetchOffersActiveSuccess,
  fetchOffersInactiveSuccess,
  fetchPostsRequestsSuccess,
  fetchPostsOffersSuccess,
  fetchPostsError,
  finishLoadingAction,
  setLoadingAction,
  setNextPageAction,
  setPageAction,
  setReported,
  showAnyway,
};
