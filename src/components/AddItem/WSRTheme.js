import * as React from 'react';

import { ReactComponent as PlusXL }  from '../../assets/icons/PlusXL.svg';
import { ReactComponent as PlusL }  from '../../assets/icons/PlusL.svg';
import { ReactComponent as PlusM }  from '../../assets/icons/PlusM.svg';
import { ReactComponent as PlusS }  from '../../assets/icons/PlusS.svg';

export const theme = () => ({
    icons: {
        AddItemButton: {
            tiny: () => <PlusS className="AddItemSIcon" style={{ flexShrink: 0 }}/>,
            small: PlusM,
            medium: PlusL,
            large: PlusXL,
        },
    },
});