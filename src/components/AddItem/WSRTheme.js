import * as React from 'react';

import { ReactComponent as PlusXL }  from '../../assets/icons/PlusXL.svg';
import { ReactComponent as PlusL }  from '../../assets/icons/PlusL.svg';
import { ReactComponent as PlusM }  from '../../assets/icons/plus.svg';
import { ReactComponent as PlusS }  from '../../assets/icons/PlusS.svg';

export const theme = (className) => ({
    className: className,
    icons: {
        AddItemButton: {
            tiny: PlusS,
            small: PlusM,
            medium: PlusL,
            large: PlusXL,
        },
    },
});