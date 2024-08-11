# Smart Data Masking Library

## Description

**Smart Data Masking Library** is an advanced npm package designed to protect sensitive information through various data masking techniques. This library offers multiple methods to mask and secure data while ensuring it remains usable for testing, analytics, and other purposes. It provides solutions beyond basic masking techniques, enhancing data security in your applications.

## Unique Methods

### Format-Preserving Encryption (FPE)
Encrypt data while preserving its original format (e.g., credit card numbers, Social Security numbers). This ensures that masked data remains valid for testing or analytics purposes.

### Tokenization
Replace sensitive data with unique tokens. These tokens can be mapped back to the original data by authorized users, ensuring secure data transmission and storage.

### Dynamic Masking Rules
Define dynamic masking rules based on data types and sensitivity levels. For example, mask a portion of an email address while keeping the domain visible.

### Masking Data in Streams
Mask data in real-time streams, such as log files or database queries, ensuring continuous protection of sensitive information.

### Contextual Masking
Apply different masking techniques based on the context of data usage. For instance, mask credit card details differently in billing versus reporting contexts.

## Installation

To install the package, use npm:

```bash
npm install smart-data-masking
````


## How to Import
``` bash
const {
  formatPreservingEncrypt,
  formatPreservingDecrypt,
  tokenize,
  detokenize,
  dynamicMask
} = require('smart-data-masking');

````

## How to use

``` bash
// Tokenize data
const token = tokenize('Sensitive Information');
console.log('Token:', token);

// Detokenize data
const originalData = detokenize(token);
console.log('Original Data:', originalData);
````


## Contribution
Contributing
 - Feel free to submit issues or pull requests if you have suggestions for improvements or additional features.
 
 - it is completely free