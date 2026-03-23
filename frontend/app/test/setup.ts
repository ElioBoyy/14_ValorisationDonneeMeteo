import { config } from "@vue/test-utils";

// Exemple: global mocks
config.global.mocks = {
    $t: (msg: string) => msg, // i18n mock
};
