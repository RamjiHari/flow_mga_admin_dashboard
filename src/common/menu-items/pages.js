// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  type: 'group',
  children: [
    {
      id: 'sample',
      title: 'Reports',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'sample',
          title: 'Sample Report',
          type: 'item',
          url: '/sample-page',
          target: false
        },
        {
          id: 'sample1',
          title: 'Sample Report',
          type: 'item',
          url: '/sample-page2',
          target: false
        },
      ]
    }
  ]
};

export default pages;
