
import { 
  SET_SEARCH_TERM, 
  GET_ROBOTS_IS_PENDING,
  GET_ROBOT_IS_PENDING,
  GET_ROBOTS_WAS_SUCCESSFUl,
  GET_ROBOT_WAS_SUCCESSFUL,
  GET_ROBOTS_HAD_ERROR,
  GET_ROBOT_HAD_ERROR,
} from './constants';

export const setSearchTerm = (term) => ({ 
  type: SET_SEARCH_TERM,
  payload: term,
});

const USER_API = 'https://jsonplaceholder.typicode.com/users';

export const getRobots = () => {
  return (dispatch) => {
    dispatch({type: GET_ROBOTS_IS_PENDING});

    fetch(USER_API)
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_ROBOTS_WAS_SUCCESSFUl,
          payload: data,
        });
      })
      .catch(error => {
        dispatch({
          type:GET_ROBOTS_HAD_ERROR,
          payload: error,
        });
      })
  }
}

export const getRobot = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.robotData.robots.find(robot => robot.id === parseInt(id, 10))) {
      return;
    }

    dispatch({ type: GET_ROBOT_IS_PENDING })

    fetch(`${USER_API}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_ROBOT_WAS_SUCCESSFUL,
          payload: data,
        })
      })
      .catch((error) => {
        dispatch({
          type:GET_ROBOT_HAD_ERROR,
          payload: error,
        });
      })
  }
}