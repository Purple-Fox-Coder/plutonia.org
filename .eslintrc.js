module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'prefer-const': 'error', // Enforce the use of const
        'no-var': 'error', // Disallow var
    },
};
