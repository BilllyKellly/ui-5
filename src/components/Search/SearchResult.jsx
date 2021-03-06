import React from 'react';
import strings from 'lang';
import {
  transformations,
} from 'utility';
import Table from 'components/Table';
import Heading from 'components/Heading';
// import { List } from 'material-ui/List';
// import SearchResultItem from './SearchResultItem';
// import style from './search.css';

const searchColumns = [{
  displayName: strings.th_name,
  field: 'personaname',
  displayFn: (row, col, field) => {
    const subtitle = row.account_id;
    return transformations.player({ ...row,
      subtitle,
    }, col, field);
  },
}];
export default ({
  players,
}) => (
  <div>
    <Heading title={`${players.length} ${strings.app_results}`} />
    <Table paginated data={players} columns={searchColumns} />
  </div>
);
