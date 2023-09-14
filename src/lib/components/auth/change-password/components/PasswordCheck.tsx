import { Grid, Text } from '@chakra-ui/react';
import { FormattedMessage, useIntl } from 'react-intl';

import type { NewPasswordCheck } from 'lib/components/auth/change-password/types';

import PasswordCheckItem from './PasswordCheckItem';

type PasswordCheckProps = {
  passwordCheckState: NewPasswordCheck;
};

const PasswordCheck = ({
  passwordCheckState: {
    isCapitalExist,
    isNumberExist,
    isLowerCaseExist,
    isSpecialCharExist,
    isAboveMinimum,
    isBelowMaximum,
  },
}: PasswordCheckProps) => {
  const intl = useIntl();
  return (
    <Grid gap={{ base: 2, md: 4 }}>
      <Text fontSize="sm" color="gray.600">
        <FormattedMessage id="passwordRequirement" />
      </Text>

      <Grid gap={2} templateColumns={{ base: '1fr', md: '2fr 1fr' }}>
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          <PasswordCheckItem
            isFulfilled={isCapitalExist}
            label={intl.formatMessage({ id: 'uppercase' })}
          />
          <PasswordCheckItem
            isFulfilled={isNumberExist}
            label={intl.formatMessage({ id: 'number' })}
          />
          <PasswordCheckItem
            isFulfilled={isLowerCaseExist}
            label={intl.formatMessage({ id: 'lowercase' })}
          />
          <PasswordCheckItem
            isFulfilled={isSpecialCharExist}
            label={intl.formatMessage({ id: 'specialCharacter' })}
          />
        </Grid>

        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: '1fr' }} gap={2}>
          <PasswordCheckItem
            isFulfilled={isAboveMinimum}
            label={intl.formatMessage({ id: 'minCharacter' })}
          />
          <PasswordCheckItem
            isFulfilled={isBelowMaximum}
            label={intl.formatMessage({ id: 'maxCharacter' })}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PasswordCheck;
