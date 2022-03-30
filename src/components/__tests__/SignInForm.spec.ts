import { describe, it, expect, fn } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import SignInForm from "../SignInForm.vue";

describe("SignInForm", () => {
  it("renders properly", () => {
    const wrapper = mount(SignInForm, {
      global: { plugins: [createTestingPinia({ createSpy: fn })] },
      props: {},
    });
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
    expect(wrapper.find('input[type="password"]').exists()).toBeTruthy();
    expect(wrapper.find("button").exists()).toBeTruthy();
  });

  it("should display error if user submit invalid data", async () => {
    const wrapper = mount(SignInForm, {
      global: { plugins: [createTestingPinia({ createSpy: fn })] },
      props: {},
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("#submit-error").exists()).toBeTruthy();
    expect(wrapper.find("#submit-error").text()).toEqual(
      "Validation failed. Please input proper details"
    );
  });

  it("should display unauthenticated error if password and user doesn't match", async () => {
    const wrapper = mount(SignInForm, {
      global: { plugins: [createTestingPinia({ createSpy: fn })] },
      props: {},
    });
    await wrapper.find('input[type="text"]').setValue("demodemo@abcd.com");
    await wrapper.find('input[type="password"]').setValue("898989898989");
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("#submit-error").exists()).toBeTruthy();
    expect(wrapper.find("#submit-error").text()).toEqual(
      "Unauthenticated access."
    );
  });
  it("should not display error for authenticated users", async () => {
    const wrapper = mount(SignInForm, {
      global: { plugins: [createTestingPinia({ createSpy: fn })] },
      props: {},
    });
    await wrapper.find('input[type="text"]').setValue("krishna@abc.com");
    await wrapper.find('input[type="password"]').setValue("sample123");
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("#submit-error").exists()).toBeFalsy();
  });
});
