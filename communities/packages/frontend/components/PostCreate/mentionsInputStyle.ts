/* eslint-disable import/no-anonymous-default-export */
export default {
  control: {},

  '&multiLine': {
    control: {
      minHeight: 90,
      zIndex: 100,
    },
    highlighter: {
      padding: 9,
      border: '1px solid transparent',
    },
    input: {
      backgroundColor: '#E9ECEF',
      padding: 9,
      border: '1px solid #E9ECEF',
      borderRadius: '1rem',
      '&:focus': {
        outline: 'none',
      },
    },
  },

  '&singleLine': {
    display: 'inline-block',
    width: 180,

    highlighter: {
      padding: 1,
      border: '2px inset transparent',
    },
    input: {
      padding: 1,
      border: '2px inset',
    },
  },

  suggestions: {
    list: {
      zIndex: 50,
      backgroundColor: 'white',
      border: '1px solid rgba(0,0,0,0.15)',
      fontSize: 16,
    },
    item: {
      padding: '5px 15px',
      borderBottom: '1px solid rgba(0,0,0,0.15)',
      '&focused': {
        backgroundColor: '#cee4e5',
      },
    },
  },
};
