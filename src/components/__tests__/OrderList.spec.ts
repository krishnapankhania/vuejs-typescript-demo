import { describe, it, expect, fn } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import Vue from 'vue'
import { mount } from "@vue/test-utils";
import OrderList from "../OrderList.vue";

describe("OrderList", () => {
  it("renders properly", () => {
    const wrapper = mount(OrderList, {
      global: { plugins: [createTestingPinia({ createSpy: fn })] },
      props: {},
    });
    expect(wrapper.find("ul").exists());
  });
});
