import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

lincolnTheme.overrideThemeStyles = () => ({
    a: {
      color: `#FC5432`,
      textShadow: `none`,
      backgroundImage: `none`,
    },
  });

const typography = new Typography(lincolnTheme)

export default typography;