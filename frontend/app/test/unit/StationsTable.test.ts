import { mount } from "@vue/test-utils";
import StationsTable from "@/components/ui/ecartNormale/stationTable.vue";
import { ref } from "vue";

// mock minimal API (juste pour éviter crash)
vi.mock("~/composables/useApiClient", () => ({
    useApiClient: () => ({
        useApiFetch: () => ({
            data: ref({ results: [] }),
            pending: ref(false),
            error: ref(null),
            refresh: () => {},
        }),
    }),
}));

describe("StationsTable", () => {
    it("mounts without crashing", async () => {
        const wrapper = mount(StationsTable, {
            global: {
                stubs: {
                    UInput: true,
                    UTable: true,
                },
            },
        });

        expect(wrapper.exists()).toBe(true);
    });
});
