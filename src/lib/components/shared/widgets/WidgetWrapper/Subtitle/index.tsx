import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { IntlShape, useIntl } from 'react-intl';
import { SubtitleProps } from './interfaces/interfaces'

const Subtitle : React.FC<SubtitleProps> = ({additionalTitle,subtitle}) => {
  const intl : IntlShape = useIntl();
  
  return (
    <>
      {additionalTitle && (
        <Box pt={{base : 2, md: 2}}>
          <Text fontSize="sm">
            {additionalTitle}
          </Text>
        </Box>
      )}
      <Box pt={{base : 2, md: 2 }} pb={{base : 4, md : 6 }}>
        <Text color="gray.500" fontSize="sm">
          {subtitle && intl.formatMessage({ id: subtitle })}
        </Text>
      </Box>
    </>
  )
}


export default Subtitle