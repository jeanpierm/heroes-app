import React from "react";
import { mount } from "enzyme";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";

describe("Pruebas es <AppRouter />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: false },
  };

  test("should debe mostrar el login si no se está autenticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("should mostrar el componente marvel si está autenticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: { logged: true },
      name: "jeanpier",
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper.find(".navbar").exists()).toBeTruthy();
  });
});
