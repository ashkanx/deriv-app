#!/usr/bin/env node

/* eslint-disable no-console */
const path = require('path');
const program = require('commander');
const crc32 = require('crc-32').str;
const fs = require('fs');
const glob = require('glob');
const static_strings = require('./app-static-strings');

program
    .version('0.1.0')
    .description('Build translation source.')
    .option('-v, --verbose', 'Displays the list of paths to be compiled')
    .parse(process.argv);

/** *********************************************
 * Common
 */

const packages_with_translations = ['bot-skeleton', 'bot-web-ui', 'trader', 'core'];
const globs = ['**/*.js', '**/*.jsx'];
const getKeyHash = string => crc32(string);

/** **********************************************
 * Compile
 */
(async () => {
    try {
        const file_paths = [];
        const messages = [];
        const i18n_marker = new RegExp(/i18n_default_text=(['"])(.*?)\1|localize\(\s*(['"])\s*(.*?)\s*\3\s*\)/gs);
        const messages_json = {};
        // Bot: Find all file types listed in `globs`
        for (let i = 0; i < packages_with_translations.length; i++) {
            for (let j = 0; j < globs.length; j++) {
                let files_found = glob.sync(`../../${packages_with_translations[i]}/src/${globs[j]}`);
                files_found = files_found.filter(file_path => file_path.indexOf('__tests__') === -1);
                file_paths.push(...files_found);
            }
        }
        // Iterate over files and extract all strings from the i18n marker
        for (let i = 0; i < file_paths.length; i++) {
            if (program.verbose) {
                console.log(file_paths[i]);
            }

            try {
                const file = fs.readFileSync(file_paths[i], 'utf8');
                let result = i18n_marker.exec(file);
                while (result != null) {
                    const extracted = result[2] || result[4]; // If it captures `text=` then it will be index 2, else its index 4 which captures `localize`
                    messages.push(extracted.replace(/\\/g, ''));
                    result = i18n_marker.exec(file);
                }
            } catch (e) {
                console.log(e);
            }
        }

        // Push static strings to list of messages to be added to JSON
        messages.push(...static_strings);

        // Hash the messages and set the key-value pair for json
        for (let i = 0; i < messages.length; i++) {
            messages_json[getKeyHash(messages[i])] = messages[i];
        }

        // Add to messages.json
        fs.writeFileSync(
            path.resolve(__dirname, '../crowdin/messages.json'),
            JSON.stringify(messages_json),
            'utf8',
            err => console.log(err)
        );
    } catch (e) {
        console.error(e);
    }
})();
