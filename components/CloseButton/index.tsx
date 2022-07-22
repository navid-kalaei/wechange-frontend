import { ButtonProps, Icon, IconButton, useStyleConfig } from '@chakra-ui/react'
import { FC, MouseEventHandler } from 'react'
import { HiX } from 'react-icons/hi'


interface CloseButtonProps extends ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const CloseButton: FC<CloseButtonProps> = (props) => {
  const { onClick } = props

  const styles = useStyleConfig('CloseButton', props)

  return (
    <IconButton
      __css={styles}
      aria-label="close"
      icon={(
        <Icon
          as={HiX}
          color="white"
        />
      )}
      onClick={onClick}
    />
  )
}


CloseButton.defaultProps = {
  onClick: (event) => {},
}

export default CloseButton
