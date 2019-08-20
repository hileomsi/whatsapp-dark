import styled from 'styled-components';
import { List as ListF7, ListItem as ListItemF7 } from 'framework7-react';

export const List = styled(ListF7)`
  margin: 0 !important;
  
  ul:before {
    content: none !important;
  }

  ul:after {
    content: none !important;
  }
`;

export const ListItem = styled(ListItemF7)`
  .item-subtitle {
    opacity: 0.5
  }
  .item-after {
    font-size: 12px !important;
  }
`;