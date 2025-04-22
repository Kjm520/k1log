module.exports = {
    extends: [
      'stylelint-config-standard',
    ],
    rules: {
      'selector-class-pattern': null,
      "selector-id-pattern": null, 
      "declaration-empty-line-before": null,
      "unit-allowed-list": ["%", "deg", "px", "rem", "ms", "vh"],
    },
  };