/* eslint-disable import/no-anonymous-default-export */
export default {
  control: {},

  '&multiLine': {
    control: {
      minHeight: 30,
    },
    highlighter: {
      padding: 9,
      border: '1px solid transparent',
    },
    input: {
      backgroundColor: '#E9ECEF',
      padding: 9,
      border: '1px solid silver',
      borderRadius: '2rem',
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
