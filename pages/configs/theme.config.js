import { THEME_ENUM } from 'pages/constants/theme.constant'

/**
 * Since some configurations need to be match with specific themes, 
 * we recommend to use the configuration that generated from demo.
 */

export const themeConfig = {
    themeColor: 'indigo',
    direction: THEME_ENUM.DIR_LTR,
    mode: THEME_ENUM.MODE_LIGHT,
    locale: 'en',
    primaryColorLevel: 600,
    cardBordered: true,
    panelExpand: false,
    controlSize: 'md',
    navMode: 'transparent',
    layout: {
        type: THEME_ENUM.LAYOUT_TYPE_MODERN,
        sideNavCollapse: false,
    },
}
