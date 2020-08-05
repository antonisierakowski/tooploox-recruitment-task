import { ghUserReducer } from '../reducer';

describe('ghUserReducer', () => {
  it('should set isLoading to true and nullify other params on SEARCH_USER_DATA', () => {});

  it('should set isLoading to false, set user from payload and nullify repositories on SEARCH_USER_DATA_SUCCESS', () => {});

  it('should set repositories from payload on SEARCH_USER_REPOSITORIES_SUCCESS', () => {});

  it('should set isLoading to false and nullify other params SEARCH_USER_DATA_FAILURE', () => {});

  it('should return input state otherwise', () => {
    const action = {
      type: 'TEST',
    };

    expect(ghUserReducer(null, action)).toEqual(
      // TODO FIXTURE!!!!
      null,
    );
  });
});
