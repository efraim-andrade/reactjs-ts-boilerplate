import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import useAxios from '~/services/api';
import { ApplicationState } from '~/store';
import { ExampleComponent } from '~/components';
import * as PeopleActions from '~/store/modules/people/actions';

// interface Person {
//   name: string;
// }

export default function Main() {
  const dispatch = useDispatch();

  const people = useSelector((state: ApplicationState) => state.people.data);

  useEffect(() => {
    dispatch(PeopleActions.loadRequest());
  }, [dispatch]);

  /** useAxios Example
    const [{ data, loading, error }] = useAxios<Person>('people/1');

    if (loading) return <span>Carregando...</span>;
    if (error) return <span>{`ocorreu um error: ${error}`}</span>;
  */

  return <ExampleComponent title={people.name} />;
}
