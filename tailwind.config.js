const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
  },
  darkMode: 'class',
  theme: {
    aspectRatio: {
      1: '1',
      2: '2',
      3: '3',
      4: '4'
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      grey_paper: '#f9f9f9'
    }),
    colors: {
      brand: '#C21614',
      btn1: '#232255',
      bg1: '#F8F8F8',
      link1: '#016EDC',
      text1: '#A3A3AE',
      text1_hover: '#6e7187',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      teal: colors.cyan,
      green: colors.emerald,
      red: colors.rose,
      purple: colors.purple,
      pink: colors.pink,
      yellow: colors.yellow,
      indigo: colors.indigo,
      gray: {
        50: '#F6F6F9',
        100: '#EDECF3',
        150: '#E6E3EF',
        200: '#E1DDEC',
        250: '#C9C5D5',
        300: '#b2adbe',
        400: '#918c9e',
        500: '#716c7f',
        600: '#565165',
        700: '#433e52',
        800: '#363145',
        900: '#252336',
        1000: '#1c1b2e'
      },
      blue: {
        50: '#DCEEFF',
        100: '#B4DBFF',
        200: '#85C5FE',
        300: '#4EABFE',
        400: '#2296fe',
        500: '#0084FF',
        600: '#0574e4',
        700: '#0D5DBD',
        800: '#144696',
        900: '#1D2C6C',
        1000: '#241748'
      },
      orange: {
        200: '#EB7752',
        300: '#EA6C45',
        400: '#E85C30',
        500: '#EC4815',
        600: '#DC4419',
        700: '#D04017',
        800: '#C1360F'
      }
    },
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1500px',
      '2xl': '1800px'
    },
    fontSize: {
      xs: '.875rem',
      sm: '1rem',
      base: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '15px': '15px',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '3.5xl': '2.25rem',
      '4xl': '2.5rem',
      '5xl': '3.25rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      13: '13px'
    },
    borderWidth: {
      DEFAULT: '3px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px'
    },
    borderWidth: {
      DEFAULT: '3px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px'
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      15: '3.75rem',
      16: '4rem',
      17: '4.25rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      34: '8.625rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      370: '370px'
    },
    width: {
      370: '370px',
      auto: 'auto',
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      128: '32rem',
      152: '38rem',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      '1/24': '4.16666666%',
      '2/24': '8.33333333%',
      '3/24': '12.5%',
      '4/24': '16.6666667%',
      '5/24': '20.83333333%',
      '6/24': '25%',
      '7/24': '29.16666666%',
      '8/24': '33.33333333%',
      '9/24': '37.5%',
      '10/24': '41.66666666%',
      '11/24': '45.83333333%',
      '12/24': '50%',
      '13/24': '54.16666666%',
      '14/24': '58.33333333%',
      '15/24': '62.5%',
      '16/24': '66.66666667%',
      '17/24': '70.83333333%',
      '18/24': '75%',
      '19/24': '79.16666666%',
      '20/24': '83.33333333%',
      '21/24': '87.5%',
      '22/24': '91.66666666%',
      '23/24': '95.83333333%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content'
    },
    extend: {
      textDecoration: ['active'],
      opacity: {
        7: '.075',
        15: '.15'
      },
      maxWidth: {
        '8xl': '86rem'
      },
      spacing: {
        128: '32rem'
      },
      zIndex: {
        '-1': '-1'
      },
      fontFamily: {
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
        lato: ['Lato', ...defaultTheme.fontFamily.sans]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              color: theme('colors.gray.700'),
              backgroundColor: theme('colors.gray.100'),
              lineHeight: 1.5
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.25rem',
              borderRadius: '3px',
              margin: '-0.25rem 1px'
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            'p a': {
              fontWeight: 'bold'
            },
            'p:first-of-type': {
              fontSize: '1.125rem'
            },
            p: {
              marginBottom: '26px',
              lineHeight: '30px',
              color: theme('colors.black'),
              fontSize: '15px',
              fontWeight: 500
            },
            ul: {
              marginLeft: '40px'
            },
            'ul li': {
              color: theme('colors.black'),
              fontSize: '15px',
              fontWeight: 500
            },
            'ul > li::before': {
              backgroundColor: theme('colors.black')
            },
            table: {
              border: 'none',
              borderCollapse: 'collapse',
              tableLayout: 'fixed',
              width: '100%',
              color: theme('colors.black'),
              fontSize: '15px',
              fontWeight: 500
            },
            'table thead': {
              border: 'none',
              fontWeight: 'bolder'
            },
            'table tr': {
              border: 'none'
            },
            'table td': {
              padding: 0
            }
          }
        },
        tint: {
          css: {
            pre: {
              color: theme('colors.gray.800'),
              backgroundColor: theme('colors.gray.150')
            }
          }
        },
        lg: {
          css: {
            pre: {
              lineHeight: 1.5
            },
            'p:first-of-type': {
              fontSize: '1.365rem'
            }
          }
        },
        xl: {
          css: {
            pre: {
              lineHeight: 1.5
            },
            'p:first-of-type': {
              fontSize: '1.365rem'
            }
          }
        },
        // dark: {
        //   css: {
        //     color: theme('colors.gray.200'),
        //     '[class~="lead"]': { color: theme('colors.gray.400') },
        //     a: { color: theme('colors.gray.100') },
        //     strong: { color: theme('colors.gray.100') },
        //     'ul > li::before': { backgroundColor: theme('colors.gray.700') },
        //     hr: { borderColor: theme('colors.gray.800') },
        //     blockquote: {
        //       color: theme('colors.gray.100'),
        //       borderLeftColor: theme('colors.gray.800')
        //     },
        //     h1: { color: theme('colors.gray.100') },
        //     h2: { color: theme('colors.gray.100') },
        //     h3: { color: theme('colors.gray.100') },
        //     h4: { color: theme('colors.gray.100') },
        //     code: {
        //       color: theme('colors.gray.100'),
        //       backgroundColor: theme('colors.gray.1000')
        //     },
        //     'a code': { color: theme('colors.gray.100') },
        //     pre: {
        //       color: theme('colors.gray.200'),
        //       backgroundColor: theme('colors.gray.900')
        //     },
        //     thead: {
        //       color: theme('colors.gray.100'),
        //       borderBottomColor: theme('colors.gray.700')
        //     },
        //     'tbody tr': { borderBottomColor: theme('colors.gray.800') }
        //   }
        // },
        primary: {
          css: {
            color: theme('colors.gray.50'),
            '[class~="lead"]': { color: theme('colors.gray.400') },
            a: { color: theme('colors.gray.100') },
            strong: { color: theme('colors.gray.100') },
            'ul > li::before': { backgroundColor: theme('colors.gray.700') },
            hr: { borderColor: theme('colors.gray.800') },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.800')
            },
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.100') },
            h3: { color: theme('colors.gray.100') },
            h4: { color: theme('colors.gray.100') },
            code: {
              color: theme('colors.gray.100'),
              backgroundColor: 'rgba(0,0,0,0.15)'
            },
            'a code': { color: theme('colors.gray.100') },
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: 'rgba(0,0,0,0.15)'
            },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.700')
            },
            'tbody tr': { borderBottomColor: theme('colors.gray.800') }
          }
        }
      })
    }
  },
  variants: {
    accessibility: ['responsive', 'focus-within', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    animation: ['responsive'],
    appearance: ['responsive'],
    backdropBlur: ['responsive'],
    backdropBrightness: ['responsive'],
    backdropContrast: ['responsive'],
    backdropFilter: ['responsive'],
    backdropGrayscale: ['responsive'],
    backdropHueRotate: ['responsive'],
    backdropInvert: ['responsive'],
    backdropOpacity: ['responsive'],
    backdropSaturate: ['responsive'],
    backdropSepia: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundBlendMode: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: ['responsive', 'odd', 'even', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    backgroundImage: ['responsive'],
    backgroundOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    backgroundOrigin: ['responsive'],
    blur: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxDecorationBreak: ['responsive'],
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    boxSizing: ['responsive'],
    brightness: ['responsive'],
    clear: ['responsive'],
    container: ['responsive'],
    contrast: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive', 'dark'],
    divideOpacity: ['responsive', 'dark'],
    divideStyle: ['responsive'],
    divideWidth: ['responsive'],
    dropShadow: ['responsive'],
    fill: ['responsive'],
    filter: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontWeight: ['responsive'],
    gap: ['responsive'],
    gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
    grayscale: ['responsive'],
    gridAutoColumns: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridAutoRows: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridColumnStart: ['responsive'],
    gridRow: ['responsive'],
    gridRowEnd: ['responsive'],
    gridRowStart: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridTemplateRows: ['responsive'],
    height: ['responsive'],
    hueRotate: ['responsive'],
    inset: ['responsive'],
    invert: ['responsive'],
    isolation: ['responsive'],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    mixBlendMode: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus-within', 'focus'],
    overflow: ['responsive'],
    overscrollBehavior: ['responsive'],
    padding: ['responsive'],
    placeContent: ['responsive'],
    placeItems: ['responsive'],
    placeSelf: ['responsive'],
    placeholderColor: ['responsive', 'dark', 'focus'],
    placeholderOpacity: ['responsive', 'dark', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
    ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
    ringWidth: ['responsive', 'focus-within', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    saturate: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    sepia: ['responsive'],
    skew: ['responsive', 'hover', 'focus'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    textOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    textOverflow: ['responsive'],
    textTransform: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    transitionDelay: ['responsive'],
    transitionDuration: ['responsive'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    translate: ['responsive', 'hover', 'focus'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive', 'focus-within', 'focus'],
    aspectRatio: ['responsive', 'hover'],
    extend: { typography: ['tint', 'dark', 'primary'] }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
};
