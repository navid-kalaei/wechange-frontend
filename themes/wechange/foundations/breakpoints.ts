import { Breakpoints } from '@chakra-ui/theme-tools'
import type { Dict } from '@chakra-ui/utils'


// https://git.wechange.de/wechange/aktuell/redesign/-/issues/107
// https://git.wechange.de/wechange/aktuell/redesign/-/wikis/How%20to%20add%20new%20themes
const breakpoints: Breakpoints<Dict> = {
  base: '0em',
  xs: '20em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}


export default breakpoints
