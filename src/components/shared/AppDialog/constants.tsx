import CheckIcon from './components/CheckIcon';
import WarningIcon from './components/WarningIcon';

export const DIALOG_CONTENTS = {
  SUCCESS: {
    defaultIcon: <CheckIcon />,
    defaultMessage: 'Process Success',
  },
  FAIL: {
    defaultIcon: <WarningIcon />,
    defaultMessage: 'Process Failed, \nPlease try again',
  },
};
