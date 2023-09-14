import { Td, Tr } from '@chakra-ui/react'
import { formatNumber } from 'lib/utils/currency'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { PercentageRowProps } from './interfaces/interfaces'

const PercentageRow : React.FC<PercentageRowProps> = ({tableHeaders,percentages}) => {
  const tableDataProps = {
    fontSize: 14,
    fontWeight: 700,
    isNumeric: true,
  }

  return (
    <Tr>
      <Td px={0} borderBottomWidth={0} isNumeric={false}>
        <FormattedMessage id={"Percentage"}/>
      </Td>
      {tableHeaders.map((header) => (
        <Td {...tableDataProps} borderBottomWidth={0} key={header}>
          {percentages && formatNumber(String(percentages[header]))}%
        </Td>
      ))}
    </Tr>
  )
}

export default PercentageRow