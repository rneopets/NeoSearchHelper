export default [
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            globals: {
                $: "readonly",
                jQuery: "readonly",
                document: "readonly",
                localStorage: "readonly",
                MutationObserver: "readonly",
                setTimeout: "readonly",
                clearTimeout: "readonly",
                URL: "readonly",
                toggleWidget__2020: "readonly",
            },
        },
        rules: {
            "no-undef": "error",
            "no-unused-vars": [
                "error",
                { caughtErrorsIgnorePattern: "^_$" },
            ],
        },
    },
];
